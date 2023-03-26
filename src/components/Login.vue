<template lang="pug">
n-card
  n-button(v-if="store.user === null" @click="store.loginWithGoogle()" primary) {{ $t('loginBtn') }}
  n-button(v-else @click="store.logout()" primary) {{ $t('logoutBtn') }}
  n-row(v-if="store.user !== null")
    n-col(span="12")
      n-avatar(
        size="small"
        :src="user.user_metadata.avatar_url")
      n-col(span="12")
        | {{ user.user_metadata.name }}
    n-col(span="12")
      pre {{ user }}
</template>

<script setup>
import {NCard, NSpace, NButton, NAvatar, NRow, NCol} from 'naive-ui'
import {useAppStore} from "../stores/app.ts";
const store = useAppStore();
const user = JSON.parse(store.user);
</script>

<style lang="stylus" scoped>

</style>