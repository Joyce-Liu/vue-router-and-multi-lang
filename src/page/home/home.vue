<template lang="jade">
  div.homepage
    p Home Page
    h3 {{ $t("message.hello") }}
    p {{welcomeMessage}}
    //- router-link(:to="{ name: 'about'}") link to About
    a(@click="goto") link to About
</template>

<script type="es6">
export default {
  name: 'home',
  props: ['lang'],
  data(){
    return{
      username: 'Joyce',
    }
  },
  computed:{
    welcomeMessage(){
      return this.username + ', '+ this.$t("message.welcome");
    } 
  },
  methods:{
    goto(){
      this.$router.push({name:'about',params: {lang: this.lang}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='sass'>
</style>