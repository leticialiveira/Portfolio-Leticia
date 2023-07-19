<script setup>

</script>

<template>
  <!-- <h1>Code Snippet</h1> -->
<article>
    <header>
        <div class="description">

            <h2>Vue 3</h2>
            <p>Temos  o Desafio Carnaval como exemplo de projeto, utilizando o vue 3 e o Javascript.</p>
        </div>
      <footer>
        <div class="icons">
          <img  src="../assets/icons/icon-vue-js.png" alt="" />
          <img  src="../assets/icons/icon-sass.png" alt="" />
          <img  src="../assets/icons/icon-js.png" alt="" />
        </div>
        <div class="number-stars">
          <img class="star" src="../assets/icons/star.png" alt="">
          <p>8 Estrelas</p>
        </div>
      </footer>
    </header>
  </article>
  <article>
    <header>
        <div class="description">

            <h2>Vue 2</h2>
            <p>Temos o Desafio Letflix como exemplo de projeto, utilizando o vue 2 e o Javascript.</p>
        </div>
      <footer>
        <div class="icons">
          <img  src="../assets/icons/icon-vue-js.png" alt="" />
          <img  src="../assets/icons/icon-css.png" alt="" />
          <img  src="../assets/icons/icon-js.png" alt="" />
        </div>
        <div class="number-stars">
          <img class="star" src="../assets/icons/star.png" alt="">
          <p>8 Estrelas</p>
        </div>
      </footer>
    </header>
  </article>
  <article>
    <header>
        <div class="description">

            <h2>HTML, CSS e Javascript</h2>
            <p>Temos o Questionário Game e o Desafio Google como exemplos de projetos, utilizando o Javascript puro, HTML e CSS.</p>
        </div>
      <footer>
        <div class="icons">
          <img  src="../assets/icons/icon-html.png" alt="" />
          <img  src="../assets/icons/icon-css.png" alt="" />
          <img  src="../assets/icons/icon-js.png" alt="" />
        </div>
        <div class="number-stars">
          <img class="star" src="../assets/icons/star.png" alt="">
          <p>9 Estrelas</p>
        </div>
      </footer>
    </header>
  </article>
  <article>
    <header>
        <div class="description">

            <h2>Javascript</h2>
            <p>Resolvi quatro listas com questões complexas, utilizando a lógica de programação e Javascript.</p>
        </div>
      <footer>
        <div class="icons">
          <img  src="../assets/icons/icon-js.png" alt="" />
        </div>
        <div class="number-stars">
          <img class="star" src="../assets/icons/star.png" alt="">
          <p>7 Estrelas</p>
        </div>
      </footer>
    </header>
  </article>
</template>

<style scoped>

article {
  width: 556px;
  height: 300px;
  background: #000;
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  padding: 30px 40px;
  border: solid 1px #ff9a9e;
  
}

h2 {
  background: linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
  width: auto;
  margin-bottom: 10px;
  border-radius: 10px;
  padding-left: 10px;
}

article header .description {
    height: 70px;
}
article header h2 {
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 72px;
  letter-spacing: 1px;
}
article header p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  /* line-height: 32px; */
}
article footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 140px;
  height: 0;
}
article footer .icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}
article footer .icons img {
  background: #fbfbfb;
  border-radius: 10px;
  padding: 10px;
  width: 38px;
}
article footer .number-stars {
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  gap: 20px;
}
</style>