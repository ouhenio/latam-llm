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

  {
    name: "México",
    coordinates: [-102.5528, 23.6345],
    color: "#FF0000"
  },

  {
    name: "Uruguay",
    coordinates: [-55.7650, -32.5228],
    color: "#FF0000"
  },

  {
    name: "Argentina",
    coordinates: [-63.6167, -38.4161],
    color: "#FF0000"
  },

  {
    name: "Colombia",
    coordinates: [-74.2973, 4.5709],
    color: "#FF0000"
  },

  {
    name: "Ecuador",
    coordinates: [-78.1834, -1.8312],
    color: "#FF0000"
  },

  {
    name: "Perú",
    coordinates: [-75.0152, -9.1900],
    color: "#FF0000"
  },

  {
    name: "España",
    coordinates: [-3.7038, 40.4637],
    color: "#FF0000"
  },




];
const center = [-60.0, -5.0];
const zoom = 1;
</script>