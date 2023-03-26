import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import { TroisJSVuePlugin } from 'troisjs';
import router from "./routes";
import {createPinia} from "pinia";
import i18n from "./i18n";
import {useAppStore} from "./stores/app";

    const app = createApp(App)
    app.use(createPinia())
    app.use(TroisJSVuePlugin);
    app.use(router)
    app.use(i18n)
    app.mount('#app');


// const store = useAppStore();
// store.$subscribe((_locale, state) => {
//     console.info(state.locale);
//     i18n.global.locale = state.locale;
// });
