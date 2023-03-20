<script setup>
defineProps({
  title: String,
  description: String,
  icons: Object,
  star: String,
  numberStar: String,
});
</script>

<template>
  
  <article>
    <header>
        <div class="description">

            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
        </div>
      <footer>
        <div class="icons">
          <img v-for="item in icons" :src="item" alt="" />
        </div>
        <div class="number-stars">
          <img class="star" :src="star" alt="" />
          <p>{{ numberStar }}</p>
        </div>
      </footer>
    </header>
  </article>
</template>

<style scoped>



article {
  width: 556px;
  height: 300px;
  background: linear-gradient(0deg, #323443, #323443), #eff6ff;
  border-radius: 20px;
  color: #ffffff;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  padding: 30px 40px;
  
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
