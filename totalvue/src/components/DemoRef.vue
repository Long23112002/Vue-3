<template>
    <div class="demo-ref">
        <h1>Demo ref</h1>
        <button v-on:click="handelChangeInputFile" class="avatar">Change data choose file</button>
        <input ref="fileInputAvatar" type="file" style="display: none;">
    </div>
  
</template>

<script>
export default {
    name: 'demo-ref',
    data(){
        return {
            
        }
    },
    methods:{
        handelChangeInputFile(e){
            console.log('Change input file: ', e)
            this.$refs.fileInputAvatar.click()
        }
    }
}
</script>

<style>
  .avatar{
    background-color: #f1f1f1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }

</style>