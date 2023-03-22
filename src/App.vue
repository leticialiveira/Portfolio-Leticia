<script setup>
import { RouterView } from 'vue-router'
import HeaderVue from './components/HeaderVue.vue'
import FooterVue from './components/FooterVue.vue'


</script>

<template>
    
    <HeaderVue />
  <!-- <v-slot/> -->
  <router-view></router-view>
  <footer>
      <FooterVue />
    </footer>
</template>
<style scoped>

footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin-top: 120px;
  gap: 70px;
}
</style>
