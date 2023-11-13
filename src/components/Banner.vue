<template>
    <div>
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
</template>

<script>
export default {

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
</style>