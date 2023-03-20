<script></script>

<template>
  <div class="title">
    <h1>Project that i has been <span>done</span></h1>
    <img src="../assets/icons/arrow-project-view.png" alt="" />
  </div>
  <article>
    <div class="imgs">
      <img src="../assets/image/rectangle.png" alt="" id="shadow" />
      <img src="../assets/image/image-1-project.png" alt="" id="image" />
    </div>
    <div class="description">
      <span>Web Development</span>
      <a href=""><h1>Bolder Landingpage</h1></a>
      <p>
        Serrow restructured and designed core pages, creating interactive
        elements that put users in control and allowed them to discover the
        information needed to make a decision.
      </p>
    </div>
  </article>

  <article>
    <section class="imgs">
      <img src="../assets/image/rectangle.png" alt="" id="shadow" />
      <img src="../assets/image/image-2.png" alt="" id="image" />
    </section>
    <section class="description">
      <span>Web Development</span>
      <a href=""><h1>Kerja Mantul Education Management</h1></a>
      <p>
        Serrow restructured and designed core pages, creating interactive
        elements that put users in control and allowed them to discover the
        information needed to make a decision.
      </p>
    </section>
  </article>
</template>

<style scoped>
.title {
  display: flex;
}
.title h1 {
  width: 458px;
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 72px;
  color: #ffffff;
}

.title h1 span {
  color: #3bf686;
}

.title img {
  width: 120.97px;
}

article {
    display: flex;
    gap: 50px;
    align-items: center;
}

article .imgs img:nth-last-of-type(0) {
  width: 556px;
    position: relative;
}

article .imgs img:nth-last-of-type(1) {
  width: 451px;
    position: absolute;
    left: 55px;
    bottom: 5px;
}

article .description{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

article .description span {
    font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 24px;    
color: #DEDEDE;
}

article .description a {
    font-family: 'Sora';
font-style: normal;
text-decoration: none;
font-weight: 700;
font-size: 35px;
color: #FFFFFF;
width: 518px;
}

article .description p {
    font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 32px;
color: #D5D5D5;
width: 556px;
}
</style>
