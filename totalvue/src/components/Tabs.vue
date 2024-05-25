<template>
   <div class="comp-tab">
         <div class="tab-title">
              <span>{{title}}</span>
         </div>
         <div class="tab-content">
              <slot></slot>
         </div>
   </div>
</template>

<script>
export default {
  name: 'TabsComponent',
  props:{
        title:{
            type: String,
            default: 'Title'
        }
    },
    data() {
        return {
        
        }
    }
}
</script>

<style>

</style>