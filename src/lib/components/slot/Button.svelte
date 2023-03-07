<script>
  import { createEventDispatcher } from "svelte";

  export let size = "default";
  export let color = "default";
  export let variant = "text"; // text / filled / outlined

  const dispatch = createEventDispatcher();

  function handleOnClick() {
    dispatch("click");
  }

  let css = ["rounded tracking-wide font-light"];

  switch (size) {
    case "small":
      css.push("text-sm py-1 px-1.5");
      break;
    case "large":
      css.push("text-lg py-1 px-5");
      break;
    default:
      css.push("text-base py-1 px-2.5");
  }

  if (variant === "filled") {
    switch (color) {
      case "primary":
        css.push("bg-primary-500 text-primary-50 hover:bg-primary-400");
        break;
      case "secondary":
        css.push("bg-secondary-500 text-secondary-50 hover:bg-secondary-400");
        break;
      case "info":
        css.push("bg-info-500 text-info-50 hover:bg-info-400");
        break;
      case "success":
        css.push("bg-success-500 text-success-50 hover:bg-success-400");
        break;
      case "warning":
        css.push("bg-warning-500 text-warning-50 hover:bg-warning-400");
        break;
      case "error":
        css.push("bg-error-500 text-error-50 hover:bg-error-400");
        break;
      default:
        css.push("bg-zinc-100 hover:bg-zinc-200");
    }
  }

  if (variant === "outlined") {
    switch (color) {
      case "primary":
        css.push(
          "border border-primary-500 text-primary-500 hover:border-primary-400"
        );
        break;
      case "secondary":
        css.push(
          "border border-secondary-500 text-secondary-500 hover:border-secondary-400"
        );
        break;
      case "info":
        css.push("border border-info-500 text-info-500 hover:border-info-400");
        break;
      case "success":
        css.push(
          "border border-success-500 text-success-500 hover:border-success-400"
        );
        break;
      case "warning":
        css.push(
          "border border-warning-500 text-warning-500 hover:border-warning-400"
        );
        break;
      case "error":
        css.push(
          "border border-error-500 text-error-500 hover:border-error-400"
        );
        break;
      default:
        css.push(
          "border border-zinc-500 hover:border-zinc-400 hover:text-zinc-600"
        );
    }
  }

  if (variant === "text") {
    switch (color) {
      case "primary":
        css.push("text-primary-500 hover:bg-primary-50");
        break;
      case "secondary":
        css.push("text-secondary-500 hover:bg-secondary-50");
        break;
      case "info":
        css.push("text-infor-500 hover:bg-infor-50");
        break;
      case "success":
        css.push("text-success-500 hover:bg-success-50");
        break;
      case "warning":
        css.push("text-warning-500 hover:bg-warning-50");
        break;
      case "error":
        css.push("text-error-500 hover:bg-error-50");
        break;
    }
  }
</script>

<button class={css.join(" ")} on:click={handleOnClick}>
  <slot>Fallback Value</slot>
</button>
