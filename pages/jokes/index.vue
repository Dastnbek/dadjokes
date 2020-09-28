<template>
    <div>
        <Joke v-for="(joke, index) in jokes" :joke="joke.joke" :id="joke.id" :key="index"  />
    </div>
</template>

<script>

import axios from 'axios';
import Joke from '../../components/Joke'


export default {
    data(){
        return{
            jokes: []
        }
    },
    components: {
        Joke
    },
    async created(){
        const config = {
            headers: {
                "Accept" : "application/json"
            }
        }

        try {     
            const res = await axios.get('https://icanhazdadjoke.com/search', config)
            this.$store.commit('addJokes', res.data.results);
            this.jokes = res.data.results;
        } catch (error) {
            console.log(error)
        }

    },
    head(){
        return{
            title: "DadJokes"
        }
    }
}
</script>