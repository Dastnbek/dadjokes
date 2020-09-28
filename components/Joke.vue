<template>
    <NuxtLink :to="'jokes/' + id" >
        <div class="joke">
            {{ joke }}
        </div>   
    </NuxtLink> 
</template>

<script>
    export default {
        name: "Joke",
        props: ['joke', 'id']
    }
</script>

<style scoped>
    .joke{
        padding: 1rem;
        border: 1px dotted #ccc;
        margin: 1rem 0;
    }
</style>
