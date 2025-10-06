<template>
  <ul class="languages-switch board_main_btn" :style="'direction: ' + locale.code === 'ar' ? 'rtl' : 'ltr'" >
    <NuxtLink 
      v-for="locale in availableLocales" 
      :key="locale.code" 
      :to="switchLocalePath(locale.code)"
      @click="globalStore.setLang(locale.code)"
    >
      <i class="pi pi-language"></i>
    </NuxtLink>
  </ul>
</template>

<script setup>
  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()


  // define globalStore 
  const globalStore = useGlobalStore()


  const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value)
  })
</script>

<style lang="scss" scoped>
  .languages-switch {
    position: relative;
    width: fit-content;

    a {
      @include displayFlex($gap: 5px, $direction: row, $justify: flex-start);
      padding: 3px 5px;
      // height: 30px;
      overflow: hidden;
      cursor: pointer;
      i{
        font-size: 25px;
      }

      span {
        font-size: clamp(14px, 2.5vw, 20px);
      }
      &:hover{
        color: $mainColor;
      }
    }
  }
</style>