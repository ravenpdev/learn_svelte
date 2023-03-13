<script>
  import { settings } from '../stores/settings';
</script>

<h1>Settings</h1>

<label>
  Dark
  <input
    type="radio"
    name="colorScheme"
    bind:group={$settings.colorScheme}
    value="dark"
  />
</label>

<label>
  Light
  <input
    type="radio"
    name="colorScheme"
    value="light"
    bind:group={$settings.colorScheme}
  />
</label>

<button on:click={settings.toggleColorScheme}>Toggle Colorscheme</button>
