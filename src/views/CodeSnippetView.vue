<script setup>
import CodeSnippet from "../components/CodeSnippet.vue";
import CodeSnippetUp from "../components/CodeSnippetUp.vue";
import FooterVue from "../components/FooterVue.vue";
import { ref } from "vue";
import jsonCode from "../mock/jsonCode.json";

// fetch("jsonCode")
// .then((response) => {
//   console.log(response.title[0]);
// }) 
// .catch((error) => {
//   console.log(error);
// })
  const code = ref("");
  let filteredCodes = ref(jsonCode);
  console.log(filteredCodes.value);

  function updateFilteredCodes() {
   return filteredCodes.value.filter(item => {
    return (
      item.title.toUpperCase().includes(code.value.toUpperCase())
    )
   })
  }
  console.log(updateFilteredCodes());

</script>

<template>
  <div class="section-code-snippet">
    <CodeSnippetUp v-model:code="code"/>
    <div class="section-code">
      <CodeSnippet
        v-for="item in updateFilteredCodes()"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :icons="item.icons"
        :star="item.star"
        :numberStar="item.numberStar"
      />
    </div>

  </div>
</template>

<style scoped>
.section-code-snippet {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 70px;
}


.section-code {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  gap: 50px;
}

</style>
