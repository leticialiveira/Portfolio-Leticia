<script></script>

<template>
  <div class="left">
    <h1>Benefícios da mentoria</h1>
    <img src="../assets/image/equation-meme.png" alt="" />
  </div>
  <div class="right">
    <article>
      <img src="../assets/image/laptop-wave.png" alt="" />
      <header>
        <h2>Mentorias 1 : 1</h2>
      </header>
      <p>
        Chamada de vídeo 1: 1 com mentor para discutir, tirar dúvidas e
        consultar sobre mentoria de frontend ou outros assuntos relecionados a
        desenvolvimento.
      </p>
    </article>
    <article>
      <img src="../assets/image/chalkboard-lightbulb.png" alt="" />
      <header>
        <h2>Direcionamento</h2>
      </header>
      <p>
        Chamada de vídeo 1: 1 com mentores para discutir, tirar dúvidas e
        consultar sobre mentoria de frontend ou outros assuntos
      </p>
    </article>
    <article>
      <img src="../assets/image/laptop-reading.png" alt="" />
      <header>
        <h2>Programa de Estudos</h2>
      </header>
      <p>
        Programa prático e fundamental composto por uma série de desafios para testar o aprendizado e conhecer coisas novas.
      </p>
    </article>
  </div>
</template>

<style scoped>
.left {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  gap: 70px;
}

.left h1 {
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
  width: 360px;
  text-align: center;
}

.left img{
  width: 400px;
  height: 400px;
}
.right {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.right article {
  width: 655px;
  height: 180px;
  background: #000;
  border-radius: 12px;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;
  padding: 90px 90px;
  position: relative;
}

article img {
  position: absolute;
  left: -100px;
  background-color: #ff9a9e;
  border-radius: 50%;
  padding: 20px;
  border: solid 1px #FFC3E3;
  width: 148px;
  height: 148px;
}
article header h2 {
  width: 310px;
  color: #ffffff;
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 72px;
}

article p {
  width: 457px;
  color: #c9c9c9;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
}
</style>
