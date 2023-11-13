<template>
    <div id="header" class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between text-white px-20 py-4 transition-colors duration-300">
        <div class="text-4xl font-semibold">
            LOGO
        </div>
        <div class="flex items-center justify-between w-6/12">
            <ul class="flex items-center justify-between">
                <li class="mr-12">Home</li>
                <li class="mr-12">Habilidades</li>
                <li class="mr-6">Projects</li>
            </ul>
            <div class="flex items-center justify-between">
                <a href="" class="mr-2 p-3 w-10 border border-gray-400 bg-white bg-opacity-10 rounded-full">
                    <img src="../assets/img/nav-icon1.svg" class="w-4" alt="">
                </a>
                <a href="" class="mr-2 p-3 w-10 border border-gray-400 bg-white bg-opacity-10 rounded-full">
                    <img src="../assets/img/nav-icon2.svg" class="w-4" alt="">
                </a>
                <a href="" class="mr-2 p-3 w-10 border border-gray-400 bg-white bg-opacity-10 rounded-full">
                    <img src="../assets/img/nav-icon3.svg" class="w-4" alt="">
                </a>
            </div>
            <button class="px-8 py-4 border border-gray-400">
                Conectemos
            </button>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const header = document.getElementById("header");

        window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("bg-black");
        } else {
            header.classList.remove("bg-black");
        }
        });
    },
    
}
</script>

<style scoped>
</style>