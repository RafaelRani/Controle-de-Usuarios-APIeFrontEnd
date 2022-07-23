<template>
  <div class="recoverPassword">
    <MenuNavbar />
    <br />
    <section class="container">
      <div class="columns is-centered">
        <div class="column is-6">
          <div class="box">
            <h1 class="title">Redefinir sua senha</h1>
            <h6 class="subtitle is-6">Digite seu endereço de email e nós lhe redirecionaremos para redefinir sua senha.</h6>
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

            <button class="button is-primary" @click="recover">Redefinir Senha</button>
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
      email: '',
      error: undefined,
    };
  },
  methods: {
    recover() {
      axios.post('http://localhost:8686/recoverpassword', {
        email: this.email,
      })
        .then((res) => {
          console.log(res);
          localStorage.setItem('recoverToken', res.data.token);
          this.$router.push({ name: 'ChangePassword' });
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
