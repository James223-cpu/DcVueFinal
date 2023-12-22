import { createRouter, createWebHistory } from 'vue-router';
import Personnel from '../components/Personnel.vue';
import Mission from '../components/Mission.vue';
import Budget from '../components/Budget.vue';

const routes = [
  {
    path: '/personnels',
    name: 'Personnel',
    component: Personnel,
  },
  {
    path: '/missions',
    name: 'Mission',
    component: Mission,
  },
  {
    path: '/budgets',
    name: 'Budget',
    component: Budget,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
