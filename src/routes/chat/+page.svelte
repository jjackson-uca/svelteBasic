<script>
	let input = '';
	/**
	 * @type {any[]}
	 */
	let chatLog = [];
	let loading = false;
	let resp = 0;
	/**
	 * @type {number | undefined}
	 */
	let intervalHolder;
	async function sendMessage() {
		if (!input) return;
		loading = true;
		typing.innerHTML = '';
		chatLog = [...chatLog, { role: 'user', content: input }];
		if (intervalHolder) {
			clearInterval(intervalHolder);
		}
		try {
			await new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(true);
				}, 2000);
			});
			chatLog = [
				...chatLog,
				{
					role: 'assistant',
					content:
						'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
				}
			];
		} catch (error) {
			console.error('Error', error);
			chatLog = [
				...chatLog,
				{ role: 'assistant', content: 'Something went wrong. Please try again.' }
			];
		}
		intervalHolder = typeEffect(chatLog[chatLog.length - 1].content);
		input = '';
		//might defer "loading = false;" to when typing finishes? depends on if you want to make the user wait or not
		loading = false;
		resp = resp + 1;
	}

	//lower is faster
	var speed = 5;
	let sentanceBreak = 10;
	/**
	 * @type {HTMLParagraphElement}
	 */
	let typing;
	/**
	 * @param {string} text
	 */
	function typeEffect(text) {
		typing.innerHTML = '';
		if (typing.parentElement) {
			typing.parentElement.scrollTop = typing.parentElement.scrollHeight;
		}
		var i = 0;
		var timer = setInterval(function () {
			if (i < text.length) {
				if (sentanceBreak > 0) {
					sentanceBreak--;}
                 else {
					let letter = text.charAt(i++);
					switch (text.charAt(i+1)) {
						// Uppercase letters
						case 'A':
						case 'B':
						case 'C':
						case 'D':
						case 'E':
						case 'F':
						case 'G':
						case 'H':
						case 'I':
						case 'J':
						case 'K':
						case 'L':
						case 'M':
						case 'N':
						case 'O':
						case 'P':
						case 'Q':
						case 'R':
						case 'S':
						case 'T':
						case 'U':
						case 'V':
						case 'W':
						case 'X':
						case 'Y':
						case 'Z':
                            sentanceBreak = 15; 
							break;
						// Lowercase letters
						case 'a':
						case 'b':
						case 'c':
						case 'd':
						case 'e':
						case 'f':
						case 'g':
						case 'h':
						case 'i':
						case 'j':
						case 'k':
						case 'l':
						case 'm':
						case 'n':
						case 'o':
						case 'p':
						case 'q':
						case 'r':
						case 's':
						case 't':
						case 'u':
						case 'v':
						case 'w':
						case 'x':
						case 'y':
						case 'z':
                            sentanceBreak = 5; 
							break;

						// Common punctuation
						case '.':
						case ',':
						case ';':
						case ':':
						case '!':
						case '?':
						case '-':
						case '_':
						case '(':
						case ')':
						case '{':
						case '}':
						case '[':
						case ']':
						case '"':
						case "'":
						case '/':
						case '\\':
						case '|':
						case '`':
						case '~':
						case '@':
						case '#':
						case '$':
						case '%':
						case '^':
						case '&':
						case '*':
						case '+':
						case '=':
                            sentanceBreak = 25;
							break;

						// Default case for unhandled characters
						default:
                            sentanceBreak = 30;
							break;
					}
                    sentanceBreak+=Math.random()*10;
					typing.append(letter);

				}
			} else {
				clearInterval(timer);
			}
		}, speed);
		return timer;
	}
</script>

<div
	style="display: flex;
flex-direction: column;
justify-content:center;
padding-left:20%;
padding-right:20%;"
>
	<div
		style="height: 60vh;
    display:flex;
    flex-direction:column-reverse;"
	>
		<ul
			style="display:flex;
    flex-direction:column-reverse;
    overflow-y:scroll;
    padding-right: 34px"
			id="list"
		>
			<li>
				{#if chatLog.length > 0 && chatLog.toReversed()[0].role != 'user'}
					<span class={chatLog.toReversed()[0].role === 'user' ? 'user' : 'assistant'}>
						{chatLog.toReversed()[0].role === 'user' ? 'You' : 'GPT'}:
					</span>
				{/if}
				<p bind:this={typing}></p>
			</li>

			{#each chatLog.toReversed() as message, index}
				{#if !(index == 0 && message.role != 'user')}
					<li>
						<span class={message.role === 'user' ? 'user' : 'assistant'}>
							{message.role === 'user' ? 'You' : 'GPT'}:
						</span>
						<p>{message.content}</p>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
	<input
		type="text"
		bind:value={input}
		placeholder="Type your message..."
		on:keydown={(e) => e.key === 'Enter' && sendMessage()}
		disabled={loading}
		autofocus
	/>
	<button on:click={sendMessage} disabled={loading}>
		{loading ? 'Sending...' : 'Send'}
	</button>
</div>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		margin-bottom: 10px;
	}
	.user {
		font-weight: bold;
		color: rgb(166, 166, 166);
	}
	.assistant {
		font-weight: bold;
		color: green;
	}
</style>
