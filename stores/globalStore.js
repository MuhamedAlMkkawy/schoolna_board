import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('globalStore', () => {
  // define language
  const lang = ref(useCookie('i18n_redirected')?.value || 'en');
  const setLang = (newLang) => {
    lang.value = newLang;
    useCookie('i18n_redirected').value = newLang
  }



  // handle image popup
  const videoSrc = ref('');
  const showVideoPopup = ref(false);
  const handleShowVideoPopup = (video) =>{
    showVideoPopup.value = !showVideoPopup.value
    console.log(video)
    if(video){
      videoSrc.value = video
    }else{
      videoSrc.value = ''
    }
  }


  // DEFINE IF THE USER IS LOGGED IN
  const isLogged = ref(false);
  


  // Expose state and actions
  return {
    lang,
    setLang,
    videoSrc,
    showVideoPopup,
    handleShowVideoPopup,
    isLogged
  };
}, {
  persist: true,
});