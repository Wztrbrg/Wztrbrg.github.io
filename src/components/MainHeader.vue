<template>
    <header>
        <nav>
            <a href="#">Vendre</a>
        </nav>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #f6f6f6;
}

header nav{
    padding: 8px 0;
    margin-left: 16px;
}

header nav a {
    font-family: 'Caprasimo', cursive;
    text-decoration: none;
    font-size: 36px;
    font-weight: 800;
    color: #0f0f0f;
}

header nav a:hover {
    cursor: pointer;
    color: #6e3bdb;
    transition: .3s;
}
</style>