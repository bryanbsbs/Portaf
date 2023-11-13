<template>
    <div class="text-white">
        <div class="banner-section">
            <Header></Header>
            <section class="flex items-center justify-around px-20 py-24 text-white text-xl">
                <div class="w-7/12">
                    <span class="bg-gradient-to-r from-pink-500-50 to-violet-500-50 border border-gray-400 font-medium p-2">
                        Bienvenido a mi Portafolio
                    </span>
                    <h1 class="text-7xl font-semibold my-4">
                        Hola!, soy Bryan. Desarrollador Web.
                    </h1>
                    <p class="text-gray-400 text-lg mr-16">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quasi nemo voluptatem eos at. Modi fugiat placeat architecto animi dolores magnam delectus reiciendis, blanditiis neque cupiditate deserunt temporibus, incidunt harum.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quasi nemo.
                    </p>
                    <a href="" class="flex items-center font-medium mt-14">
                        Conectemos
                        <div class="p-2 ml-2 border border-gray-400 rounded-full">
                            <img src="../assets/img/arrow2.svg" class="w-2 mr-[2px] ml-[2px]" alt="">
                        </div>
                    </a>
                </div>
                <div class="w-5/12 animate-custom">
                    <img src="../assets/img/header-img.svg" alt="">
                </div>
            </section>
        </div>
        <section class="relative mb-[33.75rem]">
            <div class="absolute -mt-20 mx-20 bg-[#151515] text-center rounded-[4rem] py-10 px-60 z-10">
                <h2 class="text-5xl font-semibold mb-4">Habilidades</h2>
                <p class="text-gray-400 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quos odit earum harum quis facere in est iure, beatae quia.</p>
                <div class="pt-20 pb-10 flex items-center justify-between">
                    <div class="flex flex-col items-center">
                        <img src="../assets/img/meter1.svg" alt="">
                        <span class="font-medium text-xl mt-4">Desarrollo web</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="../assets/img/meter2.svg" alt="">
                        <span class="font-medium text-xl mt-4">Diseño UX/UI</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <img src="../assets/img/meter3.svg" alt="">
                        <span class="font-medium text-xl mt-4">Diseño de logo</span>
                    </div>
                </div>
            </div>
            <div class="absolute skills"></div>
        </section>
        
        <section class="mt-auto bg-black text-center py-16">
            <h2 class="text-5xl font-semibold mb-4">Projectos</h2>
            <p class="text-lg px-80">Lorem ipsum dolor, sit amet amet nulla id eos quae ab quod beatae aperiam deleniti inventore delectus rerum suscipit, ipsa nihil placeat quasi doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, velit. Ex quos beatae unde quis dolor tempore, deserunt magnam aperiam? Facere at repudiandae laborum distinctio non sunt recusandae enim voluptate?</p>
            <div class="flex items-center justify-center border border-gray-400 bg-white bg-opacity-10 mx-64 m-8 rounded-s-[4rem] rounded-e-[4rem] text-xl font-medium">
                <span class="flex items-center justify-center border-r border-gray-400 w-2/6 h-16">Tab 1</span>
                <span class="flex items-center justify-center w-2/6 h-16">Tab 2</span>
                <span class="flex items-center justify-center border-l border-gray-400 w-2/6 h-16">Tab 3</span>
            </div>
            <div class="">
            </div>
        </section>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
    components: {
        Header
    }
}
</script>

<style scoped>
@keyframes custom {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
}

.animate-custom {
    animation: custom 3s linear infinite;
}
.banner-section {
    background-image: url('../assets/img/banner-bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.skills {
    background-image: url("../assets/img/footer-bg.png");
    background-repeat: no-repeat;
    background-position: left;
    background-size: cover;
    width: 80%;
    height: 540px;
    opacity: 0.4;
}
</style>