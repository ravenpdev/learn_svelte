<svelte:options immutable={true} />

<script>
  import { onDestroy, onMount, beforeUpdate, afterUpdate } from 'svelte';
  import TodoItem from './TodoItem.svelte';

  // onMount(() => {
  //   console.log('Mounted');

  //   return () => {
  //     console.log('Destroyed 2');
  //   };
  // });

  // onDestroy(() => {
  //   console.log('Destroyed!');
  // });

  // beforeUpdate(() => {
  //   if (todoListWrapper) {
  //     console.log(`${todoListWrapper.offsetHeight}`);
  //   }
  // });

  afterUpdate(() => {
    console.log('After updated.');
    if (todoListDivWrapper) {
      console.log(`${todoListDivWrapper.offsetHeight}`);
      todoListDivWrapper.scrollTo(0, todoListDivWrapper.scrollHeight);
    }
  });

  export let todos;

  let todoListDivWrapper;

  // function handleCustomEvent() {
  //   dispatch('customEvent', {});
  // }
</script>

<div bind:this={todoListDivWrapper} class="max-h-96 overflow-auto">
  {#each todos as todo (todo.id)}
    <!-- {@debug todo} -->
    <!-- {(console.log(todo), "")} -->
    <!-- {@const number = index + 1} -->

    <TodoItem on:updateTodo on:deleteTodo on:completeTodo {todo} />
  {/each}

  <!-- <Button on:click={handleCustomEvent} variant="filled" color="secondary" -->
  <!--   >Trigger custom event</Button -->
  <!-- > -->
</div>
