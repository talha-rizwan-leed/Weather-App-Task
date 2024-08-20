
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Weather from './pages/Weather';
import Favourite from './pages/Favourite';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
function App() {
  
  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/*' element={<NotFoundPage />} />

      </Route>
    )
  )
  return <RouterProvider router={router} />

}


export default App;
