import '../src/styles/style.scss';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS của Toastify
// import SideBarFilter from './components/partials/sidebar/ProductFilter';
// import TableComp from './components/partials/tables/Wrapper';
// import TableCompHeader from './components/partials/tables/Header';
// import TableCompBody from './components/partials/tables/Body';
// import arrow_up_down_icon from '../public/icons/system/arrow-up-arrow-down.svg'
// import export_icon from '../public/icons/system/file-export-alt.svg'
// import import_icon from '../public/icons/system/file-import-alt.svg'
// import { InputGroup, Form } from 'react-bootstrap';
// import ButtonComp from './components/partials/miscellaneous/button/Button';
// import ButtonRow from './components/partials/tables/ButtonActionRow'
// import TableCompContent from './components/partials/tables/content/Products';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NewCRM from './pages/newCRM';



function App() {
  const NewCRMProductsRoutes = () => (
    <Routes>
      <Route path='/' element={<NewCRM.Home />} />
      <Route path='products/' element={<NewCRM.Products />} />
      <Route path='products/groups' element={<NewCRM.ProductsGroups />} />
      <Route path='products/attributes' element={<NewCRM.ProductsAttributes />} />
      <Route path='products/brands' element={<NewCRM.ProductsBrands />} />
      <Route path='products/categories' element={<NewCRM.ProductsCategories />} />
      <Route path='products/coupons' element={<NewCRM.ProductsCoupons />} />
      <Route path='products/labels' element={<NewCRM.ProductsLabels />} />
      <Route path='products/tags' element={<NewCRM.ProductsTags />} />
    </Routes>
  );
  return (
    <Routes>
      <Route path='/' element={<NewCRM.Home/>}/>
      <Route path='newCRM/*' element={<NewCRMProductsRoutes/>}/>
    </Routes>
  );
}

export default App;