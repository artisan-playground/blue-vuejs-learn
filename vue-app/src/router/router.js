import Vue from 'vue'
import VueRouter from 'vue-router'
import bar from '../page/bar.vue'
import foo from '../page/foo.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/bar',
        name: 'bar',
        component: bar
    },
    {
        path: '/foo',
        name: 'foo',
        component: foo
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router