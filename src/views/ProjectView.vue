<script setup>
import Projects from "../components/Projects.vue";
import FooterVue from "../components/FooterVue.vue";
import jsonProjects from "../mock/jsonProjects.json";

</script>

<template>
  <section class="section-project">
    <div class="title">
      <h1> Meus <span>projetos</span> </h1>
      <img src="../assets/icons/arrow-project-view.png" alt="" />
    </div>
    <Projects
      v-for="item in jsonProjects"
      :key="item.title"
      :functionn="item.functionn"
      :title="item.title"
      :link="item.link"
      :description="item.description"
      :image="item.image"
    />
  </section>

</template>

<style scoped>
.title {
  display: flex;
}
.title h1 {
  width: 458px;
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 72px;
  color: #ffffff;
}

.title h1 span {
  color: #fe5196;;
}

.title img {
  width: 120.97px;
}
.section-project {
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-top: 50px;
  margin-bottom: 100px;
}


</style>
