import { createApp } from 'vue'
import './css/tailwind.css'
import './css/sugar-styles.css'
import App from './App.vue'
import router from './router'

console.log("Creating VUE application")
const app = createApp(App)

// Import and setup view layouts
import DefaultLayout from "./layouts/Default.vue";
import DashboardLayout from "./layouts/Dashboard.vue";
// import CustomerLayout from "./layouts/Customer.vue";
// import AdminLayout from "./layouts/Admin.vue";
import LoadingLogo from "./components/Loading.vue";
import Spinner from "./components/Spinner.vue";
import Navbar from "./components/Navigation/Navbar.vue";
import Sidebar from "./components/Navigation/Sidebar.vue";

app.component("default-layout", DefaultLayout);
app.component("dashboard-layout", DashboardLayout);
// app.component("dashboard-layout", CustomerLayout);
// app.component("admin-layout", AdminLayout);
app.component("loading", LoadingLogo);
app.component("spinner", Spinner);
app.component("Navbar", Navbar);
app.component("Sidebar", Sidebar);

// Import Plugins
// vue-toastification (toast notifications) - https://github.com/Maronato/vue-toastification
import Toast, { POSITION } from "vue-toastification";
import ToastCloseButton from "@/components/Misc/ToastCloseButton.vue";
import "vue-toastification/dist/index.css";

let toastOptions = {
  position: POSITION.BOTTOM_CENTER,
  toastClassName: "sugar-toast",
  hideProgressBar: true,
  transition: "Vue-Toastification__fade",
  closeButton: ToastCloseButton,
  icon: false,
  timeout: 3000
}

app.use(Toast, toastOptions);

// Custom SugarSecurity Plugins
import VueCookies from 'vue-cookies'
app.use(VueCookies, {
  secure: true
})

app.use(router);
router.isReady().then(() => {
  app.mount('#app');
})
