import "@argon-admin/assets/vendor/nucleo/css/nucleo.css";
import "@argon-admin/assets/scss/argon.scss";
import globalComponents from "./globalComponents";
import globalDirectives from "./globalDirectives";
import SidebarPlugin from "@argon-admin/components/SidebarPlugin/index"
import NotificationPlugin from "@argon-admin/components/NotificationPlugin/index"

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(SidebarPlugin);
    Vue.use(NotificationPlugin);
  }
};
