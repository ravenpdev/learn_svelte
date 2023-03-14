import tippy from 'tippy.js';

export default function (node, options) {
  const instance = tippy(node, options);

  return {
    update(newOptions) {
      // @ts-ignore
      instance.setProps(newOptions);
    },
    destroy() {
      // @ts-ignore
      instance.destroy();
    }
  };
}
