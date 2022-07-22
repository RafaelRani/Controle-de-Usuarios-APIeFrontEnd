<template>
  <div class="login">
    <MenuNavbar />
    <br />
    <section class="container">
      <div class="columns is-centered">
        <div class="column is-6">
          <div class="box">
            <h1 class="title">Login de Usuário</h1>
            <h2 class="subtitle">Seja bem vindo</h2>
            <div v-if="error != undefined">
              <div class="notification is-danger">
                {{ error }}
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="email@example.com"
                  v-model="email"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input
                  class="input"
                  type="password"
                  placeholder="********"
                  v-model="password"
                />
              </div>
            </div>

            <button class="button is-primary" @click="login">Login</button>
          </div>
        </div>
      </div>
    </section>
    <br />
    <ComponentFooter />
  </div>
</template>

<script>
import axios from 'axios';
import MenuNavbar from '../components/MenuNavbar.vue';
import ComponentFooter from '../components/ComponentFooter.vue';

export default {
  data() {
    return {
      password: '',
      email: '',
      error: undefined,
    };
  },
  methods: {
    login() {
      axios
        .post('http://localhost:8686/login', {
          password: this.password,
          email: this.email,
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('id', res.data.loggedUser.id);
          localStorage.setItem('name', res.data.loggedUser.name);
          localStorage.setItem('email', res.data.loggedUser.email);
          localStorage.setItem('role', res.data.loggedUser.role);
          this.$router.push({ name: 'Home' });
        })
        .catch((err) => {
          const msgErro = err.response.data.err;
          this.error = msgErro;
        });
    },
  },
  components: {
    MenuNavbar,
    ComponentFooter,
  },
};
</script>

<style scoped></style>
