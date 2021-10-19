<template>
  <div class="about">
    <h1>This is a character page</h1>

    <p>{{ this.response.character }}</p>

    <img :src="response.image" :alt="`Portrait of ${response.character}`">

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

        async fetchOne() {

        // https://fedeperin-harry-potter-api-en.herokuapp.com/characters/1

            this.response = await fetch(`https://fedeperin-harry-potter-api-en.herokuapp.com/characters/${this.$route.params.id}/`).then(response => response.json());

            await console.log(this.response);

        } // end of fetchOne
    }, // end of methods
    mounted: function() {
        this.fetchOne();
    }
});

</script>