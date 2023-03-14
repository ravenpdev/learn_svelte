import { derived } from 'svelte/store';
import settings from './settings';
import locations from './locations';

const direction = derived(
  [settings, locations],
  ([$settings, $locations], set) => {
    console.log($settings, $locations);

    const timer = setTimeout(() => {
      set($settings.language === 'ar' ? 'rtl' : 'ltr');
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  },
  'not decided'
);

export default direction;
