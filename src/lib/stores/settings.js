import { writable } from 'svelte/store';

function createSettings() {
  const state = {
    colorScheme: 'dark',
    language: 'en',
    fontSize: 16
  };

  const { subscribe, set, update } = writable(state);

  return {
    subscribe,
    toggleColorScheme: () =>
      update((state) => {
        state.colorScheme = state.colorScheme === 'dark' ? 'light' : 'dark';
        return state;
      }),
    reset: () => set({ colorScheme: 'dark', language: 'en', fontSize: 16 })
  };
}

export const settings = createSettings();

// const callback = writable(
//   { colorScheme: 'light', language: 'en', fontSize: 12 },
//   (set) => {
//     console.log('subscriber from 0 to 1')
//     set({
//       colorScheme: 'dark',
//       language: 'en',
//       fontSize: 12
//     })

//     return () => {
//       console.log('subscriber 1 to 0')
//     }
//   })

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
