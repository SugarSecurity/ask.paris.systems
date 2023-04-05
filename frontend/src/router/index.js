import { createRouter, createWebHistory } from 'vue-router';
//import { customerGuard } from "@/router/guards/customer.js";
//import { adminGuard } from "@/router/guards/admin.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/redirect',
      name: 'redirect',
      meta: {
        title: 'Redirecting - Sugar Security',
        layout: 'default'
      },
    },
    {
      path: '/exploit-gen',
      name: 'exploitgen',
      meta: {
        title: 'Exploit Code Generator'
      },
      component: () => import('@/views/ExploitGen.vue')
    },
    {
      path: '/',
      name: 'exploitgen',
      meta: {
        title: 'Exploit Code Generator'
      },
      component: () => import('@/views/ExploitGen.vue')
    }
  ]
})

router.beforeEach((to, _, next) => {
  console.log("Loading route")
  console.log(to)
  let title = to.meta.title;
  document.title = title;

  next();
})

export default router
