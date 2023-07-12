<script setup lang="ts">
const portrait = {
  src: '/images/profile/01.jpg',
  alt: 'Profile picture',
  caption: 'Aug 22, 2022'
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
          <a href="https://nuxt.com">
            {{ $t('brands.nuxt') }}
          </a>
        </template>
        <template #deno>
          <a href="https://deno.com">
            {{ $t('brands.deno') }}
          </a>
        </template>
      </i18n-t>
    </p>

    <p>
      <i18n-t
        keypath="home.about.p5"
        scope="global"
      >
        <template #websockets>
          <a href="https://developer.mozilla.org/docs/Web/API/WebSockets_API">
            {{ $t('brands.websockets') }}
          </a>
        </template>
        <template #webrtc>
          <a href="https://webrtc.org">
            {{ $t('brands.webrtc') }}
          </a>
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
