const routers = [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/to-do',
        element: <ProductList />,
      },
    ],
  },
];

export default routers;
