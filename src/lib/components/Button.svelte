<script>
  export let size = "default";
  export let color = "default";
  export let variant = "text"; // text / filled / outlined
  export let shadow = false;
  export let isLeftHovered = false;

  // console.log($$slots);
  let css = ["rounded tracking-wide font-medium flex items-center gap-4"];

  switch (size) {
    case "small":
      css.push("text-sm py-1 px-2");
      break;
    case "large":
      css.push("text-lg py-1.5 px-4");
      break;
    default:
      css.push("text-base py-1 px-3");
  }

  if ($$restProps.disabled) css.push("disabled:bg-opacity-50");

  if (variant === "filled") {
    switch (color) {
      case "primary":
        css.push("bg-primary-500 text-primary-50 hover:bg-primary-600");
        break;
      case "secondary":
        css.push("bg-secondary-500 text-secondary-50 hover:bg-secondary-600");
        break;
      case "info":
        css.push("bg-info-500 text-info-50 hover:bg-info-600");
        break;
      case "success":
        css.push("bg-success-500 text-success-50 hover:bg-success-600");
        break;
      case "warning":
        css.push("bg-warning-500 text-warning-50 hover:bg-warning-600");
        break;
      case "error":
        css.push("bg-error-500 text-error-50 hover:bg-error-600");
        break;
      default:
        css.push("bg-zinc-100 hover:bg-zinc-200");
    }
  }

  if (variant === "outlined") {
    switch (color) {
      case "primary":
        css.push(
          "border border-primary-500 text-primary-500 hover:border-primary-600"
        );
        break;
      case "secondary":
        css.push(
          "border border-secondary-500 text-secondary-500 hover:border-secondary-600"
        );
        break;
      case "info":
        css.push("border border-info-500 text-info-500 hover:border-info-600");
        break;
      case "success":
        css.push(
          "border border-success-500 text-success-500 hover:border-success-600"
        );
        break;
      case "warning":
        css.push(
          "border border-warning-500 text-warning-500 hover:border-warning-600"
        );
        break;
      case "error":
        css.push(
          "border border-error-500 text-error-500 hover:border-error-600"
        );
        break;
      default:
        css.push(
          "border border-zinc-500 hover:border-zinc-600 hover:text-zinc-600"
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

<button class={css.join(" ")} on:click class:shadow {...$$restProps}>
  {#if $$slots.leftContent}
    <span
      on:mouseenter={() => (isLeftHovered = true)}
      on:mouseleave={() => (isLeftHovered = false)}
    >
      <slot name="leftContent" />
    </span>
  {/if}

  <slot {isLeftHovered}>Fallback Value</slot>

  {#if $$slots.rightContent}
    <slot name="rightContent" />
  {/if}
</button>
