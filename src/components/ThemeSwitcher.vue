<template lang="pug">
n-card
  n-space
    n-button(@click="store.toggleTheme()")
      | {{ $t(`${store.theme.name}Theme`) }}
    //n-button(@click="") Light

</template>

<script setup>
import {NCard, NSpace, NButton} from 'naive-ui'
import {useAppStore} from "../stores/app.ts";
const store = useAppStore()
</script>

<style lang="stylus" scoped>

</style>