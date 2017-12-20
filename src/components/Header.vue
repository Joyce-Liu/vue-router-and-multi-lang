<template lang="jade">
	header
		div.header-language
			a(@click="changeLocale('en')") English
			a(@click="changeLocale('zhCHS')") 简体中文
			a(@click="changeLocale('zhCHT')") 繁體中文
			p current language: {{lang}}
			br
			hr
			br
</template>

<script type="es6">
export default {
	props:['lang'],
  methods:{
		changeLocale(locale){
			this.$emit('changeAppLocale',locale);
		}
  }
}
</script>

<style lang='sass' scoped>
.header-language
	*
		margin: 0 5px;
</style>
