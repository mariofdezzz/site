<template>
  <div id="footer-icons">
    <a
      href="https://github.com/mariofdezzz"
      :aria-label="$t('footer.links.ariaLabel.github')"
    >
      <Icon name="simple-icons:github" />
    </a>

    <span>|</span>

    <a
      href="https://substack.com/@mariofdezzz"
      :aria-label="$t('footer.links.ariaLabel.substack')"
    >
      <Icon name="simple-icons:substack" size="1.1rem" />
    </a>

    <span>|</span>

    <a
      href="https://www.linkedin.com/in/mario-ferrero"
      :aria-label="$t('footer.links.ariaLabel.linkedin')"
    >
      <Icon name="simple-icons:linkedin" />
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
