import {
	createSSRApp
} from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import { createUnistorage } from 'pinia-plugin-unistorage'
import 'uno.css'


// import vconsole from 'vconsole'
// const console = new vconsole()

export function createApp() {
	const app = createSSRApp(App);
	const store = Pinia.createPinia();
	store.use(createUnistorage());
	app.use(store);
	return {
		app,
		Pinia
	};
}
