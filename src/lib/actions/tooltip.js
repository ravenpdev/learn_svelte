export default function tooltip(node, options) {
  function handleMouseEnter(event) {
    node.dispatchEvent(new CustomEvent('hover'));
  }

  function handleMouseLeave(event) {
    node.dispatchEvent(new CustomEvent('unhover'));
  }

  node.addEventListener('mouseenter', handleMouseEnter);
  node.addEventListener('mouseleave', handleMouseLeave);

  return {
    update(newOptions) {},
    destroy() {
      node.removeEventListener('mouseenter', handleMouseEnter);
      node.removeEventListener('mouseleave', handleMouseLeave);
    }
  };
}
