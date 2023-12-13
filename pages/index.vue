<script setup lang="ts">
const {x, y} = useMouse();
const color = useColorMode();

function toggleDark() {
    color.value = color.value === 'dark' ? 'light' : 'dark';
}

</script>

<template>
    <div class="text-red">
        <span>Hello World {{ x }}, {{ y }}</span>

        <br>

        <button @click="toggleDark" v-text="color.value" />
    </div>
</template>