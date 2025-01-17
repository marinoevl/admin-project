import app from '@/router/routes/app.js'
import MainLayout from '@/layouts/MainLayout.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/login',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'login',
        component: LoginView
      }
    ]
  },
  ...app,
]

export default routes;
