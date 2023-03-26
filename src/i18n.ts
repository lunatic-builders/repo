import { createI18n } from 'vue-i18n'
const en = await import('./locales/en.json')
const cz = await import('./locales/cz.json')

const messages = {
    en,
    cz,
}

const i18n = (locale:string) => createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages
})

export default i18n