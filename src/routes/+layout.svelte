<script>
	import Helper from '$lib/Helper.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<nav style="background-color:black; width: 100%; height: 40px;">
	<Helper helperColor="red"></Helper>
</nav>
<slot></slot>
