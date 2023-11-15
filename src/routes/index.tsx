import { useRoutes } from 'react-router-dom';

import Home from '@/pages/Home';
import About from '@/pages/About';
import News from '@/pages/News';
import Policy from '@/pages/Policy';
import Donate from '@/pages/Donate';

const DefineRoutes = (()=> {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'news',
      element: <News />,
    },
    {
      path: 'policy',
      element: <Policy />,
    },
    {
      path: 'donate',
      element: <Donate />,
    },
  ]);
  return  routes
})


export default DefineRoutes;