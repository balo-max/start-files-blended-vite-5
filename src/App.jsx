import { lazy } from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Rates = lazy(() => import('./pages/Rates'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Home/>} />
          <Route path='/rates' element={<Rates/>} />
        </Route>
        <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      
    </>
)};
