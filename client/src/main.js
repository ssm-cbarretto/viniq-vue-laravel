import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


// --------------------------------------

import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true;

axios.get('/sanctum/csrf-cookie').then(response => {
    axios.get('/api/greetings').then(data => {
        console.log('/api/greetings', data);
    }).catch(error => {
        console.log('/api/greetings', error);
    })

    axios.post('/api/helloworld', { foo: 'bar' }).then(data => {
        console.log('/api/helloworld', data);
    }).catch(error => {
        console.log('/api/helloworld', error);
    })
});
