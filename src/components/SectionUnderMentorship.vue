<script></script>

<template>
  <div class="left">
    <h1>Keuntungan Mentorship</h1>
    <img src="../assets/image/biting.png" alt="" />
  </div>
  <div class="right">
    <article>
        <img src="../assets/icons/emoji-4-mentorship.png" alt="">
      <header>
        <h2>Mentorship 1 : 1</h2>
      </header>
      <p>
        Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi
        seputar mentorship frontend atau hal lainnya
      </p>
    </article>
    <article>
        <img src="../assets/icons/emoji-5-mentorship.png" alt="">
      <header>
        <h2>Terarah</h2>
      </header>
      <p>
        Video Call 1 : 1 dengan mentor untuk berdiskusi, bertanya dan konsultasi
        seputar mentorship frontend atau hal lainnya
      </p>
    </article>
    <article>
        <img src="../assets/icons/emoji-6-mentorship.png" alt="">
      <header>
        <h2>Silabus</h2>
      </header>
      <p>
        Silabus praktis, fundamental yang bisa diimplementasikan berdasarkan
        studi kasus
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
}

.left h1 {
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
  width: 360px;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.right article {
    width: 655px;
    height: 180px;
    background: #323443;
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
    left: -50px;
    background-color: #323443;
    border-radius: 50% ;
    padding: 20px;
    border: solid 1px #3BF686;
}
article header h2 {
  width: 233px;
  color: #ffffff;
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 72px;
}

article p {
  width: 457px;
  color: #C9C9C9;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
}


</style>
