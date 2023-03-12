<script>
  import { onDestroy, onMount } from 'svelte';
  import { settings } from '../stores/settings';
  import Home from '../pages/Home.svelte';
  import Settings from '../pages/Settings.svelte';

  let page;

  // const unsubscribe = settings.subscribe((value) => {
  //   settingsValue = value;
  // });

  function onRouteChange() {
    // console.log(window.location.hash.slice(1));
    const path = window.location.hash.slice(1);

    if (path === '/') {
      page = 'home';
    } else if (path === '/settings') {
      page = 'settings';
    } else {
      window.location.hash = '/';
    }
  }

  onMount(() => {
    onRouteChange();
  });

  // onDestroy(unsubscribe);
</script>

<svelte:window on:hashchange={onRouteChange} />

<div>
  <nav>
    <a href="#/">Home</a>
    <a href="#/settings">Settings</a>
  </nav>

  <h1>Settings {JSON.stringify($settings)}</h1>

  {#if page === 'home'}
    <Home />
  {:else if page === 'settings'}
    <Settings />
  {/if}
</div>
