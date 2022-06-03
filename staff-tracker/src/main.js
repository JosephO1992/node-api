import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { createPinia } from "pinia";
import { createAuth0 } from "@auth0/auth0-vue";
import { domain, client_id } from "./auth-config";

createApp(App)
	.use(router)
	.use(
		createAuth0({
			domain,
			client_id,
			redirect_uri: window.location.origin,
		})
	)
	.use(createPinia())
	.mount("#app");
