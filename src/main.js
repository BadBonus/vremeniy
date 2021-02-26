import Vue from "vue";
import App from "./App.vue";

import VueLazyload from "vue-lazyload";
import VueScreenSize from "vue-screen-size";
import VueFormulate from "@braid/vue-formulate";
import VueSplide from "@splidejs/vue-splide";
import VueScrollTo from "vue-scrollto";
import VueWaypoint from "vue-waypoint";
import Lightbox from "vue-easy-lightbox";
import vco from "v-click-outside";
import VueGtag from "vue-gtag";
import { VueReCaptcha } from "vue-recaptcha-v3";

import CustomFormulateSelect from "./components/CustomFormulateSelect";
import CustomFormulateCheckbox from "./components/CustomFormulateCheckbox";

import HttpService from "./services/http.service";

// register your component with Vue
Vue.component("CustomFormulateSelect", CustomFormulateSelect);
Vue.component("CustomFormulateCheckbox", CustomFormulateCheckbox);

Vue.use(VueSplide);
Vue.use(vco);
Vue.use(VueScrollTo);
Vue.use(VueWaypoint);
Vue.use(Lightbox);
Vue.use(VueLazyload);
Vue.use(HttpService);


Vue.use(VueGtag, {
  config: {
    id: "UA-28500405-69",
  },
});
Vue.use(VueReCaptcha, {
  siteKey: `${process.env.VUE_APP_SITE_KEY}`,
  loaderOptions: {
    useRecaptchaNet: true,
  },
});

Vue.use(VueFormulate, {
  library: {
    autocomplete: {
      classification: "text",
      component: "CustomFormulateSelect",
    },
    customCheckbox: {
      classification: "checkbox",
      component: "CustomFormulateCheckbox",
    },
  },
});
Vue.config.productionTip = false;

Vue.use(VueLazyload);
Vue.use(VueScreenSize);

Vue.prototype.$desktopSize = 1025;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
