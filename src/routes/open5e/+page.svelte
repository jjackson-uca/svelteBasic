<script>
	import { writable } from 'svelte/store';

	/** @type {import('./$types').PageData} */
	export let data;

	let spellgroups = writable([]);

	async function loadSpells() {
		let spellsData = await fetch('https://api.open5e.com/v1/spelllist/');
		let spells = await spellsData.json();
		console.log(spells);
		$spellgroups = spells.results;
	}

	loadSpells();

	// @ts-ignore
</script>

{#each $spellgroups as spellgroup}
	<div>
		<h1>{spellgroup.name}</h1>
		<div>
			<ul>
				{#each spellgroup.spells as spell}
					<li>{spell}</li>
				{/each}
			</ul>
		</div>
	</div>
{/each}
