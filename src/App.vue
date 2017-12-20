<template lang="jade">
  #app
    //-header-
    HeadTop(@changeAppLocale="changeAppLocale" v-bind:lang="lang")
    //-main-
    div.main
      router-view(v-bind:lang="lang" )
    //-footer-
    FooterBottom
</template>

<script type="es6">
import HeadTop from "./components/Header"
import FooterBottom from "./components/Footer"

export default {
  name: 'app',
  data(){
    return{
      lang: ''
    }
  },
  components:{
    HeadTop,
    FooterBottom,
	},
  methods:{
    changeLanguage(lang){
      this.$i18n.locale=lang;
      this.lang=lang;
    },
		changeAppLocale(locale){
      this.changeLanguage(locale);
      this.$router.push({name: this.$route.name, params: {lang: this.lang}})
		}
	},
	mounted(){
    this.changeLanguage(this.$route.params.lang);
	}
}
</script>

<style lang="scss">
  @import './style/common.sass';
  
</style>
