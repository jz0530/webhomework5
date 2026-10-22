<template>
  <div>
     <!-- <h1>{{message}}</h1>
     <element-view>
     </element-view> -->
     <!-- <emp-view></emp-view> -->
      <router-view></router-view>
  </div>
</template>

<script>
    // import EmpView from './views/element/tilas/EmpView.vue'
    // import ElementView from './views/element/ElementView.vue'

    export default{
        // components: { EmpView },
        data(){ 
            return{
                message:"hello vue"
            }
        },
        methods:{
            
        }
    }
</script>

<style>
    h1{
      color:red;
    }
</style>