<script setup>
import CodeSnippet from "../components/CodeSnippet.vue";
import FooterVue from "../components/FooterVue.vue";
import jsonCode from "../mock/jsonCode.json";
</script>

<template>
  <div class="section-code-snippet">
    <h1>Code Snippet</h1>
    <span>Search code snippet</span>
    <input type="search" name="" id="inputCode" placeholder="Type your favorite snippet here, hehehe ....."/>
    <img src="../assets/icons/pesquisa-code.png" alt="" />
    <div class="section-code">

        <CodeSnippet
        v-for="item in jsonCode"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :icons="item.icons"
        :star="item.star"
        :numberStar="item.numberStar"
        />
    </div>
    <footer>
        <FooterVue />
    </footer>
</div>
</template>

<style scoped>
.section-code-snippet {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 70px;
}
h1 {
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
}

span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
}

input {
  background: #3f4152;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border: 0;
  position: relative;
  width: 1350px;
}

img {
  position: absolute;
  left: 1300px;
  bottom: 1395px;
  width: 27.75px;
}

.section-code {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  gap: 50px;
}
footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin-top: 50px;
  gap: 70px;
}
</style>
