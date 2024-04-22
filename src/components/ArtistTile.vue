<template>
    <div @click="$event => showMenu = false" @contextmenu.prevent="$event => showMenu = true"
        class="relative group h-[17rem] flex flex-col bg-neutral-800 rounded cursor-pointer hover:bg-neutral-600">
        <div class="relative">
            <div v-bind:class="{
                'rounded': shape == 'square',
                'rounded-full': shape != 'square',
            }" class="w-40 h-40 bg-red-100 overflow-hidden mx-auto mt-4 shadow-black">
                <img class="w-full h-full object-cover" v-bind:src="image" alt="">
                <button
                    class="absolute w-16 h-16 right-5 bottom-2 translate-y-14 opacity-0 text-green-secondary group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14">
                        <path fill-rule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                            clip-rule="evenodd" />
                    </svg>

                </button>
            </div>
        </div>
        <div class="mt-5 mx-5">
            <h3 class="font-bold">{{ title }}</h3>
            <p class="text-sm text-gray-400">{{ subTitle }}</p>
        </div>

        <Dropdown v-if="showMenu" :style="`left:${x}px; top:${y}px `" :items="[
            {
                title: 'Seguir',
                icon: null,
                items: null
            },
            {
                title: 'Ir a radio de artista',
                icon: null,
                items: null
            },
            {
                title: 'Denunciar',
                icon: 'ArrowTopRightOnSquare',
                items: null
            },
            {
                title: 'Compartir',
                icon: 'ChevronRight',
                items: [
                    {
                        title: 'Copiar URI de Spotify',
                        icon: null,
                        items: null
                    },
                    {
                        title: 'Insertar Artista',
                        icon: null,
                        items: null
                    },
                ]
            },
            {
                title: 'Abrir en la aplicacion',
                icon: null,
                items: null
            },
        ]">
        </Dropdown>

    </div>
</template>
<script setup>
import Dropdown from './Dropdown.vue';
import { ref } from 'vue'
defineProps({
    title: String,
    subTitle: String,
    image: String,
    shape: String,
})


const x = 12;
const y = 100;

const showMenu = ref(false)
</script>