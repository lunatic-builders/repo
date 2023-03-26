import { createI18n } from 'vue-i18n'
import {useAppStore} from "./stores/app";

const messages = {
    en: await import('./locales/en.json'),
    cz: await import('./locales/cz.json'),
}

const i18n = (locale:string) => createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages
})

export default i18n