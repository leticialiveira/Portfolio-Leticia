<script setup>
import Projects from "../components/Projects.vue";
import FooterVue from "../components/FooterVue.vue";
</script>

<template>
  <section class="section-project">
    <Projects />
  </section>
    <footer>
        <FooterVue />
    </footer>
</template>

<style scoped>

.section-project{
    display: flex;
    flex-direction: column;
    gap: 70px;
    margin-top: 50px;
    margin-bottom: 100px;
}

footer{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: auto;
    margin-top: 120px;
    gap: 70px;
}
</style>