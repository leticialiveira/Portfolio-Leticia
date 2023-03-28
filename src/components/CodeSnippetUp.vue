<script setup>
defineProps({
    code: String
  })
  defineEmits(['update:code'])
</script>

<template>
    <h1>Fragmentos de códigos</h1>
    <span>Pesquise por fragmentos:</span>
    <div class="input-img">
      <input
      type="search"
      id="code"
      @input="$emit('update:code', $event.target.value)" :value="code"
      placeholder="Procure por alguma habilidade específica"
      />
      <img src="../assets/icons/pesquisa-code.png" alt="" />
    </div>
</template>

<style scoped>
h1 {
  font-family: "Sora";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
}

span {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
}

.input-img{
  position: relative;
  width: 100%;
}

input {
  background: #3f4152;
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 100%;
  color: #DEDEDE;
  display: block;
}

img {
  position: absolute;
  width: 27.75px;
  right: 15px;
  top: 15px;
}
</style>