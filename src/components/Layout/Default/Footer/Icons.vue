<template>
  <div id="footer-icons">
    <a href="https://github.com/mariofdezzz">
      <Icon name="grommet-icons:github" />
    </a>

    <span>|</span>

    <a href="https://www.linkedin.com/in/mario-ferrero">
      <Icon name="grommet-icons:linkedin" />
    </a>
  </div>
</template>

<style scoped lang="scss">
#footer-icons {
  display: flex;
  gap: .5rem;

  a {
    color: $text;

    a:hover {
      color: $link-hover
    }
  }
}
</style>
