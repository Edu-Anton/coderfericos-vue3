<template>
  <header-section></header-section>
  <div class="container flex-grow-1 pt-5">
    <router-view></router-view>
  </div>
  <footer-section></footer-section>
</template>

<script>
import FooterSection from './components/layout/Footer.vue'
import HeaderSection from './components/layout/Header.vue'


export default {
  name: 'App',
  components: {
    FooterSection,
    HeaderSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
