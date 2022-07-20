<template>
  <div class="register">
    <MenuNavbar />
    <br />
    <section class="container">
      <div class="columns is-centered">
        <div class="column is-6">
          <div class="box">
            <h1 class="title">Registro de usuário</h1>
            <h2 class="subtitle">Seja bem vindo</h2>
            <div v-if="error != undefined">
              <div class="notification is-danger">
                {{ error }}
              </div>
            </div>

            <div class="field">
              <label class="label">Nome</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Nome do usuário"
                  v-model="name"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="email@email.com"
                  v-model="email"
                />
              </div>
            </div>

            <div class="field">
              <label class="label">Senha</label>
              <div class="control">
                <input
                  class="input"
                  type="password"
                  placeholder="******"
                  v-model="password"
                />
              </div>
            </div>
            <button class="button is-primary" @click="register">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </section>
    <br>
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
      name: '',
      password: '',
      email: '',
      error: undefined,
    };
  },
  methods: {
    register() {
      axios
        .post('http://localhost:8686/user', {
          name: this.name,
          password: this.password,
          email: this.email,
        })
        .then((res) => {
          console.log(res);
          this.$router.push({ name: 'Home' });
        })
        .catch((err) => {
          const msgErro = err.response.data.err;
          this.error = msgErro;
        });
    },
  },
  name: 'RegisterView',
  components: {
    MenuNavbar,
    ComponentFooter,
  },
};
</script>

<style scoped></style>
