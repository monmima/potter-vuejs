<template>
  <div class="about">
    <h1>This is the characters (plural) page</h1>

    <div class="grid">
        <figure v-for="ch in response" v-bind:key="ch.character">
            <div>
                <img v-bind:src="ch.image" v-bind:alt="`Portrait of ${ ch.character }`">
            </div>
            <a :href="`/character/${ch.id}`">{{ ch.character }}</a>
        </figure>
    </div>

  </div>
</template>

<script>

export default ({
    data() {
        return {
            response: {},
            id: 0
        }
    },
    methods: {

        async fetchAllCh() {

        // https://fedeperin-harry-potter-api-en.herokuapp.com/characters/1

            this.response = await fetch(`https://fedeperin-harry-potter-api-en.herokuapp.com/characters/`).then(response => response.json());

            await console.log(this.response);

        } // end of fetchOne
    }, // end of methods
    mounted: function() {
        this.fetchAllCh();
    }
});

</script>

<style lang="scss">
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>