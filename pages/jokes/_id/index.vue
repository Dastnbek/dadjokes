<template>
    <h2>
        {{ joke() }}
    </h2>
</template>

<script>
export default {
    methods: {
        joke(){
            for(let i=0; i < this.$store.state.jokes.length; i++){
                if(this.$store.state.jokes[i].id === this.$route.params.id){
                    return this.$store.state.jokes[i].joke
                }
            }
        }
    }
}
</script>