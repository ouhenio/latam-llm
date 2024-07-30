<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: null
  },
  imageAlt: {
    type: String,
    default: 'Hero Image'
  },
  imagePosition: {
    type: String,
    default: 'right'
  }
})
</script>

<template>
  <section class="hero">
    <div class="hero-image-wrapper">
      <NuxtImg
        v-if="image"
        :src="image"
        :alt="imageAlt"
        :width="16"
        :height="9"
        class="hero-image"
      />
      <div class="content">
        <div class="title">
          <ContentSlot :use="$slots.title" unwrap="p">
            Hero title
          </ContentSlot>
        </div>
        <div class="description">
          <ContentSlot :use="$slots.description" unwrap="p">
            Hero description
          </ContentSlot>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
}

.hero-image-wrapper {
  position: relative;
}

.hero-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: var(--radii-md);
}

.content {
  position: absolute; /* Posiciona el contenido sobre la imagen */
  top: 50%; /* Ajusta para centrar verticalmente */
  left: 50%; /* Ajusta para centrar horizontalmente */
  transform: translate(-50%, -50%); /* Centra el contenido */
  width: 100%; /* Ajusta el ancho del contenido */
  max-width: 1000px; /* Define un ancho máximo */
  text-align: center; /* Centra el texto */
  color: #ffffff; /* Color del texto para contraste con la imagen */
  padding: 20px; /* Espaciado alrededor del contenido */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); /* Sombra para mejorar la legibilidad */
  background: rgba(0, 0, 0, 0.5); /* Fondo semitransparente */
  border-radius: var(--radii-md); /* Bordes redondeados */
}

.title {
  font-family: 'Roboto', sans-serif;
  font-size: 2.2rem;
  line-height: 1.2;
  font-weight: var(--fontWeight-bold);
  margin-bottom: 1rem;
}

.description {
  font-size: 1.25rem;
  line-height: 1.5;
}
</style>
