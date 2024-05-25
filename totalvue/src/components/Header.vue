<template>
    <header>
        <p>{{ titleHeader }}</p>
        <h1>{{ text }}
            <br>
            <button v-on:click="changeTitleHeader">
                Change title in HeaderComponent
            </button>

        </h1>
    </header>
</template>

<script>
export default {
    name: 'comp-header',
    props: {
        titleHeader: String
    },
    data() {
        return {
            text: 'Header'
        }
    },
    methods: {
        changeTitleHeader() {
            console.log('before change title: ', this.titleHeader);
            let data = {
                title: 'test send props from child to parent'
            }
            this.$emit('changeTitleEvent' , data)
            console.log();('Change title with component Header')
            console.log('after change title: ', this.titleHeader);
        }
    }
}
</script>

<style></style>