<script setup>
</script>

<template>
    <div class="header">

        
        <h1>Naufaldi</h1>
        <div class="header-a">
            <a href="#home">Home</a>
            <a href="#MentorShip">Mentorship</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#snippet">Snippet</a>
            <a href="#blog">Blog</a>
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
    width: 80vw;
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
.space-line{
    width: 1550px;
    height: 0;
    margin-top: 20px;
    border: 1px solid #4D4D4D;
}
</style>