import { defineStore } from 'pinia'
import ApiService from "@/services/ApiService";

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: null
  }),
  actions: {
    async getPublic() {
      console.log('Start --> /api/test_public');
      await ApiService.get('/api/test_public').then(data => {
        console.log('Result --> /api/test_public', data);
      });
    },
    async getProtected() {
      console.log('Start --> /api/test_protected');
      await ApiService.post('/api/test_protected').then(data => {
        console.log('Result --> /api/test_protected', data);
      });
    },
    async logout(params) {
      console.log('Start --> /logout', params);
      await ApiService.post('/logout', params).then(data => {
        console.log('Result --> /logout', data);
      });
    },
    async register(params) {
      console.log('Start --> /register', params);
      await ApiService.post('/register', params).then(data => {
        console.log('Result --> /register', data);
      });
    },
    async me(params) {
      console.log('Start --> /api/user', params);
      await ApiService.get('/api/user', params).then(data => {
        console.log('Result --> /api/user', data);
        this.user = data.data;
      });
    },
    async setCsrfCookie() {
      console.log('Setting cookie --> /sanctum/csrf-cookie')
      await ApiService.get('/sanctum/csrf-cookie');
      console.log('Done cookie --> /sanctum/csrf-cookie')
    }
  }
})
