import Vue from 'vue'
import VueRouter from 'vue-router'
import edu from '../page/edu.vue'
import profile from '../page/profile.vue'
import activity from '../page/activity.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/edu',
        name: 'edu',
        component: edu
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile
    },
    {
        path: '/activity',
        name: 'activity',
        component: activity
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router