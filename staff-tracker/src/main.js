import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { createPinia } from "pinia";
import { createAuth0 } from "@auth0/auth0-vue";

createApp(App)
	.use(router)
	.use(
		createAuth0({
			domain: "dev-2b5z2q36.us.auth0.com",
			client_id: "NVgiuB8fkPTo5cVt7G6sCdWbEgQiGWaj",
			redirect_uri: window.location.origin,
		})
	)
	.use(createPinia())
	.mount("#app");
