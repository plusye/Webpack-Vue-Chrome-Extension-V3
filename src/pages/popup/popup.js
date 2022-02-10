import Vue from "vue";
import Popup from "./Popup.vue";
console.log(`locale test: ${ chrome.i18n.getMessage("app_name") }`)
new Vue({
  render: (h) => h(Popup),
}).$mount("#popup");
