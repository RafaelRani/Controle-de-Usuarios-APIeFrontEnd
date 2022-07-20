<template>
  <div class="edit">
    <MenuNavbar />
    <br />
    <section class="container">
      <div class="columns is-centered">
        <MenuLeft />
        <div class="column is-9">
          <div class="box">
            <h1 class="title">Edição de usuário</h1>
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
            <button class="button is-primary" @click="update">Editar</button>
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
import MenuLeft from '../components/MenuLeft.vue';
import ComponentFooter from '../components/ComponentFooter.vue';

export default {
  created() {
    const req = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    axios
      .get(`http://localhost:8686/user/${this.$route.params.id}`, req)
      .then((res) => {
        console.log(res);

        this.name = res.data.name;
        this.email = res.data.email;
        this.id = res.data.id;
      })
      .catch((err) => {
        console.log(err.response);
        this.$router.push({ name: 'Users' });
      });
  },
  data() {
    return {
      name: '',
      email: '',
      id: -1,
      error: undefined,
    };
  },
  methods: {
    update() {
      const req = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      };

      axios
        .put(
          'http://localhost:8686/user',
          {
            name: this.name,
            email: this.email,
            id: this.id,
          },
          req,
        )
        .then((res) => {
          console.log(res);
          this.$router.push({ name: 'Users' });
        })
        .catch((err) => {
          const msgErro = err.response.data.err;
          this.error = msgErro;
        });
    },
  },
  name: 'HomeView',
  components: {
    MenuNavbar,
    MenuLeft,
    ComponentFooter,
  },
};
</script>

<style scoped></style>
