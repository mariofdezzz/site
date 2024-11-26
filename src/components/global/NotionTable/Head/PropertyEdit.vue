<script setup lang="ts">
const props = defineProps<{
  show: boolean
}>()
const popover = ref<HTMLElement|null>(null)

watch(() => props.show, (show) => {
  if (show) {
    popover.value?.showPopover()
  } else {
    popover.value?.hidePopover()
  }
})
</script>

<template>
  <div id="property-edit" ref="popover" popover>
    <div class="section">
      <header>
        <input type="text">
      </header>

      <button>
        <Icon name="akar-icons:settings-horizontal" style="rotate: 180deg" />
        <span>Edit property</span>
      </button>
    </div>

    <hr>
    <div class="section">
      <button>
        <Icon name="akar-icons:arrow-down" style="rotate: 180deg" />
        <span>Sort ascending</span>
      </button>
      <button>
        <Icon name="akar-icons:arrow-down" />
        <span>Sort descending</span>
      </button>
      <button>
        <Icon name="ic:round-filter-list" />
        <span>Filter</span>
      </button>
    </div>

    <hr>

    <div class="section">
      <button>
        <div class="icon">
          <Icon name="ic:outline-push-pin" />
        </div>
        <span>Freeze up to column</span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
#property-edit {
  color: rgb(55, 53, 47);

  position: absolute;
  // top: 100%;
  left: 0;
  // z-index: 1;
  // background-color: white;
  // border: 0;
  // padding: 0;
  // border-radius: 4px;
  // box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
  // padding: 6px 0;
  // font-size: 14px;
  // display: flex;
  // flex-direction: column;

  header {
    padding: 6px 0;

    input {
      width: 100%;
      outline: 0;
      border: 1px solid rgb(217, 217, 217);
      border-radius: 4px;
      background-color: rgba(242, 241, 238, 0.6);
      padding: 3px 6px;
    }
  }

  .section {
    padding: 6px 4px;
  }

  button {
    padding: 3px 10px;
    // margin: 1px;
    min-width: 100%;
    white-space: nowrap;
    background-color: white;
    outline: 0;
    border: 0;
    box-shadow: none;
    display: flex;
    gap: 10px;
    border-radius: 3px;

    &:hover {
      background-color: gainsboro;
    }

    .icon {
      width: 16px;
    }
  }

  hr {
    border: 0;
    border-top: 1px solid rgb(238, 238, 237);
  }
}
</style>
