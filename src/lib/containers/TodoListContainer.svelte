<script>
  import { v4 as uuid } from "uuid";
  import Todo from "../components/todo/Todo.svelte";

  let todos = [];

  function handleAddTodo(event) {
    // event.preventDefault();

    const { name } = event.detail;

    if (name === "") return;

    const todo = {
      id: uuid(),
      name,
      completed: false,
    };

    todos = [...todos, todo];

    // do not allow mutation
    // todos.push(todo);
    // todos = todos;
  }

  function handleDeleteTodo(event) {
    // event.preventDefault();

    const { todo } = event.detail;

    todos = todos.filter((t) => t.id !== todo.id);
  }

  function handleCustomEvent(event) {
    event.preventDefault();

    alert("custom event was triggered!");
  }
</script>

<div class="max-w-lg px-8 py-4">
  <Todo
    {todos}
    on:addTodo={handleAddTodo}
    on:deleteTodo={handleDeleteTodo}
    on:customEvent={handleCustomEvent}
  />
</div>
