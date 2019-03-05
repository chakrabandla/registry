import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Registry from '@/components/Registry'

import tools from '@/components/tools'
import NotFound from '@/components/NotFound'
import MappingData from '@/components/Mappingdata'
import Multipackage from '@/components/Multipackage'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  base: location.hostname.match(/localhost/)?'/':'',
  routes: [
      {
        path: '/',
        name: 'Index',
        component: Index
      },
      {
        path: '/registry/',
        name: 'Registry',
        component: Registry

      },
    {
      path: '/tools/:id',
      name: 'tools',
      component: tools
    },
    {
      path: '/mappingdata',
      name: 'MappingData',
      component: MappingData
    },
    {
      path: '/multipackage',
      name: 'Multipackage',
      component: Multipackage
    },
    {
      path:'*',
      name: 'NotFound',
      component: NotFound,
    },
  ]
})
