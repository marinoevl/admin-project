import HomeView from '@/views/HomeView.vue'
import MainLayout from '@/layouts/MainLayout.vue'

export default [
  {
    path: '/',
    component: MainLayout,
    // beforeEnter: isLoggedIn,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView,
      },
    ],
  },
]
