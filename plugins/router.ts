export default defineNuxtPlugin(({ $router }: any) => {
  $router.options.scrollBehavior = (
    to: { hash: any },
    from: any,
    savedPosition: any
  ) => {
    if (to.hash) {
      return {
        el: to.hash,
        top: 45,
        behavior: "smooth",
      };
    }
  };
});
