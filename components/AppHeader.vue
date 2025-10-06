<template>
  <header class="board_header">
    <div class="container mx-auto board_header_content">
      <div class="image logo_image">
        <img src="/assets/images/logo.svg" alt="image" loading="lazy">
      </div>
      <ul class="board_header_links">
        <li
          :class="{ 'active': $route.path === '/board' || $route.path.endsWith('/en/board') }"
        >
          <NuxtLink :to="$localeRoute('/')">{{$t('header.navigation.home')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/about') }"
        >
          <NuxtLink :to="$localeRoute('/about')">{{$t('header.navigation.about')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/features') }"
        >
          <NuxtLink :to="$localeRoute('/features')">{{$t('header.navigation.features')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/portals') }"
        >
          <NuxtLink :to="$localeRoute('/portals')">{{$t('header.navigation.portals')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/contact_us') }"
        >
          <NuxtLink :to="$localeRoute('/contact_us')">{{$t('header.navigation.contactUs')}}</NuxtLink>
        </li>
      </ul>
      <button class="mobile_menu_controller board_main_btn" @click="toggleMobileMenu">
        <i class="pi pi-bars"></i>
      </button>
      <BoardMainButton 
        :buttonTitle="$t('header.buttons.getStart')"
      />
      <LanguageSwitch class="language_switch" />
    </div>


    <!-- MOBILE MENU -->
    <div :class="['mobile_menu' , {active : showMobileMenu}]">
      <div class="image">
        <img src="../assets/images/logo.svg" alt="image" loading="lazy">
      </div>
      <button class="pi pi-times close_mobile_menu" @click="toggleMobileMenu"></button>
      <ul class="mobile_menu_links">
        <li class="active">
          <NuxtLink :to="$localeRoute('/')">{{$t('header.navigation.home')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/about') }"
        >
          <NuxtLink :to="$localeRoute('/about')">{{$t('header.navigation.about')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/features') }"
        >
          <NuxtLink :to="$localeRoute('/features')">{{$t('header.navigation.features')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/portals') }"
        >
          <NuxtLink :to="$localeRoute('/portals')">{{$t('header.navigation.portals')}}</NuxtLink>
        </li>
        <li
          :class="{ 'active': $route.path.endsWith('/contact_us') }"
        >
          <NuxtLink :to="$localeRoute('/contact_us')">{{$t('header.navigation.contactUs')}}</NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
  // HANDLE TOGGLE MOBILE MENU
  const showMobileMenu = ref(false)
  const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
  }


  watchEffect(()=>{
    if(useRoute().path){
      showMobileMenu.value = false
    }
  })
</script>

<style lang="scss" scoped>
  .board_header{
    padding-block: 40px ;
    position: relative;
    z-index: 99;
    .board_header_content{
      @include displayFlex($justify : space-between);
      .image{
        max-width: 150px;
        width: 100%;
      }
      .board_main_btn:not(.mobile_menu_controller){
        // margin-inline-start: auto;
        @media (max-width : 992px){
          display: none !important;
        }
      }
      ul.board_header_links{
        @include displayFlex($gap : clamp(20px , 2.5vw , 43px));
        margin-inline: auto;
        li{
          a{
            font-size: 18px;
            font-weight: 400;
            color: #fff;
            padding: 8px 16px;
            display: block;
          }
          &:hover,
          &.active{
            a{
              color: #fff;
              background: rgba(0, 115, 147, 1);
              border-radius: 8px;
            }
          }
        }
        @media (max-width: 991px) {
          display: none;
        }
        + .board_main_btn{
          margin-inline-start: auto;
        }
      }

      .board_main_button{
        display: none;
      }
      .mobile_menu_controller{
        display: none;
        padding: 15px;
        // background: $mainColor;
        border-radius: 10px;
        background: #243348;
        color: #fff;
        // border: 1px solid #243348;
        align-items: center;
        justify-content: center;
        margin-inline-start: auto;
        transition: 0.2s;
        i{
          font-size: 20px;
        }
        &:hover{
          background: #fff;
          color: $mainColor;
        }
        @media (max-width : 992px){
          display: flex;
        }
      }
    }
  }

  .languages-switch {
    background: $mainColor;
    padding: 5px;
    border-radius: 8px;
    color: #fff !important;
    &:hover{
      background: #fff;
    }
  }

  .mobile_menu{
    position: fixed;
    inset-inline-start: 0;
    top: 0;
    width: 100%;
    height: 0;
    background: rgba(0, 0, 0, 0.3);
    padding: 0 16px ;
    z-index: 999;
    color: $mainColor;
    transition: 0.6s;
    overflow: hidden;
    .image{
      max-width: 200px;
    }

    &::after{
      content: '';
      position: absolute;
      top: 0;
      inset-inline-start: 0;
      width: 100%;
      height: 55%;
      background: #fff;
      z-index: -1;
    }

    .close_mobile_menu{
      position: absolute;
      inset-inline-end: 20px;
      top: 20px;
      width: 30px;
      height: 30px;
      transition: 0.6s;
      border-radius: 8px;
      &:hover{
        background: $mainColor;
        color: #fff;
      }
    }

    ul.mobile_menu_links{
      padding-block-start: 30px;
      li{
        position: relative;
        padding-block: 8px;
        color: #6D6C80;
        &:not(:last-of-type){
          margin-bottom: 8px;
        }
        a{
          display: block;
          width: 100%;
        }
        // &:not(:last-of-type){
        //   // margin-block-end: 20px;
        // }
        &.active ,
        &:hover{
          color: #fff;
          z-index: 9;
          &::before{
            content: "";
            position: absolute;
            inset-inline-start: -25px;
            top: 0;
            height: 100%;
            width: 100%;
            border-radius: 8px ;
            background: $mainColor;
            z-index: -1;
            transition: 1s;
          }
        }
      }
    }
    &.active{
      height: 100vh;
      padding-block: 24px;
    }
  }
</style>