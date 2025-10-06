<template>
  <div class="board_page home_page">
    <!-- HERO SECTION -->
    <section class="hero_section">
      <video src="/assets/videos/board_hero_video.mp4" muted loop autoplay playsinline></video>
      <div class="container">
        <AvatarGroup>
          <Avatar :image="userImg" size="large" shape="circle" v-for="i in 4" :key="i"/>
          <Avatar class="avatar_label" :label="globalStore.lang == 'en' ?'+350 users' : '+350 مستخدمين'" size="large" />
        </AvatarGroup>
        <Carousel v-bind="herosSectionSliderConfig" class="hero_section_slider">
          <Slide v-for="(item, i) in hero_section_slider" :key="i">
            <div class="hero_section_content" :style="{textAlign : globalStore.lang == 'en' ? 'start' : 'end'}">
              <h1 data-aos="fade-up">
                <span>{{ item.title[globalStore.lang + 'Highlight'] }}</span>
                {{ item.title[globalStore.lang + 'Text'] }}
              </h1>

              <h3 data-aos="fade-up" data-aos-delay="200">
                {{ item.subtitle[globalStore.lang] }}
              </h3>

              <ul class="hero_statistics_items">
                <li
                  class="hero_statistics_item"
                  v-for="(stat, j) in item.stats"
                  :key="j"
                >
                  <h4>+{{ stat.number }}</h4>
                  <h5>{{ stat[globalStore.lang + 'Label'] }}</h5>
                </li>
              </ul>
              <BoardMainButton 
                :buttonTitle="item.buttonTitle[globalStore.lang]" 
                :style="{marginInlineStart : globalStore.lang === 'en' ? 'unset' : 'auto'}"
              />
            </div>
          </Slide>
        </Carousel>
      </div>
    </section>
    <!-- HERO SECTION -->
    <!-- CLIENTS SLIDER -->
    <div class="clients_slider_section">
      <div class="container">
        <ClientsSlider 
          :images="boardClientsImages" 
          :breakpoints="{
            320: { itemsToShow: 2, snapAlign: 'start' },
            567: { itemsToShow: 3, snapAlign: 'start' },
            767: { itemsToShow: 4, snapAlign: 'start' },
            992: { itemsToShow: 5, snapAlign: 'start' },
            1200: { itemsToShow: 6, snapAlign: 'start' },
          }"
        />
      </div>
    </div>
    <!-- CLIENTS SLIDER -->
    <!-- ABOUT BOARD -->
    <section class="about_board_section">
      <SectionHeader 
        headerPosition="center"
        :title="boardSectionHeader[globalStore.lang + 'Title']"
        :text="boardSectionHeader[globalStore.lang + 'Text']"
      />
      <div class="container about_board_content">
        <div class="about_board_column">
          <div 
            class="about_board_item" 
            v-for="(item , index) in about_board_items.slice(0,3)" 
            :key="index"
            data-aos="fade-left"
            :data-aos-delay="item.id * 400"
            >
            <h4>{{item[globalStore.lang +'Title']}}</h4>
            <p>{{item[globalStore.lang +'Text']}}</p>
          </div>
        </div> 
        <div class="about_board_image" data-aos="zoom-in" >
          <img src="/assets/images/board_dashboard_img.svg" alt="image" loading="lazy">
        </div>
        <div class="about_board_column">
          <div 
            class="about_board_item" 
            v-for="(item , index) in about_board_items.slice(3,6)" 
            :key="index"
            data-aos="fade-right"
            :data-aos-delay="item.id * 400"
          >
            <h4>{{item[globalStore.lang +'Title']}}</h4>
            <p>{{item[globalStore.lang +'Text']}}</p>
          </div>
        </div>
      </div>
      <div 
        class="about_board_item bottom_about_board_item" 
        v-for="(item , index) in about_board_items.slice(6,7)" 
        :key="index"
        data-aos="fade-down"
        :data-aos-delay="item.id * 100"
      >
        <h4>{{item[globalStore.lang +'Title']}}</h4>
        <p>{{item[globalStore.lang +'Text']}}</p>
      </div>
    </section>
    <!-- ABOUT BOARD -->
    <hr>
    <!-- BOARD FEATURES -->
    <section class="board_features_section">
      <SectionHeader 
        headerPosition="center"
        :title="$t('features_section.header.title')"
        :text="$t('features_section.header.text')"
      />
      <div class="container board_features_content">
        <div class="board_feature_items">
          <div 
            class="board_features_item" 
            v-for="(item , index) in board_feature_items.slice(0 , 3)" 
            :data-aos="isMobile ? 'fade-down' : 'fade-left'" 
            :data-aos-delay="index * 200" 
            :key="index"
          >
            <h6>{{item[globalStore.lang +'Title']}}</h6>
            <div class="image">
              <div v-html="item.icon"></div>
          </div>
          </div>
        </div>
        <div class="image board_feature_image">
          <img src="/assets/images/board_feature_logo.svg" alt="image" loading="lazy">
        </div>
        <div class="board_feature_items">
          <div 
            class="board_features_item" 
            v-for="(item , index) in board_feature_items.slice(3 , 6)" 
            :key="index"
            :data-aos="isMobile ? 'fade-up' : 'fade-right'" 
            :data-aos-delay="index * 200"
          >
            <h6>{{item[globalStore.lang +'Title']}}</h6>
            <div class="image">
              <div v-html="item.icon"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- BOARD FEATURES -->
    <hr>
    <!-- BOARD TIMELINE -->
    <section class="board_timeline_section">
      <SectionHeader 
        headerPosition="center"
        :title="$t('timeline_section.title')"
        :text="$t('timeline_section.text')"
      />

      <Timeline 
        :value="board_timeline_items" 
        align="alternate" 
        class="board_timeline_items"
      >
        <template #opposite="slotProps">
          <div :class="['board_timeline_item ' , {'last_board_timeline_item' : slotProps.index == board_timeline_items.length - 1}]" :data-aos="slotProps.index % 2 == 0 ? 'fade-left' : 'fade-right'" :data-aos-delay="slotProps.index * 200">
            <h4>{{ slotProps.item[globalStore.lang + 'Title'] }}</h4>
            <p>{{ slotProps.item[globalStore.lang + 'Text'] }}</p>
          </div>
        </template>

        <!-- <template #marker>
          <span class="board_marker"></span>
        </template> -->
      </Timeline>
    </section>
    <!-- BOARD TIMELINE -->
    <!-- BOARD MOCKUP -->
      <MockupSection
        :headerTitle="$t('mockupSection.headerTitle')"
        :headerText="$t('mockupSection.headerText')"
        :buttonTitle="$t('mockupSection.buttonTitle')"
        :mockupImg="mockupImage"
      />
    <!-- BOARD MOCKUP -->
    <hr>
  </div>
</template>

<script setup>
  import Avatar from 'primevue/avatar';
  import AvatarGroup from 'primevue/avatargroup';   //Optional for grouping
  import userImg from '../assets/images/user.jpg'
  import mockupImage from '../assets/images/board_mockup_img.svg'


  // define globalStore 
  const globalStore = useGlobalStore();

  // DEFINETHE HERO SECTION SLIDER CONFIG
  import 'vue3-carousel/carousel.css'
  import { Carousel, Slide } from 'vue3-carousel'
  
  
  const herosSectionSliderConfig = {
    itemsToShow: 1,
    gap: 30,
    // snapAlign: 'start',
    autoplay: 3000,   // wait 5s before moving
    transition: 1000, // smooth 1s slide transition
    wrapAround: true,
    pauseAutoplayOnHover: true,
    snapAlign: 'start'
  }

  // DEFINE THE HERO SECTION SLIDER DATA
  const hero_section_slider = ref([
    {
      title: {
        enHighlight: "Streamline",
        arHighlight: "تبسيط",
        enText: "Every Meeting, Every Decision.",
        arText: "كل اجتماع، كل قرار",
      },
      subtitle: {
        en: "Take full control of your board's operations—schedule, track, and manage meetings and decisions seamlessly, all in one secure platform.",
        ar: "تحكم كامل في عمليات مجلسك — جدولة وتتبع وإدارة الاجتماعات والقرارات بسهولة وفي منصة واحدة آمنة.",
      },
      stats: [
        { number: 2000, enLabel: "Companies Trust Board", arLabel: "شركات تثق في النظام" },
        { number: 1500, enLabel: "Meetings Managed", arLabel: "اجتماعات مُدارة" },
        { number: 500, enLabel: "Tasks Completed", arLabel: "مهام مكتملة" },
      ],
      buttonTitle: {
        en: "Get Your Smart System Now",
        ar: "احصل على نظامك الذكي الآن",
      },
    },
    {
      title: {
        enHighlight: "Streamline",
        arHighlight: "تبسيط",
        enText: "Every Meeting, Every Decision.",
        arText: "كل اجتماع، كل قرار",
      },
      subtitle: {
        en: "Take full control of your board's operations—schedule, track, and manage meetings and decisions seamlessly, all in one secure platform.",
        ar: "تحكم كامل في عمليات مجلسك — جدولة وتتبع وإدارة الاجتماعات والقرارات بسهولة وفي منصة واحدة آمنة.",
      },
      stats: [
        { number: 152, enLabel: "Companies Trust Board", arLabel: "شركات تثق في النظام" },
        { number: 300, enLabel: "Meetings Managed", arLabel: "اجتماعات مُدارة" },
        { number: 30, enLabel: "Tasks Completed", arLabel: "مهام مكتملة" },
      ],
      buttonTitle: {
        en: "Get Your Smart System Now",
        ar: "احصل على نظامك الذكي الآن",
      },
    },
    {
      title: {
        enHighlight: "Streamline",
        arHighlight: "تبسيط",
        enText: "Every Meeting, Every Decision.",
        arText: "كل اجتماع، كل قرار",
      },
      subtitle: {
        en: "Take full control of your board's operations—schedule, track, and manage meetings and decisions seamlessly, all in one secure platform.",
        ar: "تحكم كامل في عمليات مجلسك — جدولة وتتبع وإدارة الاجتماعات والقرارات بسهولة وفي منصة واحدة آمنة.",
      },
      stats: [
        { number: 400, enLabel: "Companies Trust Board", arLabel: "شركات تثق في النظام" },
        { number: 452, enLabel: "Meetings Managed", arLabel: "اجتماعات مُدارة" },
        { number: 951, enLabel: "Tasks Completed", arLabel: "مهام مكتملة" },
      ],
      buttonTitle: {
        en: "Get Your Smart System Now",
        ar: "احصل على نظامك الذكي الآن",
      },
    },
  ])


  // DEFINETHE BOARD SLIDER IMAGES
  import boardClient1 from '../assets/images/client_1.svg'
  import boardClient2 from '../assets/images/client_2.svg'
  import boardClient3 from '../assets/images/client_3.svg'
  
  
  const boardClientsImages = ref([
    {
      id : 1,
      url : boardClient1
    },
    {
      id : 2,
      url : boardClient2
    },
    {
      id : 3,
      url : boardClient3
    }
  ])


  // DEFINE ABOUT BOARD 
  const boardSectionHeader = ref({
    enTitle: 'About Board',
    enText : 'Streamline your board operations with Board, the smart system that helps you manage meetings and decisions effortlessly.',
    arTitle: 'حول المجلس',
    arText : 'تبسيط عمليات مجلسك مع Board، نظام ذكي يساعدك في ادارة الاجتماعات والقرارات بسهولة.'
  })

  const about_board_items = ref([
    {
      id: 1,
      enTitle: 'Task Tracking',
      arTitle: 'تتبع المهام',
      enText: 'Track completed and pending tasks with clear statistics to keep projects on schedule.',
      arText: 'تتبع المهام المكتملة والمعلقة بإحصائيات واضحة للحفاظ على سير المشاريع وفق الجدول.'
    },
    {
      id: 3,
      enTitle: 'Announcements',
      arTitle: 'الإعلانات',
      enText: 'Stay updated with the latest organizational news and important board notices.',
      arText: 'ابقَ على اطلاع بآخر أخبار المنظمة والتنبيهات المهمة من المجلس.'
    },
    {
      id: 5,
      enTitle: 'Quick Links',
      arTitle: 'روابط سريعة',
      enText: 'Navigate to the most important tools and documents with just one click.',
      arText: 'انتقل إلى أهم الأدوات والمستندات بنقرة واحدة فقط.'
    },
    {
      id: 2,
      enTitle: 'Meetings Hub',
      arTitle: 'مركز الاجتماعات',
      enText: 'Access upcoming and past meetings instantly for better preparation and follow-up.',
      arText: 'الوصول الفوري إلى الاجتماعات القادمة والسابقة لتحضير أفضل ومتابعة فعالة.'
    },
    {
      id: 4,
      enTitle: 'Meeting Invitations',
      arTitle: 'دعوات الاجتماعات',
      enText: 'Easily manage responses — accepted, pending, or declined — all in one place.',
      arText: 'إدارة الردود بسهولة — مقبولة، معلقة، أو مرفوضة — في مكان واحد.'
    },
    {
      id: 6,
      enTitle: 'Manage Tasks',
      arTitle: 'إدارة المهام',
      enText: 'Track pending and completed items, with a quick Add Task button to create new ones instantly.',
      arText: 'تتبع العناصر المعلقة والمكتملة، مع زر إضافة مهام سريع لإنشاء مهام جديدة فوراً.'
    },
    {
      id: 7,
      enTitle: 'Meeting Minutes',
      arTitle: 'محاضر الاجتماعات',
      enText: 'Your most powerful feature — automatically generated, structured, and detailed records that capture every decision, discussion, and action for complete accountability.',
      arText: 'أقوى ميزاتك — محاضر تُنشأ تلقائياً، منظمة ومفصلة، تسجل كل قرار، مناقشة، وإجراء لضمان المساءلة الكاملة.'
    }
  ])



  // DEFINE BOARD FEATURE ITEMS
  const board_feature_items = ref([
    { 
      enTitle: 'Accurate Minutes', 
      arTitle: 'محاضر دقيقة', 
      icon: '<i class="pi pi-book"></i>' 
    },
    { 
      enTitle: 'Secure Documents', 
      arTitle: 'ملفات آمنة', 
      icon: '<i class="pi pi-file"></i>' 
    },
    { 
      enTitle: 'Manage Tasks', 
      arTitle: 'إدارة المهام', 
      icon: '<i class="pi pi-list-check"></i>' 
    },
    { 
      enTitle: 'Calendar Integration', 
      arTitle: 'تكامل التقويم', 
      icon: '<i class="pi pi-calendar"></i>' 
    },
    { 
      enTitle: 'Smart Agenda', 
      arTitle: 'جدول ذكي', 
      icon: '<i class="pi pi-table"></i>' 
    },
    { 
      enTitle: 'Board Voting', 
      arTitle: 'تصويت المجلس', 
      icon: '<i class="pi pi-megaphone"></i>' 
    }
  ])

  const isMobile = ref(false)

  onMounted(() => {
    if (typeof window !== 'undefined') {
      isMobile.value = window.matchMedia('(max-width: 767px)').matches
    }
  })

  // DEFINE BOARD TIMLINE DATA
  import Timeline from 'primevue/timeline';
  const board_timeline_items = [
    {
      id: 1,
      enTitle: 'Sign In',
      arTitle: 'تسجيل الدخول',
      enText: 'Start by securely logging into your board portal. Each user has personalized access, ensuring privacy and control over sensitive information.',
      arText: 'ابدأ بتسجيل الدخول الآمن إلى بوابة مجلسك. لكل مستخدم وصول مخصص، مما يضمن الخصوصية والتحكم في المعلومات الحساسة.'
    },
    {
      id: 2,
      enTitle: 'Create Agenda',
      arTitle: 'إنشاء جدول الأعمال',
      enText: 'Build a structured agenda in minutes. Add topics, attach supporting documents, and share it with all participants before the meeting.',
      arText: 'أنشئ جدول أعمال منظم في دقائق. أضف المواضيع، أرفق المستندات الداعمة، وشاركها مع جميع المشاركين قبل الاجتماع.'
    },
    {
      id: 3,
      enTitle: 'Send Invitations',
      arTitle: 'إرسال الدعوات',
      enText: 'Easily invite board members to upcoming meetings. The system tracks confirmations, declines, or pending responses.',
      arText: 'ادعُ أعضاء المجلس بسهولة إلى الاجتماعات القادمة. يتتبع النظام التأكيدات، الاعتذارات، أو الردود المعلقة.'
    },
    {
      id: 4,
      enTitle: 'Run Meetings',
      arTitle: 'إدارة الاجتماعات',
      enText: 'Conduct meetings seamlessly from one platform. Discuss agenda items, review documents, and make decisions in a clear way.',
      arText: 'أجرِ الاجتماعات بسلاسة من منصة واحدة. ناقش بنود جدول الأعمال، راجع المستندات، واتخذ القرارات بطريقة واضحة.'
    }
  ]

</script>

<style lang="scss" scoped>
  .hero_section{
    position: relative;
    padding-block-start: 150px;
    // height: 80vh;
    overflow-x: clip;
    display: flex;
    align-items: center;
    height: 100vh;
    margin-top: -133px;
    > video,
    &::before{
      position: absolute;
      inset-inline-start: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -2;
    }
    &::before{
      content: '';
      background: #00000029;
      z-index: -1;
    } 


    &::after{
      content: '';
      position: absolute;
      inset-inline-end: -100px;
      bottom: 0;
      max-width: 700px;
      width: -webkit-fill-available;
      height: 500px;
      background: url('../assets/images/hero_section_table.svg');
      background-repeat: no-repeat;
      background-size: cover;
      @media (max-width : 992px){
        display: none;
      }
    }
    .p-avatar.p-component.p-avatar-lg.avatar_label{
      width: unset;
      background: transparent;
      border: none;
      margin-inline-start: 5px;
      font-size: 14px;
      color: #fff;
    }
    .hero_section_slider{
      padding-block: 0;
      max-width: 600px;
      .carousel__slide{
        justify-content: flex-start !important;
      }
    }
    .hero_section_content{
      // max-width: 600px;   
      // width: 100%;
      color: #fff;
      flex-direction: column;
      align-items: flex-start;
      h1{
        font-size: 48px;
        font-weight: 700;
        margin-block: 10px 24px;
        @media (max-width : 567px){
          font-size: 34px;
        }
        @media (max-width : 457px){
          font-size: 25px;
        }
        span{
          color: $mainColor;
        }
      }
      h3{
        font-size: 16px;
        font-weight: 400;
      }
      .hero_statistics_items{
        @include displayFlex($justify : space-between ,$gap : 0);
        margin-block: 32px 40px;
        width: 100%;
        .hero_statistics_item{
          position: relative;
          h4{
            font-size: 30px;
            font-weight: 500;
            color: $mainColor;
            margin-bottom: 12px;
          }
          h5{
            font-size: 16px;
            font-weight: 500;
            // color: #181D27;
          }
          &:not(:last-of-type)::after{
            content: "";
            position: absolute;
            inset-inline-end: -46px;
            top: 0;
            width: 1px;
            height: 100%;
            background: #e4e4e4;
            @media (max-width : 567px){
              display: none;
            }
          }
        }
        @media (max-width : 567px){
          padding-block: 10px;
          gap: 20px;
          .hero_statistics_item{
            h4{
              font-size: 24px;
            }
            h5{
              font-size: 12px;
            }
          }
        }
      }
      // .board_main_btn{
      //   margin-inline-start:  auto !important;
      // }
    }
    @media (max-width : 991px){
      // padding-top: 20px;
      // height: 70vh;
    }
  }


  section.about_board_section{
    .about_board_content{
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 100px;
      direction: ltr;
      @media (max-width : 992px){
        gap: 50px;
      }
      .about_board_column{
        @include displayFlex($direction : column , $justify : space-evenly);
        &:last-of-type{
          .about_board_item{
            &::before{
              transform: translateY(-50%) rotateY(180deg);
              inset-inline-end: unset;
              inset-inline-start: -120px;
              @media (max-width : 992px){
                inset-inline-start: -110px;
              }
            }
          }
        }
      }
    }
    .about_board_item{
      text-align: center;
      position: relative;
      max-width: 300px;
      h4{
        font-size: 20px;
        font-weight: 500;
      }
      p{
        font-size: 14px;
        font-weight: 400;
        color: #7F7F7F;
        @include textTruncate(3);
        // padding-inline: 10px;
      }
      &::before{
        content: "";
        position: absolute;
        inset-inline-end: -120px;
        top: 50%;
        transform: translateY(-50%);
        background: url('../assets/images/dashed_arrow.svg');
        background-repeat: no-repeat;
        background-size: contain;
        width: 100px;
        height: 15px;
        @media (max-width : 992px){
          inset-inline-end: -110px;
        }
      }

      &.bottom_about_board_item{
        margin-block-start: 100px;
        margin-inline: auto;
        &::before{
          left: 50%;
          transform: translateX(-50%) rotate(270deg);
          top: unset;
          bottom: 180%;
        }
      }
      @media (max-width:767px){
        h4{
          font-size: 16px;
        }  
        p{
          font-size: 12px;
        }
      }
    }
  }


  section.board_features_section{
    position: relative;
    direction: ltr;
    &::before{
      content: '';
      position: absolute;
      right: 5%;
      top: -50px;
      width: 190px;
      height: 172px;
      background: url('../assets/images/board_placeholder_logo.svg');
      background-repeat: no-repeat;
    }
    .board_features_content{
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      gap: 100px;
      align-items: center;
      justify-content: center;
      .board_feature_items{
        @include displayFlex($direction : column , $justify : space-evenly , $gap : 50px);
        .board_features_item{
          text-align: center;
          position: relative;
          background: #fff;
          h6{
            font-size: 16px;
            font-weight: 700;
            width: 66px;
            @include textTruncate(2);
          }
          .image{
            @include circle(48px);
            background:  #FAFAFA;
            box-shadow: 0 0 10px 0 rgba(59, 109, 167, 0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px auto 0;
            outline: 12px solid #fff;
          }
          &:nth-of-type(1){
            &::after{
              transform: rotateY(180deg);
              left: 100%;
              top: 54px;
              @media (max-width : 991px){
                top: 100%;
              }
              @media (max-width : 767px){
                transform: rotate(228deg);
                top: 0;
                width: 190px;
              }
              @media(max-width : 555px){
                top: 5px;
              }
              @media (max-width : 410px){
                left: 65%;
                transform: rotate(245deg);
              }
            }
          }
          &:nth-of-type(2){
            &::after{
              left: 100%;
              top: 46px;
              background: url("/assets/images/board_features_straight_line.svg");
              width: 386px;
              @media(max-width : 991px){
                width: 250px;
              }
              @media(max-width : 767px){
                width: 154px;
                top: 121px;
                transform: rotate(90deg);
                height: 35px;
                left: unset;
                right: -32px;
              }
              // @media(max-width : 555px){
              //   top: 100px;
              //   right: -30px;
              // }
            }
          }
          &:nth-of-type(3){
            &::after{
              transform: rotate(180deg);
              left: 100%;
              bottom: 53px;
              top: unset;
              @media(max-width : 991px){
                bottom: 110px;
              }
              @media(max-width : 767px){
                bottom: unset;
                transform: rotateX(180deg) rotateZ(50deg);
                left: unset;
                top: 92px;
                width: 202px;
                height: 82px;
                right: 6px;
              }
              @media(max-width : 555px){
                right: 12px;
                top: 98px;
              }
              @media (max-width : 410px){
                right: -20px;
                transform: rotateX(200deg) rotateZ(65deg);
              }
            }
          }
          &::after{
            content: "";
            position: absolute;
            right: 100%;
            top: 50px;
            width: 384px;
            height: 200px;
            background: url("/assets/images/board_features_curved_line.svg");
            background-repeat: no-repeat !important;
            background-size: contain !important;
            z-index: -1;
            @media(max-width : 991px){
              // max-width: 100%;
              width: 250px;
            }
            // @media(max-width : 767px){
            //   // max-width: 100%;
            //   width: 250px;
            // }
          }
        }
        &:last-of-type{
          .board_features_item{
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-top: 0;
            @media(max-width : 767px){
              flex-direction: column-reverse;
            }
            .image{
              margin-top: 0;
            }
            &:nth-of-type(1){
              &::after{
                transform: rotateY(0);
                left: unset;
                right: 100%;
                top: 53px;
                @media (max-width : 991px){
                  top: 105px;
                }
                @media (max-width : 767px){
                  transform: rotateX(0) rotateY(180deg) rotateZ(52deg);
                  right: unset;
                  left: 68px;
                  top: -90px;
                }
                @media(max-width : 555px){
                // right: 12px;
                //   top: 98px;
                  top: -95px;
                }
                @media (max-width : 410px){
                  left: 44px;
                  transform: rotateX(0) rotateY(180deg) rotateZ(65deg);
                }
              }
            }
            &:nth-of-type(2){
              &::after{
                right: 100%;
                left: unset;
                background: url("/assets/images/board_features_straight_line.svg");
                width: 386px;
                transform: rotateY(180deg);
                @media(max-width : 991px){
                  // max-width: 100%;
                  width: 250px;
                }
                @media(max-width : 767px){
                  width: 120px;
                  transform: rotate(270deg);
                  height: 10px;
                  right: -32px;
                  top: -30px;
                }
                // @media(max-width : 555px){
                //   top: -5px;
                //   right: -51px;
                // }
              }
            }
            &:nth-of-type(3){
              &::after{
                transform: rotateX(180deg);
                right: 100%;
                left: unset;
                bottom: 54px;
                @media (max-width : 991px){
                  bottom: 110px;
                }
                @media (max-width : 767px){
                  transform: rotateX(0deg) rotateZ(52deg);
                  right: 8px;
                  left: unset;
                  top: -65px;
                }
                @media(max-width : 555px){
                  top: -70px;
                  // right: -51px;
                }
                @media (max-width : 410px){
                  right: -15px;
                  transform: rotateX(0deg) rotateZ(65deg);
                }
              }
            }
          }
        }
        @media (max-width : 500px){
          justify-content: space-between;
        }
      }

      .board_feature_image{
        @include circle(87px);
        margin-inline: auto;
        background: #FFF;
        padding: 18px;
        box-shadow: 0 0 15px 0 rgba(59, 109, 167, 0.20);
        animation: logo_pulse 2.5s infinite linear alternate-reverse;
        z-index: 99;
        img{
          object-fit: contain;
        }
        @media (max-width : 767px){
          @include circle(80px);
          // display: none;
        }
      }
      @media (max-width : 767px){
        grid-template-columns: repeat( 1 , 1fr);
        gap: 60px;
        .board_feature_items{
          flex-direction: row;
          .board_feature_item{
            flex-grow: 1;
          }
        }
      }
    }
  }


  @keyframes logo_pulse {
    0%{
      transform: scale(1);
    }
    50%{
      transform: scale(1.1);
    }
    100%{
      transform: scale(1);
    }
  }



  .board_timeline_items{
    .board_timeline_item{
      max-width: 417px;
      padding: 24px;
      border-radius: 8px;
      border: 1px solid #52BBE8;
      position: relative;
      @media (max-width : 567px){
        padding: 10px;
        &:not(.last_board_timeline_item){
          margin-bottom: 50px;
          &::after{
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 1px;
            height: 50px;
            border: 1px dashed $mainColor;
            transition: 1s;
            animation: timeline_line .5s 1 linear;
          }
        }
      }
      h4{
        font-size: 20px;
        font-weight: 500;
        // margin-bottom: 24px;
      }
      p{
        font-size: 16px;
        font-weight: 400;
        color: #7F7F7F;
      }
      // &::before{
      //   content: '';
      //   position: absolute;
      //   inset-inline-start: -120px;
      //   top: 8px;
      //   width: 50px;
      //   height: 1px ;
      //   background: url('/assets/images/timeline_arrow.svg');
      // }
    }
  }
  
  @keyframes timeline_line{
    0%{
      height: 0;
    }
    50%{
      height: 50px;
    }
    100%{
      height: 0;
    }
  }
</style>