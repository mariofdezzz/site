<template>
  <footer>
    <div id="footer-content">
      <CommonIconSignature />

      <LayoutDefaultFooterIcons />

      <LayoutDefaultFooterTogglers />
    </div>
  </footer>
</template>

<style lang="scss">
footer #footer-content > svg {
  height: 60px;
}
</style>

<style scoped lang="scss">
footer {
  padding: 1rem;

  #footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: calc($max-text-width );
    margin: auto;
    gap: 1.5rem;

    @media (min-width: 550px) {
      flex-direction: row;
    }
  }
}
</style>
