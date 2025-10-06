<template>
  <section class="mockup_section">
    <div 
      class="container mockup_content board_mockup_content">
      <div class="mockup_text">
        <SectionHeader 
          :title="props.headerTitle"
          :text="props.headerText"
        />
        <BoardMainButton :buttonTitle="props.buttonTitle" :isReversed="true"/>
      </div>
      <div class="image mockup_image">
        <img data-aos="fade-up" data-aos-delay="200" :src="props.mockupImg" alt="image" loading="lazy"/>
      </div>
    </div>
  </section>
</template>

<script setup>
  // define props
  const props = defineProps({
    headerTitle : String,
    headerText : String,
    buttonTitle : String,
    mockupImg : String
  })
</script>

<style lang="scss" scoped>
  .mockup_section{
    .mockup_content{
      // overflow-y: hidden ;
      position: relative;
      background: url(../assets/images/schoolna/schoolna_mockup_background.png);
      background-repeat: no-repeat;
      background-attachment: fixed !important;
      background-size: cover;
      padding: 45px clamp(15px , 2.5vw , 80px);
      border-radius: 16px;
      margin-block-start: 80px;
      &.board_mockup_content{
        background: url(../assets/images/board_mockup_backgrround.png), #3B6DA7;
        padding-block: 80px;
      }
      .mockup_text{
        max-width: 70%;
      }
      .image{
        width: 100%;
        position: absolute;
        inset-inline-end: 8%;
        bottom: 0;
        max-width: 320px;
        max-height: 500px;
        overflow: hidden;
      }
      @media (max-width : 767px){
        margin-block-start: 0px;
        padding-block: 40px !important;
        .mockup_text{
          text-align: center;
          margin: 0 auto;
          max-width: 100%;
        }
        // height: 550px;
        .image{
          display: none;
          // width: 400px;
          // inset-inline-end: unset;
          // left: 50%;
          // transform: translateX(-50%);
          // img{
          // }
        }
      }
    }
  }
</style>