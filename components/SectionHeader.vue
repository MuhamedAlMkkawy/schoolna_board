<template>
  <div :class="['schoolna_header' , {'centered' : props.headerPosition == 'center'}]">
    <div class="schoolna_header_badge" :data-aos="props.headerAnimation" v-if="props.badgeText">
      {{ props.badgeText }}
    </div>
    <h4 :data-aos="props.headerAnimation" v-if="props.title" data-aos-delay="300">{{props.title}}</h4>
    <div class="text" :data-aos="props.headerAnimation" v-if="props.text" data-aos-delay="500">
      {{props.text}}
    </div>
  </div>
</template>

<script setup>
  // define props
  const props = defineProps({
    headerPosition: {
      type: String,
      default : 'start'
    },
    headerAnimation:{
      type: String,
      default : 'fade-up'
    },
    badgeText: {
      type: String,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    }
  })
</script>

<style lang="scss">
  .schoolna_header_badge{
    font-size: 14px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 50px;
    width: fit-content;
    background-color: rgba($mainColorRgb, 0.1);
    color: $mainColor;
    margin-bottom: 16px;
    // margin-inline: auto;
  }
  .schoolna_header{

    h4{
      font-size: clamp(20px , 2.5vw , 40px);
      font-weight: 700;
      color: $textColor;
      margin-bottom: 10px;
    }

    .text{
      max-width: 650px;
      font-size: 16px;
      font-weight: 400;
      color: #6D6C80;
    }
    &.centered{
      text-align: center;
      max-width: 767px;
      margin: 0 auto 30px;
      padding-inline: 20px;
      .schoolna_header_badge,
      .text{
        margin: 0 auto 16px;
      }
    }
  }
</style>