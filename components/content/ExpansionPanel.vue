<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Expand'
  }
});

const isOpen = ref(false);

const togglePanel = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div>
    <button @click="togglePanel" class="panel-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :class="{ 'rotate-90': isOpen }" class="panel-icon">
        <path fill="currentColor" d="M7 10l5 5 5-5z" />
      </svg>
      {{ props.title }}
    </button>
    <Transition name="slide">
      <div class="panel-content" v-if="isOpen">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.panel-button {
  font-family: var(--typography-font-display);
  display: flex;
  align-items: center;
  margin: var(--prose-h3-margin);
  font-size: var(--prose-h3-fontSize);
  line-height: var(--prose-h3-lineHeight);
  font-weight: var(--prose-h3-fontWeight);
  letter-spacing: var(--prose-h3-letterSpacing);
  transition: transform 0.3s ease-in-out;
}

.panel-icon {
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.5em;
  transform: rotate(-90deg);
  transition: transform 0.3s ease-in-out;
}

.rotate-90 {
  transform: rotate(0deg);
}

.panel-content {
  overflow: hidden;
  margin-left: 3em;
}

.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 1000px; /* Set a high value to ensure the content is fully visible */
}
</style>