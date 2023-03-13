<script>
  import { FaMoon, FaSun } from 'svelte-icons/fa/';
  import { onMount } from 'svelte';
  import { settings } from '../stores/settings';
  import Home from '../pages/Home.svelte';
  import Settings from '../pages/Settings.svelte';
  import location from '../stores/locations';

  let page;

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

  $: {
    if (
      $settings.colorScheme === 'dark' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // onDestroy(unsubscribe);
</script>

<svelte:window on:hashchange={onRouteChange} />

<div>
  {#if $location && !$location.error}
    {JSON.stringify($location)}
    <p>{$location.latitude} - {$location.longitude}</p>
  {/if}

  {#if $location && $location.error}
    <p>{$location.error.code} - {$location.error.message}</p>
  {/if}
  <nav>
    <a href="#/">Home</a>
    <a href="#/settings">Settings</a>

    {#if $settings.colorScheme === 'light'}
      <button on:click={settings.toggleColorScheme}>
        <div class="w-4 h-4">
          <FaMoon />
        </div>
      </button>
    {:else}
      <button on:click={settings.toggleColorScheme}>
        <div class="w-4 h-4">
          <FaSun />
        </div>
      </button>
    {/if}
  </nav>

  <h1>Settings {JSON.stringify($settings)}</h1>

  {#if page === 'home'}
    <Home />
  {:else if page === 'settings'}
    <Settings />
  {/if}
</div>
