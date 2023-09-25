<template>
  <div id="footer-icons">
    <a
      href="https://github.com/mariofdezzz"
      :aria-label="$t('footer.links.ariaLabel.github')"
    >
      <Icon name="grommet-icons:github" />
    </a>

    <span>|</span>

    <a
      href="https://www.linkedin.com/in/mario-ferrero"
      :aria-label="$t('footer.links.ariaLabel.linkedin')"
    >
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
