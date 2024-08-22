<template>
  <ClientOnly>
    <MglMap :center="center" :zoom="zoom" :height="'400px'" :interactive="false">
      <MglMarker v-for="country in countries"
        :key="country.name"
        :coordinates="country.coordinates"
        :color="country.color"
      />
    </MglMap>
  </ClientOnly>
</template>

<script setup>
const countries = [
  {
    name: "Chile",
    coordinates: [-70.673676, -33.447487],
    color: "#FF0000"
  },

];
const center = [-77.341225,-4.723156];
const zoom = 1.5;
</script>