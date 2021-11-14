import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from './components/Formulario.vue' //importo la ruta del componente
import UsuariosFetch  from './components/UsuariosFetch.vue' 
import UsuariosHttp  from './components/UsuariosHttp.vue'
import UsuariosAxios  from './components/UsuariosAxios.vue'


Vue.use(VueRouter)

export const router = new VueRouter ({
    mode: 'history',
    routes:[
        {path: '/formulario', component: Formulario},
        {path: '/usuariosFetch', component: UsuariosFetch},
        {path: '/usuariosHttp', component: UsuariosHttp},
        {path: '/usuariosAxios', component: UsuariosAxios}
        
    ]
})