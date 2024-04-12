import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

import 'primeflex/primeflex.css';
import 'primevue/resources/themes/mdc-light-deeppurple/theme.css';
import './assets/main.css';
import 'primeicons/primeicons.css';

import Button from "primevue/button";
import Card from "primevue/card";
import Panel from "primevue/panel";
import InputText from "primevue/inputtext";
import Chart from 'primevue/chart';
import TabMenu from 'primevue/tabmenu';
import Toast from "primevue/toast";
import Textarea from 'primevue/textarea';
import InlineMessage from "primevue/inlinemessage";
import ToastService from 'primevue/toastservice';

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);
app.component('PrimeButton', Button);
app.component('PrimeCard', Card);
app.component('PrimePanel', Panel);
app.component('PrimeInputText', InputText);
app.component('PrimeChart', Chart);
app.component('PrimeTabMenu', TabMenu);
app.component('PrimeToast', Toast);
app.component('PrimeTextarea', Textarea);
app.component('PrimeInlineMessage', InlineMessage);
app.mount('#app');
