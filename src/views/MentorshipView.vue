<script setup>
import SectionUp from "../components/SectionUpMentorship.vue";
import SectionUnder from "../components/SectionUnderMentorship.vue";
</script>

<template>
  <div class="main">
    <div class="section-1">
      <SectionUp />
    </div>
    <div class="section-2">
      <SectionUnder />
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}

.section-1 {
  display: flex;
  flex-direction: row;
  margin-top: 70px;
  justify-content: space-between;
  height: auto;
}

.section-2 {
  display: flex;
  flex-direction: row;
  margin-top: 150px;
  gap: 90px;
  justify-content: space-between;
  height: auto;
}
</style>
