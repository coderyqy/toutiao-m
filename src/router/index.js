import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Login = () => import('@/views/login/Login')
const Layout = () => import('@/views/layout/Layout')

const Home = () => import('@/views/home/Home')
const QA = () => import('@/views/qa/QA')
const Video = () => import('@/views/video/Video')
const Profile = () => import('@/views/profile/Profile')
const Edit = () => import('@/views/profile/Edit')

Vue.use(VueRouter)

// 路由表
const routes = [
  { 
    path: '/login', 
    name:'login', 
    component: Login 
  },
  { 
    path: '/', 
    name:'layout', 
    component: Layout,
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: Home
      },
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'qa',
        name: 'qa',
        component: QA
      },
      {
        path: 'video',
        name: 'video',
        component: Video
      },
      {
        path: 'profile',
        name: 'profile',
        component: Profile
      }
    ]
  },
  { 
    path: '/edit', 
    name:'edit', 
    component: Edit 
  }
]

const router = new VueRouter({
  routes
})

export default router
