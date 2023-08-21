import { createApp, ref } from 'vue'
import App from './App.vue'
import './main.scss'

export const useRef = (initialValue: any) => {
    const value = ref(initialValue);
    const setValue = (newValue: any) => {
        value.value = newValue;
    };

    return [value, setValue];
}

createApp(App).mount('#app')
