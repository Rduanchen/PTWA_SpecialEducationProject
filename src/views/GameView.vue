<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'Games',
  data() {
    return {
      linkInfo: [
      ]
    };
  },
  created() {
    console.log('gameView')
  }
};
</script>

<style>

</style>