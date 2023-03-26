import { createI18n } from 'vue-i18n'
import {useAppStore} from "./stores/app";

const messages = {
    en: () => import('./locales/en.json'),
    cz: () => import('./locales/cz.json'),
}

const i18n = createI18n({
    legacy: false,
    locale: () => useAppStore().locale,
    fallbackLocale: 'en',
    messages
})

export default i18n