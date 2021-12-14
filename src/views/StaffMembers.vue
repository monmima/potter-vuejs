<template>
    <div class="about">
        <h1>This is the staff members (plural) page</h1>
    </div>

    <div class="grid">
        
        <figure v-for="ch in response" v-bind:key="ch.character">
            <div v-if="ch.image.length > 0">
                <div>
                    <img v-bind:src="ch.image" v-bind:alt="`Portrait of ${ ch.name }`">
                </div>

                {{ ch.name }}
            </div>
        </figure>
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

            this.response = await fetch(`https://hp-api.herokuapp.com/api/characters/staff`).then(response => response.json());

            await console.log(this.response);

        } // end of fetchOne
    }, // end of methods
    mounted: function() {
        this.fetchAllCh();
    }
});

</script>

<style lang="scss" scoped>
    figure {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    img {
        max-height: 250px;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>