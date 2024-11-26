<template>
  <div id="profile-pic">
    <div id="pic-grain" />
  </div>
</template>

<style scoped lang="scss">
#profile-pic {
  width: 15rem;
  aspect-ratio: 1;
  border-radius: 50% 3px;
  overflow: hidden;
}

#profile-pic {
  --bg:
    radial-gradient(50% 50% at 20% 20%,hsla(337, 72%, 65%, 0.9) 50%, transparent),
    radial-gradient(50% 50% at 80% 20%,hsla(192, 72%, 65%, 0.9) 50%, transparent),
    radial-gradient(50% 50% at 20% 80%,hsla(192, 72%, 65%, 0.9) 50%, transparent),
    radial-gradient(50% 50% at 80% 80%,hsla(192, 31%, 22%, 0.9) 50%, transparent),
    white;

  background: var(--bg) url("/images/arc/noise.svg");
  mix-blend-mode: multiply;
}
</style>
