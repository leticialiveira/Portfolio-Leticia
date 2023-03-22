<script setup></script>

<template>
  <div class="title">
    <h1>Documentos do Portfólio</h1>
    <img src="../assets/image/studying.png" alt="" />
  </div>
  <div class="articles">
    <article>
      <div class="article-title">
        <h3>Cabeçalho</h3>
      </div>
      <div class="documents">
        <router-link to="/mentorship">Orientação</router-link>
        <router-link to="/code"> Framework</router-link>
        <router-link to="/projects">Portfólio</router-link>
        <router-link to="/">Início</router-link>
      </div>
    </article>
    <article>
      <div class="article-title">
        <h3>Redes Sociais</h3>
      </div>
      <div class="documents">
        <a href="https://instagram.com/leticialiveira?igshid=ZDdkNTZiNTM="
          >Instagram</a
        >
        <a href="#linkedin">Linkedin</a>
        <a href="https://github.com/leticialiveira">GitHub</a>
        <a
          href="https://twitter.com/leticialiveiraa?t=GXJVygXtHuMUDEddOAtzpg&s=09"
          >Twiter</a
        >
      </div>
    </article>
    <article>
      <div class="article-title">
        <h3>Rodapé</h3>
      </div>
      <div class="documents">
        <a href="">Notas de livros</a>
        <a href="https://www.figma.com/file/4NSgiUWDLcBeMXv2MFY7kW/Leticia?t=UbIXd4shSUNmAZfe-0"
          >Modelo inicial
          <a href="">Politrabalho</a>
          <a href="">Estatisticas</a>
        </a>
      </div>
    </article>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 500px;
}

.title h1 {
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
  text-decoration: underline;
}

.title img {
  width: 300px;
}

.articles {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
}
article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 205px;
}
article .documents {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

article .article-title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 205px;
}
.article-title h3 {
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 72px;
  color: #ffffff;
}

article .documents a {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-decoration: none;
  color: #fafaf9;
}
</style>
