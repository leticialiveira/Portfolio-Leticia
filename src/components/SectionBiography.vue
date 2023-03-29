<script></script>

<template>
  <div class="title">
    <p class="text">
      Seja bem vindo ao meu portfólio, aqui você vai encontrar todos os meus
      projetos e conhecimentos,espero que seja uma experiência agradável!
    </p>
  </div>

  <div class="persona-biography">
    <div class="persona-history">
      <div class="persona-img">
        <img src="../assets/image/grin-smile.png" alt="" />
      </div>
      <div class="text-biography">
        <h1>Biografia</h1>
        <p>
          Olá, sou a <span class="span1">Letícia</span>, programadora apaixonada
          por soluções inovadoras e desafios complexos.
          <span class="span2">Habilidade em aprender rapidamente</span>
          <span class="span3">novas linguagens.</span>
        </p>
      </div>
    </div>
    <div class="link-biography">
      <h2>Minhas redes</h2>
      <div class="icons-biography">
        <a href="https://github.com/leticialiveira"
          ><img src="../assets/icons/footer-git.png" alt=""
        /></a>
        <a href="https://instagram.com/leticialiveira?igshid=ZDdkNTZiNTM="
          ><img src="../assets/icons/instagram.png" alt=""
        /></a>
        <a
          href="https://www.linkedin.com/in/let%C3%ADcia-oliveira-7a31a4201?trk=contact-info"
          ><img src="../assets/icons/footer-linkedin.png" alt=""
        /></a>
      </div>
    </div>
  </div>
  <div class="about">
    <div class="about-text">
      <h1>O que eu faço</h1>
      <p>
        Cuido de toda a parte que você pode efetivamente ver em um site.
        Cuidando de todos os detalhes para que o usuário tenha uma
        <span class="span4">boa experiência</span> ao fazer um acesso, cuidando
        desde o <span class="span5">layout</span> até pequenos detalhes de
        <span class="span5">menus e rodapés.</span>
      </p>
    </div>
    <div class="panel">
      <div class="slide">
        <img src="../assets/icons/web-dev.png" alt="" />
        <h3>Desenvolvedora Front-End</h3>
        <span
          >Atualmente trabalho na Secretaria de Saúde da Bahia, na parte de
          sistemas, com o início em janeiro de 2023.</span
        >
      </div>
      <div class="slide">
        <img src="../assets/icons/clipboard-list.png" alt="" />
        <h3>UX Research</h3>
        <span
          >Para adicionar valores ao Front-end trabalho com a retirada de
          elementos do design do 'Figma'.
        </span>
      </div>
      <!-- <img src="../assets/icons/arrow.png" alt="" /> -->
    </div>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
}

.text {
  background: linear-gradient(134.01deg, #3bf686 40.75%, #4ca9ff 90.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 59px;
  line-height: 72px;
  width: 1300px;
  text-align: center;
  overflow: hidden;
}

.persona-biography {
  display: flex;
  align-items: center;
  gap: 500px;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}

.persona-img {
  position: relative;
  width: 144px;
  height: 144px;
  /* font: bold 1em 'Century Gothic'; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3a3636;
  border-radius: 50%;
}

.persona-img::before,
.persona-img::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  background: linear-gradient(134.01deg, #3bf686, #4ca9ff, #3bf686, #4ca9ff);
  background-size: 300%;
  border-radius: 50%;
  animation: AnimarBorda 8s linear alternate infinite;
}

@keyframes AnimarBorda {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 500%;
  }
}

.persona-img::after {
  filter: blur(10px);
}

.persona-img img {
  width: 124px;
}

.persona-history {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
}
.text-biography {
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #fbfbfb;
}
.text-biography h1 {
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 72px;
}
.text-biography p {
  width: 499px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
}
.text-biography p .span1 {
  color: #4ca9ff;
}
.text-biography p .span2 {
  color: #62d9ff;
}
.text-biography p .span3 {
  color: #80ffa3;
}
.link-biography {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fbfbfb;
  width: auto;
}
.link-biography h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 72px;
  width: 100%;
}
.icons-biography {
  display: flex;
  gap: 30px;
}
.icons-biography a {
  width: 26.67px;
  height: 26.67px;
  display: flex;
  align-items: center;
}
.about {
  display: flex;
  align-items: center;
  gap: 400px;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
}
.about-text {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.about-text h1 {
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 72px;
}
.about-text p {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #edcece;
  width: 458px;
}
.about-text p .span4 {
  color: #3bf686;
}
.about-text p .span5 {
  color: #4ca9ff;
}
.panel {
  display: flex;
  align-items: center;
  gap: 50px;
  flex-direction: row;
}
.slide {
  width: 262px;
  height: 190px;
  background: #323443;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.slide h3 {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 72px;
  color: #fafaf9;
}
.slide span {
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: rgba(239, 237, 232, 0.65);
  width: 225px;
}
.slide img {
  position: absolute;
  top: -25px;
  border: solid 1px #3bf686;
  background-color: #323443;
  border-radius: 50%;
  padding: 12px;
}
</style>
