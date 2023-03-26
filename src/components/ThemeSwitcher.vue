<template lang="pug">
n-card
  n-space
    n-button(@click="store.toggleTheme()")
      | {{ $t(`${store.theme.name}Theme`) }}
    //n-button(@click="") Light

</template>

<script lang="ts" setup>
import {NCard, NSpace, NButton} from 'naive-ui'
import {useAppStore} from "../stores/app";
const store = useAppStore()
</script>

<style lang="stylus" scoped>

</style>