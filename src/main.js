// main.js
import { createApp } from 'vue';
import App from './App.vue'; // assuming App.vue is in the same directory as main.js

import router from './Router/index.js'; // Import the router configuration

const app = createApp(App);
app.use(router); // Use the router

app.mount('#app');
