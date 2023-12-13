<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<!-- À réfléchire si c'est intéréssand d'utilisé un header avec un menu et des ancres -->
  <!-- <header class="app-menu">
    <div class="menu-toggle-container">
      <button class="btn menu-btn"><font-awesome-icon icon="fa-solid fa-bars" /></button>
    </div>
    <div class="menu-items-container">
      <div class="item">

      </div>
    </div>
  </header> -->

  <RouterView />

  <footer id="app-footer">
    <div class="left">
      <div class="footer-title-container">
        <h5>MyDigitalSchool</h5>
      </div>
      <div class="footer-links">
        <p>© 2023 MyDigitalSchool</p>
        <a href="#">Politique de confidentialité</a>
        <a href="#">Politique d'utilisation des cookies</a>
        <a href="#">Mentions légales</a>
      </div>
    </div>
    <div class="right">
      <div class="footer-form-container">
        
      </div>
    </div>
  </footer>

</template>

<style scoped>

</style>
