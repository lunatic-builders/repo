import { defineStore } from 'pinia'
import { useLocalStorage, useNavigatorLanguage} from '@vueuse/core'
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
import {darkTheme, lightTheme,} from 'naive-ui'

import { createClient } from '@supabase/supabase-js'

import type {User} from "@supabase/supabase-js";
import {createI18n} from "vue-i18n";
// Create a single supabase client for interacting with your database
const supabase = createClient('https://fhhtelipgwuexcvbpaex.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoaHRlbGlwZ3d1ZXhjdmJwYWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NzY0ODgsImV4cCI6MTk5NTE1MjQ4OH0.nQNlKD_HYEbe6Io73wLYAyhvVckB05JVhEON1G6WXcM')
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

export const useAppStore = defineStore('app', {
    state: () => ({
        theme: useLocalStorage('theme', darkThemeMq.matches ? darkTheme : lightTheme),
        user: useLocalStorage( 'user', null as any | null,),
        locale: useLocalStorage( 'locale', useNavigatorLanguage().language),
    }),
    actions: {
        toggleTheme() {
            console.log(this.theme.name)
            this.theme = this.theme.name === "dark" ? lightTheme : darkTheme
        },
        async loginWithGoogle() {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${window.location.protocol}//${window.location.host}/login?verify`,
                    // skipBrowserRedirect: true
                }
            })
            console.log(`${window.location.protocol}//${window.location.host}/login`)
            console.log(data)
        },
        async logout() {
            let { error } = await supabase.auth.signOut()
            this.user = null
        },
        async verifyToken() {
            const { data: { user } } = await supabase.auth.getUser()
            console.log(user)
            this.user = user === null ? null : JSON.stringify(user)
            return !!user
        }
    },
    getters: {
        isLoggedIn: (state) => !!state.user,
        isDarkTheme: (state) => state.theme.name === "dark",
        isLightTheme: (state) => state.theme.name === "light",
    }
})