<template lang="pug">
.chatBox
  n-skeleton(text :repeat="2")
  n-skeleton(text style="width: 60%")
  n-card(title="Card") megapenis
</template>

<script lang="ts" setup>
import { NSkeleton, NCard } from 'naive-ui'
</script>

<style lang="stylus" scoped>

</style>