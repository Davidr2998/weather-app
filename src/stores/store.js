import { writable } from 'svelte/store';

const CITYSTORE = writable('');

const SEARCHSTORE = writable([]);

export { CITYSTORE, SEARCHSTORE };
