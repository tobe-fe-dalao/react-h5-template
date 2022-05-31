const route = [
  {
    path: '/',
    component: '@/layout/index',
    routes: [
      {
        path: '/home',
        component: '@/pages/home',
        title: '主页',
      },
    ],
  },
];

export default route;
