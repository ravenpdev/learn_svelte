<script>
  import { FaMoon, FaSun } from 'svelte-icons/fa/';
  import { onMount } from 'svelte';
  import Home from '../pages/Home.svelte';
  import Settings from '../pages/Settings.svelte';
  // import locations from '../stores/locations';
  // import settings from '../stores/settings';
  // import customStore from '../stores/custom_store';
  import { locations, settings, customStore, direction } from '../stores';

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
  <p>
    Custom Store

    {JSON.stringify($customStore)}
  </p>

  <button on:click={customStore.toggleColorScheme}>Toggle Color Scheme</button>
  <button on:click={() => customStore.updateSetting('language', 'es')}
    >Update language to es</button
  >

  {#if $locations && !$locations.error}
    {JSON.stringify($locations)}
    <p>{$locations.latitude} - {$locations.longitude}</p>
  {/if}

  {#if $locations && $locations.error}
    <p>{$locations.error.code} - {$locations.error.message}</p>
  {/if}

  <p>Direction: {$direction} - {$settings.language}</p>
  <select
    id=""
    name="language"
    bind:value={$settings.language}
    on:change={(e) =>
      settings.changeLanguage('language', e.currentTarget.value)}
  >
    <option value="en">English</option>
    <option value="ar">Arabic</option>
    <option value="es">Spanish</option>
  </select>

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
