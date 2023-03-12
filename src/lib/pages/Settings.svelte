<script>
  import { onDestroy } from 'svelte';
  import { settings } from '../stores/settings';

  let colorScheme;

  const unsubscribe = settings.subscribe((settings) => {
    console.log('Settings subscribe');
    colorScheme = settings.colorScheme;
  });

  onDestroy(unsubscribe);
</script>

<h1>Settings</h1>

<h1>{colorScheme}</h1>

<label>
  Dark
  <input
    type="radio"
    name="colorScheme"
    bind:group={colorScheme}
    on:input={settings.toggleColorScheme}
    value="dark"
  />
</label>

<label>
  Light
  <input
    type="radio"
    name="colorScheme"
    value="light"
    bind:group={colorScheme}
    on:input={settings.toggleColorScheme}
  />
</label>

<button on:click={settings.reset}>Reset</button>
