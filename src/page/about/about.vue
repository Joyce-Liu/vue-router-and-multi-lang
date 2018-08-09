<template lang="jade">
  div.about 
    p About Page
    h3.content {{ $t("message.about") }}
    router-link(:to="{name:'home',params: {lang: this.lang}}") link to Home
</template>

<script type="es6">
  export default {
    name:'about',
    props: ['lang']
  }
</script>

<!-- Add "scoped" attribute ato limit CSS to this component only -->
<style lang="sass" type="text/sass">
</style>
