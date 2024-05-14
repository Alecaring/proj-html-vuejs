import { createApp } from 'vue'
import './style/general.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue'
import { router } from "./router";
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import "leaflet.markercluster";

createApp(App).use(router).mount('#app')
