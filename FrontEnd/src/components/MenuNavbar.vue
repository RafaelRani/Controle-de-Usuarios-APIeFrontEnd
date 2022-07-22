<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong>LOGO</strong>
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/"> Home </a>

        <a class="navbar-item" href="https://github.com/RafaelRani/Controle-de-Usuarios-APIeFrontEnd">
          Documentation
        </a>
      </div>

      <div class="navbar-end">

        <div v-if="name != undefined">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> {{name}} </a>

            <div class="navbar-dropdown">
              <router-link :to="{ name: 'UserEdit', params: { id } }">
                <a class="navbar-item"> Editar </a>
              </router-link>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Logout </a>
            </div>
          </div>
        </div>

        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="/register">
              <strong>Registrar</strong>
            </a>
            <a class="button is-light" href="/login"> Login </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  created() {
    const fullname = localStorage.getItem('name');
    const names = fullname.split(' ');
    [this.name] = [names[0]];
    this.id = localStorage.getItem('id');
  },
  data() {
    return {
      name: String,
      id: Number,
    };
  },
};
</script>

<style></style>
