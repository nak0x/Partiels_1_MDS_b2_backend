<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <RouterView />

  <footer id="app-footer">
    <div class="footer-content-wraper">
      <div class="footer-links">
        <a href="#">Politique de confidentialité</a>
        <a href="#">Politique d'utilisation des cookies</a>
        <a href="#">Mentions légales</a>
      </div>
      <div class="footer-title-container">
        <img src="@/assets/images/mds/logo.png" alt="Logo MyDigitalSchool">
        <p>© 2023 MyDigitalSchool</p>
      </div>
      <div class="footer-socials-icons">
        <div class="social-icons">
          <img src="@/assets/images/socials/Frame 1.png" alt="">
          <img src="@/assets/images/socials/Frame 2.png" alt="">
          <img src="@/assets/images/socials/Frame 3.png" alt="">
          <img src="@/assets/images/socials/Frame 4.png" alt="">
        </div>
      </div>
    </div>
  </footer>

</template>

<style scoped>
#app-footer{
  min-height: 120px;
  background-color: var(--black);
  display: grid;
  place-items: center;
  padding: 2rem;
}
#app-footer .footer-content-wraper{
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  max-width: 1920px;
  color: var(--white);
  height: 100%;
  width: 100%;
}

#app-footer .footer-content-wraper div{
  height: 100%;
  width: 100%;
}
.footer-links{
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1em;
}

.footer-links a{
  text-decoration: none;
  color: inherit;
}

.footer-title-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.3em;
}

.footer-title-container img{
  height: 75px;
}
.footer-socials-icons{
  display: grid;
  justify-content: flex-end;
  align-items: center;
}
.social-icons{
  background-color: var(--yellow);
  padding: .7rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  height: calc(30px + 1.4rem) !important;
}

.social-icons img{
  height: 30px;
  box-shadow: 0 .5rem .5rem 0 #0003;
  border-radius: 100%;
}

</style>
