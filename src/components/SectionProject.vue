<script></script>

<template>
  <h1 class="title">Projetos em destaque</h1>
  <div class="projects">
    <div>
      <div class="projects-img">
        <img class="shadow" src="../assets/image/rectangle.png" alt="" />
        <img class="image" src="../assets/image/image-1-project.png" alt="" />
        <a class="arrow" href="https://escola-blueberry-vuetify.vercel.app/"
          ><img src="../assets/icons/arrow-project.png" alt=""
        /></a>
      </div>
      <div class="projects-text">
        <span>Desenvolvedora Front-End</span>
        <a href="https://escola-blueberry-vuetify.vercel.app/"
          ><h1>Escola Blueberry</h1></a
        >
        <p>
          Desafio para criar a parte de front end de um site escolar, utilizando
          o vue 3 e o vuetify 3. Site composto por um background retirado do
          site 'freepink', uma logo criada no aplicativo 'Canva', menu de busca,
          formularios e galeria exibindo imagens.
        </p>
      </div>
    </div>
    <div>
      <div class="projects-img">
        <img class="shadow" src="../assets/image/rectangle.png" alt="" />
        <img class="image" src="../assets/image/image-4-project.png" alt="" />
        <a href="https://desafio-2-xi.vercel.app/" class="arrow"
          ><img src="../assets/icons/arrow-project.png" alt=""
        /></a>
      </div>
      <div class="projects-text">
        <span>Desenvolvedora Front-End</span>
        <a href="https://desafio-2-xi.vercel.app/"><h1>Desafio Google</h1></a>
        <p>
          Desafio para criar a parte de front end de um site de pesquisa do
          Google, utilizando o JavaScript puro e uma lista Json para teste. Site
          composto por menu de busca, formulário que compara o valor recebido
          com a lista Json e caso a pessoa tenha o acesso, é redirecionada a uma
          outra página, sem a opção de voltar.
        </p>
      </div>
    </div>
  </div>
  <div class="link-see-more">
    <router-link to="/projects">
      <img src="../assets/icons/see-more.png" alt="" />
      Ver mais
    </router-link>
  </div>
</template>

<style scoped>
.title {
  font-family: "Sora";
  font-style: normal;
  display: flex;
  align-items: start;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 30px;
}
.projects {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  gap: 15px;
  width: 100%;
}
div {
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
  gap: 15px;
  justify-content: center;
}
.projects-img .shadow {
  position: relative;
}
.projects-img .image {
  position: absolute;
  bottom: 0px;
  left: 55px;
  width: 420px;
}

.projects-img .icon2 {
  position: absolute;
  left: 80px;
  top: 80px;
  background: #fbfbfb;
  width: 16px;
  height: 16px;
  border-radius: 4px;
}
.projects-img .icon3 {
  position: absolute;
  left: 105px;
  top: 80px;
  background: #fbfbfb;
  width: 16px;
  height: 16px;
  border-radius: 4px;
}
.projects-img .arrow {
  position: absolute;
  right: 15px;
  top: 10px;
  background: #3f4152;
  border-radius: 9px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.projects-text {
  display: flex;
  flex-direction: column;
}
.projects-text span {
  color: #dedede;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
}
.projects-text a {
  text-decoration: none;
  color: #ffffff;
  font-family: "Sora", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
  width: 500px;
}
.projects-text p {
  color: #d4d4d4;
  width: 556px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
}
.link-see-more {
  background: #323443;
  border-radius: 12px;
  padding: 8px 30px;
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
