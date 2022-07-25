import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Principal',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/principal_vista.vue'),
    children: [
      {
        path: '/inicio',
        name: 'Inicio',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Fragmentos/inicio_vista.vue')
      },
      {
        path: '/actividad',
        name: 'Actividad',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Fragmentos/actividad_vista.vue')
      },
      {
        path: '/resultado',
        name: 'Resultado',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Fragmentos/resultado_vista.vue')
      },
      {
        path: '/actividad/melanoma',
        name: 'Actividad Melanoma',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Fragmentos/actividad_melanoma_vista.vue')
      },
      {
        path: '/actividad/verifica/melanoma',
        name: 'Verifica El Melanoma',
        props: true,
        meta: {
          requiresAuth: true
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Fragmentos/actividad_diagnostico_melanoma_vista.vue')
      },
    ]
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes

})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {  
    //Obtenga la URL real de la aplicación, es necesaria para Keycloak
    const basePath = window.location.toString()
    if (!Vue.$keycloak.authenticated) {
      // La página está protegida y el usuario no está autenticado. Forzar un inicio de sesión.
      Vue.$keycloak.login({ redirectUri: basePath.slice(0, -1) + to.path })
    } else if (Vue.$keycloak.hasResourceRole('estudiante')) {
      Vue.prototype.$keycloak.loadUserInfo().success(userInfo => {
        //localStorage.setItem('userInfo', JSON.stringify(userInfo));
        console.log(JSON.parse(JSON.stringify(userInfo))); 
      })
      // El usuario fue autenticado y tiene el rol de la aplicación.
      Vue.$keycloak.updateToken(70)
        .then(() => {
          next()
        })
        .catch(err => {
          console.error(err)
        })
    } else {
      // El usuario fue autenticado, pero no tenía el rol correcto
      // Redireccionaa una pagina de error o presenta un mensaje de no acceso
      //next({ name: 'Unauthorized' })
      console.log('no tiene acceso');
    }
  } else {
    // Esta página no requiere autenticación
    next()
  }
})

export default router