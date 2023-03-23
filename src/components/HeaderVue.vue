<script setup>
</script>

<template>
    <div class="header">
        <h1>Letícia Oliveira</h1>
        <div class="header-a">
            <router-link to ="/">Início</router-link>
            <router-link to ="/mentorship">Orientação</router-link>
            <router-link to ="/projects">Portfólio</router-link>
            <router-link to ="/code">Framework</router-link>
        </div>
    </div>
    <div class="space-line"></div>
</template>

<style scoped>
.header{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 1550px;
} 
h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: var(--color-header-h1);
}
.header-a{
    display: flex;
    gap: 50px;
}
.header-a a{
    text-decoration: none;
    color: var(--color-header-a);
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 80px;
}

.header-a a:hover {
    color:#4D4D4D ;
}
.space-line{
    width: 1550px;
    height: 0;
    margin-top: 20px;
    border: 1px solid #4D4D4D;
}
</style>