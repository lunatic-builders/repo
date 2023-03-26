<template lang="pug">
.page
  .bg
    EnterAnimation
  .container
    h1 Please log in to continue
    Login
</template>

<script lang="ts" setup>
import Login from "../components/Login.vue";
import EnterAnimation from "../components/EnterAnimation.vue";
</script>

<style lang="stylus" scoped>
.bg
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  z-index 1
.container
  position relative
  z-index 2
</style>