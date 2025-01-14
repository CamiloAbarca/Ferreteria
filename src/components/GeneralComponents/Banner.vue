<template>
    <div class="banner">
        <div class="logo">
            <img src="https://static.vecteezy.com/system/resources/previews/007/819/815/non_2x/letter-d-p-with-bolt-screw-hammer-logo-icon-vector.jpg"
                alt="">
        </div>
        <div class="titulo">
            Ferretería El Tornillo Perdido
        </div>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent',
}
</script>

<style scoped>
.banner {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: auto;
    height: auto;
    background-color: #f0f0f0;
    border: 2px solid #007BFF;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
}

.titulo {
    font-size: 3vw;
    text-align: center;
}

img {
    width: 20vw;
    height: auto;
    max-width: 150px;
    object-fit: contain;
    border-radius: 100px;
}
</style>