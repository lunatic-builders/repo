
<template lang="pug">
n-config-provider(:theme="store.theme")
  n-global-style
  router-view
</template>

<script setup lang="ts">
import {NConfigProvider, NGlobalStyle} from 'naive-ui';
import {useAppStore} from "./stores/app";
const store = useAppStore()
</script>

<style lang="stylus">
// Global styles
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
</style>