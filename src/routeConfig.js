const routes = [
   {
      path: "/",
      element: <Welcome />,
      next: "/login",
   },
   {
      path: "/login",
      element: <Login />,
      next: "/cart",
   },
   {
      path: "/cart",
      element: <Cart />,
      next: "/payment",
   },
   {
      path: "/payment",
      element: <Payment />,
      next: "/feedback",
   },
   {
      path: "/feedback",
      element: <Feedback />,
      next: "/",
   },
];
