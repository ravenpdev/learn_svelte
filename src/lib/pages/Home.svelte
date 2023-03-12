<script>
  import { onDestroy } from 'svelte';
  import { settings } from '../stores/settings';

  const unsubscribe = settings.subscribe((settings) => {
    console.log('Home subscribe to settings');
  });

  onDestroy(unsubscribe);
</script>

<h1>Home</h1>

<p>{JSON.stringify($settings)}</p>
