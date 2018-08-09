<template lang="jade">
  div.homepage
    p Home Page
    div.content
      h3 {{ $t("message.hello") }}
      input(v-model="username" v-bind:placeholder="this.$t('message.placeholder')")
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
      username: '',
    }
  },
  computed:{
    welcomeMessage(){
      var username = this.username? this.username : this.$t("message.username");
      return username + ', '+ this.$t("message.welcome");
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
input
  border: solid 1px grey;
  width: 200px;
  height: 2em;
  padding-left: 5px;
  font-size: 13px;
</style>