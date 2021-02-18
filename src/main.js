import Vue from "vue";
import App from "./App.vue";

import VueLazyload from "vue-lazyload";
import VueScreenSize from "vue-screen-size";
import VueFormulate from "@braid/vue-formulate";
import VueSplide from "@splidejs/vue-splide";
import VueScrollTo from "vue-scrollto";
import VueWaypoint from "vue-waypoint";
import VueSilentbox from "vue-silentbox";

import CustomFormulateSelect from "./components/CustomFormulateSelect";
import CustomFormulateCheckbox from "./components/CustomFormulateCheckbox";

// register your component with Vue
Vue.component("CustomFormulateSelect", CustomFormulateSelect);
Vue.component("CustomFormulateCheckbox", CustomFormulateCheckbox);
import vco from "v-click-outside";

Vue.use(VueSplide);
Vue.use(vco);
Vue.use(VueScrollTo);
Vue.use(VueWaypoint);
Vue.use(VueSilentbox);

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
