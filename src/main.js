import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.directive('scroll', {
    inserted(el, binding) {
        const f = (evt) => {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f);
            }
        };
        window.addEventListener('scroll', f);
    },
});

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')