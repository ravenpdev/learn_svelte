import { writable } from "svelte/store";


function createSettings() {
  const state = {
    colorScheme: 'dark',
    language: 'en',
    fontSize: 16
  }

  const { subscribe, set, update } = writable(state)

  return {
    subscribe,
    toggleColorScheme: () => update(state => {
      state.colorScheme = state.colorScheme === 'dark' ? 'light' : 'dark'
      return state
    }),
    reset: () => set({ colorScheme: 'dark', language: 'en', fontSize: 16 })
  }
}

export const settings = createSettings()

//  import { writable } from 'svelte/store';

// function createCount() {
// 	const { subscribe, set, update } = writable(0);

// 	return {
// 		subscribe,
// 		increment: () => {},
// 		decrement: () => {},
// 		reset: () => {}
// 	};
// }

// export const count = createCount();
