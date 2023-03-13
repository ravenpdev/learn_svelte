import { readable } from 'svelte/store';

const location = readable(null, (set) => {
  let navigatorId;

  if (navigator.geolocation && navigator.geolocation.watchPosition) {
    navigatorId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        set({ latitude, longitude });
      },
      (error) => {
        set({ error });
      }
    );
  }

  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       const { longitude, latitude } = position.coords;
  //       set({ latitude, longitude });
  //     },
  //     (error) => {
  //       console.log(error);
  //       set(error);
  //     }
  //   );
  // }

  return () => {
    if (navigatorId) {
      navigator.geolocation.clearWatch(navigatorId);
    }
    set(null);
  };
});

export default location;
