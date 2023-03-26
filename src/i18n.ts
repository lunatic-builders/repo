import { createI18n } from 'vue-i18n'
import {useAppStore} from "./stores/app";
import type {App} from "vue";


export async function installI18n(app: App) {

    const messages = async () => {
        return{
            en: await import('./locales/en.json'),
            cz: await import('./locales/cz.json'),
        }
    }

    const i18n = createI18n({
        legacy: false,
        locale: useAppStore().locale,
        fallbackLocale: 'en',
        messages: await messages()
    })
    app.use(i18n);
    return i18n;
}


export default installI18n