<script setup>
import SectionBiography from "../components/SectionBiography.vue";
import SectionProject from "../components/SectionProject.vue";
import SectionCode from "../components/SectionCode.vue";
import jsonCode from "../mock/jsonCode.json";

</script>

<template>
   
  <div class="section-biography">
    <SectionBiography />
  </div>
  <div class="section-project">
    <SectionProject />
  </div>
  <div class="section-code-snippet">
    <h1>Code Snippet</h1>
    <div class="section-code">
      <SectionCode
        v-for=" item in jsonCode"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :icons="item.icons"
        :star="item.star"
        :numberStar="item.numberStar"
      />
    </div>
    <div class="link-see-more">
    <router-link to="/code">
      <img src="../assets/icons/see-more.png" alt="" />
      See More
    </router-link>
  </div>
  </div>
</template>

<style scoped>

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  height: auto;
  flex-direction: column;
}

.section-biography {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 70px;
  margin-top: 70px;
  font-family: "Poppins", sans-serif;
  height: auto;
}

.section-project {
  display: flex;
  align-items: start;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  margin-top: 80px;
  height: auto;
}

.section-code-snippet {
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
  margin-top: 40px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 150px;
}
.section-code {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  gap: 50px;
}
.link-see-more {
  background: #323443;
  border-radius: 12px;
  padding: 8px 30px;
  width: 167px;
}

.link-see-more a {
  color: #c9c9c9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  font-weight: 400;
  line-height: 26px;
  font-family: "Inter";
  font-style: normal;
  text-decoration: none;
  font-size: 14px;
}
</style>