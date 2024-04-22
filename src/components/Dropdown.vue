<template>
    <div class="z-10 w-64 flex flex-col p-1 bg-dark-light text-sm rounded shadow-2xl">
        <button class="relative group flex justify-between items-center p-3 text-left rounded hover:bg-dark-lighter"
            v-for="item in items">
            <div>{{ item.title }}</div>
            <div>
                <ArrowTopRightOnSquare v-if="item.icon == 'ArrowTopRightOnSquare'"></ArrowTopRightOnSquare>
                <ChevronRight v-if="item.icon == 'ChevronRight'"></ChevronRight>
            </div>
            <div class="absolute left-[100%] top-0 opacity-0 group-hover:opacity-100 transition-all">
                <Dropdown v-if="item.items != null" :items="item.items"></Dropdown>
            </div>
        </button>
    </div>
</template>
<script setup>
import ArrowTopRightOnSquare from './icons/ArrowTopRightOnSquare.vue';
import ChevronRight from './icons/ChevronRight.vue';
defineProps({
    items: Array
})
</script>