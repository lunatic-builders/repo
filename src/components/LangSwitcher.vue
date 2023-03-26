<template lang="pug">
n-card
  n-select(v-model:value="$i18n.locale" :onUpdate:value="updateLocale" :options="$i18n.availableLocales.map(locale => ({ label: locale, value: locale }))")
</template>

<script lang="ts" setup>
import {NCard, NSpace, NButton, NSelect} from 'naive-ui'

import { useAppStore } from "../stores/app";
const store = useAppStore();
const updateLocale = (locale: string) => {
  store.locale = locale
  return locale
}
</script>

<style lang="stylus" scoped>

</style>