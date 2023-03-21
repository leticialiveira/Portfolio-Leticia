<script setup>
defineProps({
  image: String,
  functionn: String,
  title: String,
  link: String,
  description: String,
});
</script>

<template>
  <article>
    <div class="img">
      <img :src="image" alt="" id="image" />
    </div>
    <div class="description">
      <span>{{ functionn }}</span>
      <a :href="link"><h1>{{ title }}</h1></a>
      <p>{{ description }}</p>
    </div>
  </article>

  </template>

<style scoped>

article {
    display: flex;
    gap: 50px;
    align-items: center;
}

article .img img {
  width: 451px;
  border:solid 20px #323443;
  display: flex;
  justify-content: center;
}

article .img img:hover{
  transform: scale(1.1);
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
font-size: 15px;
line-height: 32px;
color: #D5D5D5;
width: 580px;
}
</style>
