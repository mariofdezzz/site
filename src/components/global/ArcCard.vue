<script setup lang="ts">
</script>

<template>
  <div id="arc">
    <ArcCardProfile />

    <div id="info">
      <p id="title">
        Mario
      </p>

      <p id="subtitle">
        Precious Technician
      </p>
    </div>

    <footer>
      <div id="seal">
        <span>ARC</span>

        <div id="decorator" />

        <span id="date">24 Augost 2022</span>
      </div>

      <div id="icon">
        <span>BROWSER</span>
        <br>
        <span>COMPANY</span>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
#arc {
  background: hsl(54, 100%, 96%);
  padding: 15px 20px 15px 17px;
  border-radius: 5px;
  aspect-ratio: 0.66;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  #title {
    font-size: 1.5rem;
    font-weight: bolder;
  }

  #subtitle {
    font-size: 0.75rem;
    letter-spacing: 1px;
  }

  footer {
    margin-top: auto;
    display: flex;
    justify-content: space-between;

    #seal {
      font-size: 0.5rem;
      font-weight: bold;
      display: flex;
      border: 1px solid black;
      border-radius: 3px;
      padding: 0 0.25rem;
      gap: 0.25rem;

      #decorator {
        width: 0.75rem;
        background: repeating-linear-gradient(
          -45deg, transparent, transparent 1px, black 1px, black 2px
        );
        border: 1px solid black;
        border-top: 0;
        border-bottom: 0;
      }
    }

    #icon {
      font-size: 0.6rem;
      font-weight: bold;
      line-height: 0;

      * {
        line-height: 1;
      }
    }
  }
}

</style>
