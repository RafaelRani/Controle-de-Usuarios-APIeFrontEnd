<template>
  <div class="about">
    <MenuNavbar />
    <br />
    <section class="container">
      <div class="columns is-centered">
        <MenuLeft />
        <div class="column is-9">
          <div class="box">
            <strong>Esta SPA faz o consumo da API de Controle de Usuários</strong>
            <hr>
            <h4 class="title is-4 primary">Funcionalidades Adicionadas:</h4><br>
            <h5 class="title is-5">Adicionar usuário</h5>
            <h5 class="title is-5">Listar usuários</h5>
            <h5 class="title is-5">Editar usuário</h5>
            <h5 class="title is-5">Deletar usuário</h5>
            <h5 class="title is-5">Fazer Login de usuário</h5>
          </div>
        </div>
      </div>
    </section>
    <br />
    <ComponentFooter />
  </div>
</template>

<script>
import MenuNavbar from '../components/MenuNavbar.vue';
import MenuLeft from '../components/MenuLeft.vue';
import ComponentFooter from '../components/ComponentFooter.vue';

export default {
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
