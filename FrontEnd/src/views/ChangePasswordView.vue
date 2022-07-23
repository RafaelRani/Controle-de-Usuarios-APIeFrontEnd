<template>
  <div class="changePassword">
    <MenuNavbar />
    <br />
    <section class="container">
      <div class="columns is-centered">
        <div class="column is-6">
          <div class="box">
            <h1 class="title">Altere sua senha</h1>
            <h6 class="subtitle is-6">Digite sua nova senha.</h6>
            <div v-if="error != undefined">
              <div class="notification is-danger">
                {{ error }}
              </div>
            </div>
            <div class="field">
              <label class="label">Nova Senha</label>
              <div class="control">
                <input
                  class="input"
                  type="password"
                  placeholder="********"
                  v-model="password"
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Repita</label>
              <div class="control">
                <input
                  class="input"
                  type="password"
                  placeholder="********"
                  v-model="password2"
                />
              </div>
            </div>

            <button class="button is-primary" @click="change">Redefinir Senha</button>
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
      password2: '',
      error: undefined,
    };
  },
  methods: {
    change() {
      if (this.password === this.password2) {
        const token = localStorage.getItem('recoverToken');

        axios.post('http://localhost:8686/changepassword', {
          token,
          password: this.password,
        })
          .then((res) => {
            alert(res.data);
            localStorage.removeItem('recoverToken');
            this.$router.push({ name: 'Login' });
          })
          .catch((err) => {
            alert(err.data);
          });
      } else {
        this.error = 'As senhas não correspondem';
      }
    },
  },
  components: {
    MenuNavbar,
    ComponentFooter,
  },
};
</script>

<style scoped></style>
