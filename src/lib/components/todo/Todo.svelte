<svelte:options immutable={true} />

<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Button from "../Button.svelte";
  import TodoList from "./TodoList.svelte";

  const dispatch = createEventDispatcher();

  export let todos;
  export const readOnly = "read only";

  let input = "";
  let inputRef;

  onMount(() => {
    inputRef.focus();
  });

  export function clearInput() {
    input = "";
  }

  export function focusInput() {
    inputRef.focus();
  }

  function handleOnSubmit() {
    const isNotCancelled = dispatch(
      "addTodo",
      {
        name: input.trim(),
      },
      { cancelable: true }
    );

    // if (isNotCancelled) {
    //   clearInput();
    //   focusInput();
    // }
  }
</script>

<h1 class="text-3xl mb-8">Todo List</h1>

<form on:submit|preventDefault={handleOnSubmit}>
  <div class="flex gap-2 mb-8">
    <input
      class="py-1 px-2 border border-zinc-500 rounded w-full"
      type="text"
      bind:value={input}
      bind:this={inputRef}
    />

    <Button type="submit" color="primary" variant="filled">Submit</Button>
  </div>
</form>

<TodoList on:completeTodo on:deleteTodo on:updateTodo {todos} />
