<template lang="jade">
  div.homepage
    p Home Page
    h3 {{ $t("message.hello") }}
    //- router-link(:to="{ name: 'about'}") link to About
    a(@click="goto") link to About
    p language: {{lang}}
</template>

<script type="es6">
export default {
  name: 'home',
  props: ['lang'],
  methods:{
    goto(){
      this.$router.push({name:'about',params: {lang: this.lang}})
    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
</style>