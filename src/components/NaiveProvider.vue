<template lang="pug">
NLoadingBarProvider
  NDialogProvider
    NNotificationProvider
      NMessageProvider
        slot
</template>

<script setup lang="ts">
import {
  NDialogProvider,
  NLoadingBarProvider,
  NMessageProvider,
  NNotificationProvider,
  useDialog,
  useLoadingBar,
  useMessage,
  useNotification,
} from 'naive-ui'
//
// useLoadingBar()
// useDialog()
// useMessage()
// useNotification()
</script>


