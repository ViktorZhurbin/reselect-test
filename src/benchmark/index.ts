import { Bench } from "tinybench";
import { store } from "../redux/rootReducer.js";
import { usersMapSelectors } from "../redux/users/selectors.js";

console.log("");

const benches: Record<string, Bench> = {};

const state = store.getState();

console.log("users count", Object.keys(state.users.usersMap).length);

const usersMapSelectorsEntries = Object.entries(usersMapSelectors);

for (const [entryName, entry] of usersMapSelectorsEntries) {
	if (!benches[entryName]) {
		benches[entryName] = new Bench();
	}

	const bench = benches[entryName];

	for (const entryItem of Object.values(entry)) {
		bench.add(entryItem.libName, () => {
			entryItem.selector(state);
		});
	}
}

async function run(entryName: string, bench: Bench) {
	console.log("");
	console.log(`Testing ${entryName}...`);

	await bench.warmup();
	await bench.run();

	console.table(bench.table());
}

for (const type in benches) {
	await run(type, benches[type]);
}
