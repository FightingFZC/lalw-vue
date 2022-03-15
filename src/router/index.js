import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Login from '@/components/sign/Login'
import Register from '@/components/sign/Register'
import HomeHead from '@/components/home/HomeHead'
import Calculator from '@/components/calculator/Calculator'

import UserLayout from '@/components/user/Layout'
import UserSettingHome from '@/components/user/Home'
import UserSettingAccount from '@/components/user/Account'
import AlgSetting from '@/components/user/AlgSetting'
import AlgShow from '@/components/user/AlgShow'

import AdminLayout from '@/components/admin/Layout'
import AdminSettingHome from '@/components/admin/Home'
import AdminSettingAccount from '@/components/admin/Account'
import UsersSetting from '@/components/admin/UsersSetting'
import AdminAlgSetting from '@/components/admin/AlgSetting'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeHead,
      children: [
        { path: '', component: Home },
        { path: '/calculator', component: Calculator}
      ],
      meta: {
        auth: false
      }
    },
    {
      path: '/user',
      component: UserLayout,
      children: [
        { path: '', redirect: 'home' },
        { path: 'home', component: UserSettingHome, meta: { auth: true } },
        { path: 'account', component: UserSettingAccount, meta: { auth: true } },
        { path: 'algSetting', component: AlgSetting, meta: { auth: true } },
        
      ],
      meta: { auth: true }
    },
    { path: '/user/alg/*', component: AlgShow, meta: { auth: true } },
    {
      path: '/admin',
      component: AdminLayout,
      children: [
        { path: '', redirect: 'home' },
        { path: 'home', component: AdminSettingHome, meta: { auth: true } },
        { path: 'account', component: AdminSettingAccount, meta: { auth: true } },
        { path: 'usersSetting', component: UsersSetting, meta: { auth: true } },
        { path: 'algSetting/*', component: AdminAlgSetting, meta: { auth: true } }
      ],
      meta: { auth: true }
    },
    { path: '/sign/Login', component: Login, meta: { auth: false } },
    { path: '/sign/Register', component: Register, meta: { auth: false } },
  ]
})
