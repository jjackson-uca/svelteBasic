import { Vec } from '$lib/tstypes';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	let a = new Vec();
	let b = new Vec(1, 2);
	let c = b.minus(a);

	console.log(c);

	return json(usr);
}
