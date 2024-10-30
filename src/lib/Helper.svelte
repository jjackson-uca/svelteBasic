<script>
	export let helperText;
	export let helperColor;
</script>

<div
	style="border: solid {helperColor ?? 'blue'};
        border-radius: 100%;
        border-width:10px; 
        height: 60px; 
        aspect-ratio: 1/1; 
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center;"
>
	<h1>{'HELP'}</h1>
	<h2>Click Me</h2>
</div>
{#if helperText}
	<p>{helperText}</p>
{/if}

<style>
	h1,
	h2,
	p {
		margin: 0px;
		padding: 0px;
	}
	h1 {
		font-size: larger;
	}
	h2 {
		font-size: small;
	}
</style>
