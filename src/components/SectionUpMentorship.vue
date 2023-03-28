<script></script>

<template>
  <div class="description">
    <h1>Estudos</h1>
    <p>
      
      <span class="span-0">HTML</span>, <span class="span-1">CSS </span>, <span class="span-3">SASS</span>, <span class="span-2">JavaScript</span>, <span class="span-3">Vue 3</span>, <span class="span-1">Vue 2</span>, <span class="span-4">Vuetify</span>.
    </p>
    <div class="description-space">
      <div class="space-line"></div>
      <span
        >Aprendi através de uma mentoria de treinamento, com questões e desafios para melhorar meu conhecimento na área.</span
      >
    </div>
  </div>
  <div class="panel">
    <div class="panel-article">
      <article>
        <header>
          <img src="../assets/image/smile-looking-right.png" alt="" />
          <h3>Primeira Semana</h3>
        </header>
        <p>Fiz o primeiro desafio utilizando Html e Css, aprendendo sobre a importancia da parte estrutural.</p>
      </article>
      <article>
        <header>
          <img src="../assets/image/sticker.png" alt="" />
          <h3>Segunda Semana</h3>
        </header>
        <p>Comecei a pegar um pouco da lógica do JavaScript, usando funções e comparando a uma lista json.</p>
      </article>
      <article>
        <header>
          <img src="../assets/image/persona.png" alt="" />
          <h3>Terceira Semana</h3>
        </header>
        <p>Aprendi sobre o vue 3 e o vuetify 3, facilitando mais ainda meu aprendizado com Html, Css e JavaScript.</p>
      </article>
    </div>

    <!-- <a href="#bacaSelengkapnya">
      <img src="../assets/icons/see-more.png" alt="" />
      Mais informação
    </a> -->
  </div>
</template>

<style scoped>
.description {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.description h1 {
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
}

.description p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  width: 458px;
  color: #eff4f1;
}

.description p  .span-0 {
  color: #3bf686;
}

.description p .span-1 {
  color: #4CA9FF;
}

.description p .span-2 {
  color: #62D9FF;
}
.description p .span-3 {
  color: #7EF5A6;
}
.description p .span-4 {
  color:#80E6EA;
}

.description-space {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.description-space .space-line {
  border: solid 5px #3bf686;
  height: 77px;
}
.description .description-space span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #eff4f1;
  width: 453px;
}

.panel {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.panel .panel-article {
  background: #323443;
  border-radius: 12px;
  width: 700px;
  height: 250px;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0px 20px;
}

.panel-article article {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

header {
  display: flex;
  align-items: center;
}

article header img {
  width: 100px;
  height: 100px;
}
article header h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  width: 131.06px;
  color: #ffffff;
}

article p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #c9c9c9;
  width: 185px;
  text-align:center ;
}

/* .panel a {
  padding: 10px;
  width: 262px;
  background: #323443;
  border-radius: 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  color: #c9c9c9;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
} */
</style>
