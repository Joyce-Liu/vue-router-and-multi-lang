<template lang="jade">
  #app
    //-header-
    HeadTop(@changeAppLocale="changeAppLocale")
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
      lang: '',
      routeName: '',
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
      this.routeName = this.$route.name;
    },
		changeAppLocale(locale){
      this.changeLanguage(locale);
      this.$router.push({name: this.routeName, params: {lang: this.lang}})
		}
	},
	mounted(){
    this.changeLanguage(this.$route.params.lang?this.$route.params.lang:'en');
	}
}
</script>

<style lang="scss">
  @import './style/common.sass';
  
</style>
