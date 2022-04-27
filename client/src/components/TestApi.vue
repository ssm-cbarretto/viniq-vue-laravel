<template>
  <div>
    <label>
      Name:
      <input type="text" v-model="name" />
    </label>
  </div>
  <div>
    <label>
      Email:
      <input type="text" v-model="email" />
    </label>
  </div>
  <div>
    <label>
      Password:
      <input type="text" v-model="password" />
    </label>
  </div>
  <button @click="register">Register!</button>
  <div>
    <pre>{{ auth.user }}</pre>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";

export default {
  data() {
    return {
      auth: useAuthStore(),
      name: `Random User ${Math.floor(Math.random() * 9999)}`,
      email: `test${Math.floor(Math.random() * 9999)}@gmail.com`,
      password: 'testpassword123',
      user: null
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.auth.setCsrfCookie();
      await this.auth.getPublic();
      await this.auth.getProtected();
    },
    async register() {
      const params = {
        'name': this.name,
        'email': this.email,
        'password': this.password,
        'password_confirmation': this.password
      }
      await this.auth.logout();
      await this.auth.register(params);
      await this.auth.me();
      console.log(params);
    }
  }
}
</script>