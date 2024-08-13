import { Route, Routes } from 'react-router-dom';

import Home from './home';
import { HOME_ROUTE } from '../helpers/constants/routes';

export default function RoutesRoot() {
  return (
    <>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
      </Routes>
    </>
  );
}
