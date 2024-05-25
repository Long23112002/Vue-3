<template>
    <footer>
        <h1>{{text}}</h1>
        <p>{{titleFooter}}</p>
    </footer>
</template>

<script>
export default {
   name: 'comp-footer',
   props:{
        titleFooter: {
            type: String,
            default: "Default Footer"
        } 
      
   },
    data(){
            return {
                  text: 'Footer'
            }
    }
}
</script>

<style>

</style>