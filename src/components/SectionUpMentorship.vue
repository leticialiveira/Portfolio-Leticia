<script></script>

<template>
  <div class="description">
    <h1>Mentorship</h1>
    <p>
      Menghabiskan banyak waktu untuk belajar
      <span>sendiri</span> dan tetap merasa <span>stuck</span>?
    </p>
    <div class="description-space">
      <div class="space-line"></div>
      <span
        >Mentorship Frontend ini menjadi jawaban atas permasalahanmu. Karena
        disini, kamu bakal merasakan mentoring yang lebih personal</span
      >
    </div>
  </div>
  <div class="panel">
    <div class="panel-article">
      <article>
        <header>
          <img src="../assets/icons/emoji-1-mentorship.png" alt="" />
          <h3>Minggu Pertama</h3>
        </header>
        <p>Membahas dasar dari website seperti tag atribut dan element.</p>
      </article>
      <article>
        <header>
          <img src="../assets/icons/emoji-2-mentorship.png" alt="" />
          <h3>Minggu Pertama</h3>
        </header>
        <p>Membahas dasar dari website seperti tag atribut dan element.</p>
      </article>
      <article>
        <header>
          <img src="../assets/icons/emoji-3-mentorship.png" alt="" />
          <h3>Minggu Pertama</h3>
        </header>
        <p>Membahas dasar dari website seperti tag atribut dan element.</p>
      </article>
    </div>

    <a href="#bacaSelengkapnya">
      <img src="../assets/icons/see-more.png" alt="" />
      Baca selengkapnya
    </a>
  </div>
</template>

<style scoped>
.description {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.description h1 {
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
}

.description p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  width: 458px;
  color: #eff4f1;
}

.description p span {
  color: #3bf686;
  text-decoration: underline;
}

.description-space {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.description-space .space-line {
  border: solid 5px #3bf686;
  height: 77px;
}
.description .description-space span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #eff4f1;
  width: 453px;
}

.panel {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.panel .panel-article {
  background: #323443;
  border-radius: 12px;
  width: 652px;
  height: 231px;
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0px 70px;
}

.panel-article article {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

header {
  display: flex;
  gap: 10px;
}

article header img {
  width: 36px;
  height: 36px;
}
article header h3 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  width: 131.06px;
  color: #ffffff;
}

article p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #c9c9c9;
  width: 173px;
}

.panel a {
  padding: 10px;
  width: 262px;
  background: #323443;
  border-radius: 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  color: #c9c9c9;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
}
</style>
