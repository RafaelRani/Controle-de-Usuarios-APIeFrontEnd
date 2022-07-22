<template>
  <div class="home">
    <MenuNavbar />
    <br />
    <section class="container">
      <div class="columns is-centered">
        <MenuLeft />
        <div class="column is-9">
          <div class="box">
            <h1 class="title is-3">LISTA DE USUÁRIOS</h1>
            <table
              class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
            >
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Cargo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.role | processRole }}</td>
                </tr>
              </tbody>
            </table>
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

    axios.get('http://localhost:8686/user', req)
      .then((res) => {
        console.log(res);
        this.users = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('OLÁ');
  },
  data() {
    return {
      users: [],
    };
  },
  filters: {
    processRole(value) {
      let type;
      if (value === 0) {
        type = 'Usuário comum';
      }
      if (value === 1) {
        type = 'Admin';
      }
      return type;
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

<style scoped>
.table {
  margin-left: auto;
  margin-right: auto;
}
</style>
