import React, {useState, useEffect} from 'react';
import Header from '../../../modules/header/Header';
import { Form } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import ButtonComp from '../../../modules/components/ui/button/Button';
import arrow_up_down_icon from '../../../../public/assets/images/icons/system/arrow-up-arrow-down.svg'
import import_icon from '../../../../public/assets/images/icons/system/file-import-alt.svg'
import export_icon from '../../../../public/assets/images/icons/system/file-export-alt.svg'
import ProductFilter from '../../../modules/components/sidebar/ProductFilter';
import ProductTable from '../../../modules/components/tables/ProductTable';
import ProductsBrands from '../../../modules/components/tables/content/ProductsBrands';

function ProductsBrandsPagination() {
  const [productsData, setProductsData] = useState([]);
  useEffect(()=>{
      fetch('https://api.npoint.io/92f606187714cd9f00a5')
      .then(response => response.json())
      .then(data => setProductsData(data));
  }, [])
  return (
    <div className='HomeManager'>
      <Header />
      <main className='d-flex gap-12px'>
        <div className="main-part flex-fill">
          <ProductTable.Wrapper>
            <ProductTable.Header tableName="Thương Hiệu">
              <div className="input__wrapper">
                <InputGroup>
                  <Form.Control
                    placeholder="Nhập tên, mã sản phẩm"
                    aria-label="Username"
                    aria-describedby="basic-addon1"/>
                  <ButtonComp className="text--white btn--primary"><i className="fas fa-search"></i></ButtonComp>
                </InputGroup>
                <ButtonComp className="btn--little-light-primary"><img src={arrow_up_down_icon} alt="" /></ButtonComp>
              </div>
              <ProductTable.ButtonActionRow>
                <ButtonComp className="btn--primary btn--menu-action text--white">
                  <i className="fas fa-plus"></i>
                  <span>Thêm mới</span>
                </ButtonComp>
                <ButtonComp className="border--primary btn--menu-action text--primary">
                  <img src={import_icon}></img>
                  <span>Nhập sản phẩm</span>
                </ButtonComp>
                <ButtonComp className="border--primary btn--menu-action text--primary">
                  <img src={export_icon}></img>
                  <span>Xuất sản phẩm</span>
                </ButtonComp>
              </ProductTable.ButtonActionRow>
            </ProductTable.Header>
            <ProductTable.Body>
              <ProductsBrands data={productsData} itemsPerPage={10}/>
            </ProductTable.Body>
          </ProductTable.Wrapper>
        </div>
      </main>
    </div>
  );
}

export default ProductsBrandsPagination;