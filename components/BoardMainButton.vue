<template>
  <button :class="['board_main_btn' , { 'reversed' : props.isReversed }]">
    <div class="icon">
      <i class="pi pi-arrow-up-right"></i>
    </div>
    {{ props.buttonTitle }}
  </button>
</template>

<script setup>
  // define props
  const props = defineProps({
    buttonTitle: String,
    isReversed : {
      type: Boolean,
      default: false
    }
  })
</script>

<style lang="scss" scoped>
  .board_main_btn {
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 59px;
    background: $mainColor;
    border: 1px solid transparent;
    color: #fff;
    padding: 10px 16px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.35s ease;
    z-index: 3;
    &::after{
      content: "";
      position: absolute;
      inset-inline-start: 18px;
      top: 50%;
      transform: translateY(-50%);
      height: 25px;
      width: 25px;
      border-radius: 50%;
      overflow: hidden;
      z-index: -1;
      background: #fff;
      transition: 0.5s;
    }

    // Active press
    &:active {
      transform: scale(0.95);
      box-shadow: none;
    }

    .icon {
      @include circle(28px);
      background: #fff;
      color: $mainColor;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.5s;
      i.pi {
        font-size: 12px;
      }
    }


    &:hover {
      color: $mainColor;
      border-color: $mainColor;
      .icon {
        animation: iconWiggle 1.5s infinite ease-in-out;
        // background: darken($color: #FFF, $amount: 10);
        // color: #fff;
      }
      &::after{
        width: 100%;
        height: 100%;
        inset-inline-start: 0;
        top: 0;
        border-radius: 0;
        transform: translate(0);
      }
    }

    &.reversed{
      background: #fff;
      color: $mainColor ;
      
      &:hover{
        color: #fff;
      }
      .icon , 
      &::after{
        background: $mainColor;
        color: #fff;
      };
    }
  }


  // Keyframes for playful icon wiggle
  @keyframes iconWiggle {   
    0%, 100% {
      transform: rotate(0deg) scale(0.95);
    }
    25% {
      transform: rotate(10deg) scale(1);
    }
    75% {
      transform: rotate(-10deg) scale(1);
    }
  }

</style>