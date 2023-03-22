<script setup></script>

<template>
  <div class="space-line"></div>
  <div class="elements">
    <router-link to="/docs"> Documentos</router-link>
    <a href="#politrabalho">Politrabalho</a>
    <a href="https://www.figma.com/file/4NSgiUWDLcBeMXv2MFY7kW/Leticia?node-id=0-1&t=C02mJ76E9Fv6NOq3-0">Modelo inicial</a>
    <a href="#estatisticas">Estatisticas</a>
  </div>
  <div class="socialMedia">
      <span>Redes Sociais</span>
        <div class="socialMedia-links">
            <a href="https://github.com/leticialiveira"><img src="../assets/icons/footer-git.png" alt=""></a>
            <a href="#linkedin"><img src="../assets/icons/footer-linkedin.png" alt=""></a>
            <a href="https://twitter.com/leticialiveiraa?t=GXJVygXtHuMUDEddOAtzpg&s=09"><img src="../assets/icons/footer-twiter.png" alt=""></a>
        </div>
  </div>
</template>

<style scoped>
.space-line {
  border: solid 1px #4d4d4d;
  width: 1550px;
}

.elements {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

.elements a {
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #f4f4f4;
}

span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #f4f4f4;
}

.socialMedia{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    height: 110px;
}

.socialMedia .socialMedia-links{
    gap: 30px;
    display: flex;
}
</style>
