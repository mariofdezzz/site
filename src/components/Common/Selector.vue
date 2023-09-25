<script setup lang="ts" generic="K extends string | number">
export type Option<T> = {
  label?: string,
  value: T
}
const props = defineProps<{
  options: Option<K>[]
  modelValue: K
  iconName: string
  ariaLabel?: string
  short?: boolean
}>()
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})

const select = ref<HTMLSelectElement|null>(null)

</script>

<template>
  <div id="select">
    <Icon
      id="custom-icon"
      class="small-icon"
      :name="iconName"
    />

    <select
      ref="select"
      v-model="value"
      :aria-label="ariaLabel"
      :class="{ short }"
    >
      <option
        v-for="({ value, label }) in options"
        :key="value"
        :value="value"
      >
        {{ label }}
      </option>
    </select>

    <Icon
      id="select-icon"
      class="medium-icon"
      name="heroicons:chevron-up-down"
    />
  </div>
</template>

<style scoped lang="scss">
$icon-width: 16px;
$select-padding: 0.5rem;

#select {
  position: relative;
  display: flex;
  align-items: center;

  svg {
    pointer-events: none;
    position: absolute;

    &.small-icon {
      width: $icon-width;
      height: $icon-width;
    }

    &.medium-icon {
      width: calc($icon-width + 2px);
      height: calc($icon-width + 2px);
    }

    &#custom-icon {
      left: $select-padding;
    }

    &#select-icon {
      right: $select-padding;
    }
  }

  select {
    // Reset
    appearance: none;
    background-color: transparent;
    border: none;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    padding: 0.1rem calc($icon-width + $select-padding * 1.5);
    border: 1px solid $disabled;
    border-radius: 3px;
    color: inherit;

    &.short {
      padding: 0.1rem calc($icon-width + $select-padding );
      width: 0;
      max-width: 0;
    }
  }
}
</style>
