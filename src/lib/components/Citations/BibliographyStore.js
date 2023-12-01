import { writable } from 'svelte/store';

function createBibliography() {
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    add: (citation) =>
      update((n) => {
        return [...n, citation];
      }),
    remove: (citation) =>
      update((n) => {
        return n.filter((c) => c !== citation);
      }),
  };
}

export const bibliography = createBibliography();
