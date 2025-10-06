export default defineNuxtRouteMiddleware((to, from) => {
  const isLogged = useCookie<boolean>('isLogged')?.value
  const globalStore = useGlobalStore()

  // لو المستخدم مش عامل لوجين
  if (!isLogged) {
    const loginRoute = globalStore.lang === 'en' ? '/en/login' : '/login'

    // نتأكد إنه مش واقف أصلاً على صفحة اللوجين
    if (to.path !== loginRoute) {
      return navigateTo(loginRoute)
    }else {
      return
    }
  }

  // لو عامل لوجين → يكمل عادي
  return
})
