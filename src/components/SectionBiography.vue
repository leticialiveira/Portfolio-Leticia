<script></script>

<template>
  <p class="text">
    Hi Im Naufaldi, a special human with some ability to love learning and
    working on teamwork.
  </p>

  <div class="persona-biography">
    <div class="persona-history">
      <img src="../assets/image/persona.png" alt="" />
      <div class="text-biography">
        <h1>Biography</h1>
        <p>
          Getting Buff +1 for learning, Buff +2 for documentation and more buff
          on managing team. Exicited on <span class="span1">React</span>,
          <span class="span2">UX Research</span> and
          <span class="span3">Agile</span>.
        </p>
      </div>
    </div>
    <div class="link-biography">
      <h2>Lets connect</h2>
      <div class="icons-biography">
        <img src="../assets/icons/instagram.png" alt="" />
        <img src="../assets/icons/twiter.png" alt="" />
        <img src="../assets/icons/facebook.png" alt="" />
      </div>
    </div>
  </div>
  <div class="about">
    <div class="about-text">
      <h1>What I do</h1>
      <p>
        Build and maintain websites,
        <span class="span4">frontend dev</span> also have a mentorship called
        <span class="span5">MOFON</span>. My motto is Beauty and function in
        equal measure as priority.
      </p>
    </div>
    <div class="panel">
      <div class="slide">
        <img src="../assets/icons/web-dev.png" alt="">
        <h3>Web Development</h3>
        <span
          >You will receive a customized plan for your fitness journey, and lots
          of support.</span
        >
      </div>
      <div class="slide">
          <img src="../assets/icons/ux-research.png" alt="">
        <h3>UX Research</h3>
        <span
          >You will receive a customized plan for your fitness journey, and lots
          of support.</span
        >
      </div>
      <img src="../assets/icons/arrow.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.text {
  background: linear-gradient(134.01deg, #3bf686 40.75%, #4ca9ff 90.52%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* text-fill-color: transparent; */
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 72px;
  width: 1000px;
  margin-left: 300px;
}

.persona-biography {
  display: flex;
  align-items: center;
  gap: 500px;
  flex-direction: row;
}

.persona-history img {
  width: 124px;
  background-color: #3a3636;
  border-radius: 50%;
  border: solid 1px #3bf686;
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
  font-family: 'Inter', sans-serif;
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
  align-items: start;
  color: #fbfbfb;
}

.link-biography h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 72px;
}

.icons-biography {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
}

.icons-biography img {
  width: 26.67px;
  height: 26.67px;
}

.about {
  display: flex;
  align-items: center;
  gap: 400px;  
  flex-direction: row;
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
  font-family: 'Inter', sans-serif;
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
  flex-direction: column ;
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
  font-family: 'Inter', sans-serif;
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
