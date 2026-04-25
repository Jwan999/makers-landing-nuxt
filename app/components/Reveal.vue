<script setup lang="ts">
const props = withDefaults(defineProps<{
  delay?: number
  y?: number
  x?: number
  duration?: number
  threshold?: number
  as?: string
}>(), {
  delay: 0,
  y: 24,
  x: 0,
  duration: 700,
  threshold: 0.15,
  as: 'div',
})

const { el, isVisible } = useReveal({ threshold: props.threshold })
</script>

<template>
  <component
    :is="as"
    ref="el"
    :style="{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate3d(0, 0, 0)' : `translate3d(${x}px, ${y}px, 0)`,
      transition: `opacity ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`,
      willChange: isVisible ? 'auto' : 'transform, opacity',
    }"
  >
    <slot />
  </component>
</template>