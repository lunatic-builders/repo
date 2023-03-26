<template lang="pug">
.some-bullshit-about-why-our-product-is-so-badass
  h1
    | {{ $t('hello') }}
  LangSwitcher
  ThemeSwitcher
  n-card
    router-link(v-if="store.isLoggedIn" to="/dashboard")
      n-button( primary) Dashboard
  Login
</template>

<script setup>
import Login from "../components/Login.vue";
import {NButton, NCard} from "naive-ui";
import {useAppStore} from "../stores/app.ts";
import ThemeSwitcher from "../components/ThemeSwitcher.vue";
import LangSwitcher from "../components/LangSwitcher.vue";
const store = useAppStore();
</script>

<style lang="stylus" scoped>
.some-bullshit-about-why-our-product-is-so-badass
  min-height 100vh
  width 100%
  height 100%
  overflow hidden
  display flex
  flex-direction column
</style>