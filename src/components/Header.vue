<template lang="jade">
	header
		div.header-language(v-bind:class="lang")
			span 点击选择语言：
			a.en(@click="changeLocale('en')") English
			a.zhCHS(@click="changeLocale('zhCHS')") 简体中文
			a.zhCHT(@click="changeLocale('zhCHT')") 繁體中文
			p current language: {{lang}}
			br
			p.tip 蓝框中为多语言区域
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
	&.en .en,&.zhCHS .zhCHS,&.zhCHT .zhCHT
		color: red;
	*
		margin: 0 5px;
	.tip
		color: grey;
		font-size: 12px;
		margin-top: .5em;
</style>
