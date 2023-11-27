<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view/>
</template>

<script>
import fetchJson from '@/utilitys/fetch-json.js';
export default {
  name: 'App',
};
</script>