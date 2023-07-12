<template>
  <div id="layout">
    <LayoutDefaultHeader />

    <main>
      <slot />
    </main>

    <LayoutDefaultFooter />
  </div>
</template>

<style lang="scss">
#layout {
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template: auto 1fr auto / 1fr min($max-text-width, calc(100% - 2rem)) 1fr;
  row-gap: 2rem;
  column-gap: 1rem;

  header,
  footer {
    grid-column: 1/4;
  }

  main {
    grid-column: 2;
  }

}
</style>
