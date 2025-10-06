<template>
  <div class="footer_sections">

    <!-- FOOTER -->
    <footer class="footer_content board_footer">
      <div class="container footer_section_content">

        <div v-for="section in boardFooterSections" :key="section.id" class="footer_item">

          <!-- Logo Section -->
          <div v-if="section.type === 'logo'">
            <div class="image">
              <img :src="section.logo" alt="logo" loading="lazy" />
            </div>
            <div class="text">
              {{ $t(section[globalStore.lang + 'Description']) }}
            </div>
            <ul class="social_links">
              <li v-for="link in section.socialLinks" :key="link.icon">
                <NuxtLink :to="link.url">
                  <i :class="link.icon"></i>
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Navigation Sections -->
          <div v-else>
            <h4>{{ $t(section.title) }}</h4>
            <ol class="footer_links">
              <li v-for="link in section.links" :key="link.route">
                <NuxtLink :to="$localeRoute(link.route)">
                  {{ $t(link.label) }}
                </NuxtLink>
              </li>
            </ol>
          </div>

        </div>
      </div>
      
    </footer>


    <!-- FOOTER -->

    <!-- COPYRIGHT -->
    <div class="copyright board_copyright">
      <div class="container copyright_section_content">
        <p>{{ $t('footer.copyright') }}</p>
      </div>
    </div>
    <!-- COPYRIGHT -->
  </div>
</template>

<script setup>
  import boardLogo from  '../assets/images/logo.svg'

  // DEFINE I18N
  const {t} = useI18n()

  // DEFINE GLOBAL STORE 
  const globalStore = useGlobalStore()

  const boardFooterSections = [
    {
      id: 1,
      type: 'logo',
      logo: boardLogo, 
      enDescription: 'Board G helps teams manage meetings and tasks efficiently, ensuring collaboration and accuracy',
      arDescription: 'يساعد Board G الفرق على إدارة الاجتماعات والمهام بكفاءة، مما يضمن التعاون والدقة',
      socialLinks: [
        { icon: 'pi pi-facebook', url: '' },
        { icon: 'pi pi-instagram', url: '' },
        { icon: 'pi pi-linkedin', url: '' }
      ]
    },
    {
      id: 2,
      type: 'pages',
      title: t('footer.sections.pages.title'),
      links: [
        { label: t('footer.sections.pages.links.home'), route: '/' },
        { label: t('footer.sections.pages.links.about'), route: '/about' },
        { label: t('footer.sections.pages.links.features'), route: '/features' },
        { label: t('footer.sections.pages.links.values'), route: '/values' }
      ]
    },
    {
      id: 3,
      type: 'support',
      title: t('footer.sections.support.title'),
      links: [
        { label: t('footer.sections.support.links.helpCenter'), route: '/help' },
        { label: t('footer.sections.support.links.contactUs'), route: '/contact' },
        { label: t('footer.sections.support.links.faqs'), route: '/faqs' },
        { label: t('footer.sections.support.links.liveChat'), route: '/live-chat' }
      ]
    },
    {
      id: 4,
      type: 'legal',
      title: t('footer.sections.legal.title'),
      links: [
        { label: t('footer.sections.legal.links.privacyPolicy'), route: '/privacy_policy' },
        { label: t('footer.sections.legal.links.termsOfService'), route: '/terms_of_service' },
        { label: t('footer.sections.legal.links.copyrightNotice'), route: '/copyright_notice' },
        { label: t('footer.sections.legal.links.cookiePolicy'), route: '/cookie_policy' }
      ]
    }
  ]

</script>

<style lang="scss" scoped>
  .footer_sections{
    overflow: hidden;
    .subscribe_section{
      background: rgba($mainColorRgb , 0.1);
      padding-bottom: 150px;
      position: relative;
      img{
        width: 40px;
        position: absolute;
        object-fit: contain ;
        height: fit-content;
        z-index: -1;
        &.subscribe_flower{
          top: 20%;
          width: 60px;
          inset-inline-start: 18%;
          @media (max-width : 767px){
            top: 10%;
          }
        }
        &.subscribe_blue_star{
          top: 30%;
          inset-inline-end: 18%;
          width: 50px;
          @media (max-width : 767px){
            top: 10%;
          }
        }
        &.subscribe_orange_star{
          top: 25%;
          inset-inline-end: 12%;
          width: 30px;
          @media (max-width : 767px){
            top: 60%;
          }
        }
        &.subscribe_red_star{
          top: 63%;
          inset-inline-start: 28%;
          width: 20px;
        }
        @media (max-width : 450px){
          display: none;
        }
      }
      .form{
        max-width: 555px;
        margin: 20px auto 50px;
        display: flex;
        align-items: flex-start;
        width: 100%;
        border-radius: 16px;
        position: relative;
        background: #fff;
        .input-wrap{
          border: transparent;
          margin-bottom: 0;
          padding-block: 10px;
          max-width:440px;
          width: 100%;
        }
        button.main-btn{
          position: absolute;
          inset-inline-end: 5px;
          top: 50%;
          transform: translateY(-50%);
          background: linear-gradient(279deg, #1D5166 -6.86%, #28B6BE 95.79%);
        }
      }
      @media (max-width : 767px){
        padding-bottom: 200px;
      }
    }

    .footer_content{
      background-repeat: no-repeat;
      position: relative;
      z-index: 3;
      padding-block: 20px 35px;
      color: #fff;
      background: #1D5166;
      &::after{
        content: "";
        background: url("/assets/images/schoolna/footer_background.png");
        background-size: cover;
        // background-position: center;
        width: 100%;
        height: 100%;
        position: absolute;
        top: -80%;
        left: 0;
        z-index: -1;
        @media (max-width : 767px){
          top: -185px;
        }
      }
      // &::before{
      //   content: '';
      //   position: absolute;
      //   inset-inline-start: 0;
      //   top: 0;
      //   width: 100%;
      //   height: 100%;
      //   z-index: -1;
      // }
      .footer_section_content{
        @include displayFlex($justify : space-between , $align : flex-start);
        @media (max-width : 767px){
          flex-wrap: wrap;
          gap: 20px 40px;
          .footer_item{
            width: 45%;
          }
        }
      }
      .footer_item{
        .image{
          width: 220px;
          margin-bottom: 24px;
        }
        .text{
          @include textTruncate(3);
        }
        .social_links{
          @include displayFlex($justify : flex-start);
          margin-top: 24px;
          li{
            a{
              width: 24px;
              height: 24px;
              border-radius: 50%;
              background: #fff;
              color: #1D5166;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        .footer_links{
          @include displayFlex($direction : column , $gap : 8px , $align:flex-start);
          margin-top: 16px;
          li{
            position: relative;
            padding-block: 4px;
            &::after,
            &::before{
              content: '';
              position: absolute;
              width: 0;
              height: 1px;
              background: #fff;
              transition: 0.3s;
            }
            &::after{
              top: 0;
              inset-inline-start: 0;
            }
            &::before{
              bottom: 0;
              inset-inline-end: 0;
            }
            &:hover{
              &::after , &::before{
                width: 100%;
              }
            }
          }
        }
        &:first-of-type{
          width: 387px;
        }
        @media (max-width : 767px){
          &:first-of-type{
            flex-grow: 1;
          }
          &:not(:first-of-type){
            width: 25%;
          }
        }
        @media (max-width : 567px){
          width: 50% !important;
          &:not(:last-of-type){
            padding-bottom: 30px;
            border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
          }
        }
      }
      &.board_footer{
        background: #FFFFFF;
        padding-block: 50px;
        color: $mainColor !important;
        &::after{
          position: absolute;
          width: 80px;
          height: 80px;
          background: url('/assets/images/board_placeholder_logo.svg');
          background-repeat: no-repeat;
          background-size: contain;
          top: 98%;
          left: 0;
        }
        &::before{
          content: '';
          position: absolute;
          width: 80px;
          height: 80px;
          background: url('/assets/images/board_placeholder_logo.svg');
          background-repeat: no-repeat;
          background-size: contain;
          top: 5%;
          right: 0;
        }

        .footer_section_content{
          position: relative;
          &::before{
            content: '';
            position: absolute;
            left:-150px;
            top: 170px;
            width: 350px;
            height: 100%;
            z-index: -2;
            border-radius: 315px;
            background: #C5D4E5;
            filter: blur(187.0500030517578px);
          }
        }

        .footer_item{
          .social_links{
            li{
              a{
                color: $mainColor;
                background: #fff;
                @include circle(30px);
                i{
                  font-size: 15px;
                }
              }
            }
          }
        }

        .footer_item{
          h4{
            font-size: 20px;
            font-weight: 500;
          }
          ol{
            li{
              color: #666;
              &::after,
              &::before{
                background: #666;
              }
            }
          }
        }
      }
    }

    .copyright{
      background: #1D5166;
      color: #fff;
      font-size: 14px;
      .copyright_section_content{
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        padding-block: 15px  ;
        @include displayFlex($justify : space-between);
        p{
          font-weight: 300;
        }
        .copyrght_links{
          display: flex;
          gap: 20px;
          a{
            font-weight: 500;
            position: relative;
            &:first-of-type{
              &::after{
                content: '';
                position: absolute;
                inset-inline-end: -10px;
                width: 1px;
                height: 100%;
                background: rgba(255, 255, 255, 0.2);
              }
            }
          }
        }
        @media (max-width : 567px){
          flex-wrap: wrap;
          justify-content: center;
        }
      }
      &.board_copyright{
        background: #fff;
        text-align: center;
        color: $mainColor;
        .copyright_section_content{
          justify-content: center;
          p{
            font-weight: 500;
          }
        }
      }
    }
  }
</style>
