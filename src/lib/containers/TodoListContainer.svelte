<script>
  import { v4 as uuid } from 'uuid';
  import Todo from '../components/todo/Todo.svelte';

  let todos = [];

  let todoComponent;

  let showList = true;

  // $: console.log(todos);

  function handleAddTodo(event) {
    // event.preventDefault();

    console.log(todoComponent.readOnly);

    const { name } = event.detail;

    if (name === '') return;

    const todo = {
      id: uuid(),
      name,
      completed: false
    };

    todos = [...todos, todo];

    todoComponent.clearInput();
    todoComponent.focusInput();

    // do not allow mutation
    // todos.push(todo);
    // todos = todos;
  }

  function handleDeleteTodo(event) {
    // event.preventDefault();

    const { todo } = event.detail;

    todos = todos.filter((t) => t.id !== todo.id);
  }

  function handleCompleteTodo(event) {
    const { todo } = event.detail;

    todos = todos.map((t) => {
      if (t.id === todo.id) {
        // t.completed = !t.completed;
        return { ...t, completed: !t.completed };
      }

      return t;
    });
  }

  function handleUpdateTodo(event) {
    const { id, name } = event.detail;

    todos = todos.map((t) => {
      if (t.id === id) {
        t.name = name;
      }

      return t;
    });
  }

  function handleCustomEvent(event) {
    event.preventDefault();

    alert('custom event was triggered!');
  }
</script>

<div class="max-w-lg px-8 py-4">
  <label>
    {showList ? 'Hide' : 'Show'}
    <input type="checkbox" bind:checked={showList} />
  </label>

  {#if showList}
    <Todo
      {todos}
      bind:this={todoComponent}
      on:addTodo={handleAddTodo}
      on:deleteTodo={handleDeleteTodo}
      on:completeTodo={handleCompleteTodo}
      on:updateTodo={handleUpdateTodo}
      on:customEvent={handleCustomEvent}
    />
  {/if}
</div>
