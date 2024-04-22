<template>
    <!-- CONTENT -->
    <div class="w-[80%] bg-neutral-900 overflow-scroll">
        <div class="flex justify-between px-10 py-7 px-4sticky top-0">
            <div class="space-x-2">
                <button class="bg-neutral-700 p-[0.20rem] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                            clip-rule="evenodd" />
                    </svg>

                </button>
                <button class="bg-neutral-700 p-[0.20rem] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd"
                            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <!-- ACCOUNT BUTTONS -->
            <div class="flex gap-x-4">
                <button class="button-bordered">
                    Mejora tu cuenta
                </button>
                <button class="button-user">
                    <div class="button-user-avatar">
                        <img class="w-full h-full object-cover" src="../public/images/thumb.jpg" alt="">
                    </div>
                    <div>Denis</div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                            <path fill-rule="evenodd"
                                d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                                clip-rule="evenodd" />
                        </svg>

                    </div>
                </button>

            </div>
            <!-- END ACCOUNT BUTTONS -->
        </div>
        <!-- TILES SECTION -->
        <div class="px-10 pt-16 pb-28">
            <div class="flex justify-between">
                <h2>
                    <a href="" class="text-2xl font-bold text-white">Escuchados recientemente</a>
                </h2>
                <button class="font-bold text-gray-400 text-sm hover:text-white hover:underline">Mostrar Todos</button>
            </div>
            <div class="mt-8 grid grid-rows-1 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-5 gap-y-5">
                <Tile title="Denis Rodriguez" sub-title="Artista Boliviano" image="../public/images/thumb.jpg" />
                <Tile title="Javier Rodriguez" sub-title="Artista Boliviano" image="../public/images/01.jpg" />
                <Tile title="Carolina Rodriguez" sub-title="Artista Boliviano" image="../public/images/02.jpg" />
                <Tile title="Fabiano Rodriguez" sub-title="Artista Boliviano" image="../public/images/03.jpg" />
                <Tile title="Margoth Mendoza de Rodriguez" sub-title="Artista Boliviano" image="../public/images/04.jpg" />
                <Tile title="Isabella Licona Rodriguez" sub-title="Artista Boliviano" image="../public/images/05.jpg"
                    shape="square" />
            </div>


        </div>
        <!-- END TILES SECTION -->


    </div>
    <!-- END CONTENT -->
</template>
<script setup>
import Tile from '../ArtistTile.vue'
import Dropdown from '../Dropdown.vue'

</script>