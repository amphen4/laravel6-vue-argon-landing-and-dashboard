import "@argon-landing/assets/vendor/nucleo/css/nucleo.css";
import "@argon-landing/assets/vendor/font-awesome/css/font-awesome.css";
import "@argon-landing/assets/scss/argon.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import VueLazyload from "vue-lazyload";

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(VueLazyload);
  }
};
