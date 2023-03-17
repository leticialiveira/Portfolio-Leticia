<script></script>

<template>
  <h1 class="title">Featured Project</h1>
  <div class="projects">
    <div>
      <div class="projects-img">
        <img class="shadow" src="../assets/image/rectangle.png" alt="" />
        <img class="image" src="../assets/image/image-1-project.png" alt="" />
        <img class="icon1" src="../assets/icons/icon-1-project.png" alt="" />
        <img class="icon2" src="../assets/icons/icon-2-project.png" alt="" />
        <img class="new" src="../assets/icons/new.png" alt="" />
        <a class="arrow" href="#project"><img src="../assets/icons/arrow-project.png" alt="" /></a>
      </div>
      <div class="projects-text">
        <span>Web Development</span>
        <a href="#project"><h1>Bolder Landingpage</h1></a>
        <p>
          Serrow restructured and designed core pages, creating interactive
          elements that put users in control and allowed them to discover the
          information needed to make a decision.
        </p>
      </div>
    </div>
    <div>
      <div class="projects-img">
        <img class="shadow" src="../assets/image/rectangle.png" alt="" />
        <img class="image" src="../assets/image/image-2.png" alt="" />
        <img class="icon1" src="../assets/icons/icon-1-project.png" alt="" />
        <img class="icon2" src="../assets/icons/icon-2-project.png" alt="" />
        <img class="icon3" src="../assets/icons/icon-3-project.png" alt="" />
        <a href="#project" class="arrow"><img src="../assets/icons/arrow-project.png" alt=""></a>
      </div>
      <div class="projects-text">
        <span>Web Development</span>
        <a href="#project"><h1>Kerja Mantul Education Management</h1></a>
        <p>
          Serrow restructured and designed core pages, creating interactive
          elements that put users in control and allowed them to discover the
          information needed to make a decision.
        </p>
      </div>
    </div>
  </div>
  <div class="link-see-more">
    <a href="#SeeMore">
      <img src="../assets/icons/see-more.png" alt="" />
      See More
    </a>
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
}

.projects-img .new {
  width: 24.96px;
  height: 24.84px;
  position: absolute;
  left: 55px;
  top: 25px;
}
.projects-img .icon1 {
  position: absolute;
  left: 55px;
  top: 80px;
  background: #fbfbfb;
  width: 16px;
  height: 16px;
  border-radius: 4px;
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

.projects-img .arrow{
  position: absolute;
  right: 15px;
  top: 10px;
  background:  #3F4152;
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
