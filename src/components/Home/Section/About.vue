<script setup lang="ts">
const { t } = useI18n()

const portrait = {
  src: '/images/profile/01.jpg',
  alt: t('home.about.portrait.alt'),
  caption: t('home.about.portrait.caption')
}
</script>

<template>
  <section>
    <HomePortrait
      :src="portrait.src"
      :alt="portrait.alt"
      :caption="portrait.caption"
    />

    <h1>
      {{ $t('home.about.heading') }}
    </h1>

    <p>
      {{ $t('home.about.p1') }}
    </p>

    <p>
      {{ $t('home.about.p2') }}
    </p>

    <p>
      {{ $t('home.about.p3') }}
    </p>

    <p>
      <i18n-t
        keypath="home.about.p4"
        scope="global"
      >
        <template #nuxt>
          <CommonLink href="https://nuxt.com">
            {{ $t('brands.nuxt') }}
          </CommonLink>
        </template>
        <template #deno>
          <CommonLink href="https://deno.com">
            {{ $t('brands.deno') }}
          </CommonLink>
        </template>
      </i18n-t>
    </p>

    <p>
      <i18n-t
        keypath="home.about.p5"
        scope="global"
      >
        <template #websockets>
          <CommonLink href="https://developer.mozilla.org/docs/Web/API/WebSockets_API">
            {{ $t('brands.websockets') }}
          </CommonLink>
        </template>
        <template #webrtc>
          <CommonLink href="https://webrtc.org">
            {{ $t('brands.webrtc') }}
          </CommonLink>
        </template>
      </i18n-t>
    </p>
  </section>
</template>

<style scoped lang="scss">
h1, p:not(:last-child) {
  margin-bottom: 1rem;
}
</style>
