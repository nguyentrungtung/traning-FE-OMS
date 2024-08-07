import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import graph_chart_icon from '../../../../public/assets/images/icons/system/graph-chart.svg'
import shopping_bag_icon from '../../../../public/assets/images/icons/system/shopping-bag.svg'
import people_icon from '../../../../public/assets/images/icons/system/people.svg'
import receipt_icon from '../../../../public/assets/images/icons/system/receipt.svg'
import click_on_shopping_bag_icon from '../../../../public/assets/images/icons/system/shopping-bag__map-direction.svg'
import cart_icon from '../../../../public/assets/images/icons/system/cart.svg'
import { Dropdown } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <>
    <Navbar>
      <Nav>
        <Nav.Link className='nav-item' href="/#general">
          <img src={graph_chart_icon} alt='graph-chart-icon'/>Tổng quan
        </Nav.Link>
        <Dropdown>
          <Dropdown.Toggle className='nav-item nav-link' href="#">
            <img src={shopping_bag_icon} alt='graph-chart-icon'/>Hàng hoá
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/newCRM/">Sản phẩm</Dropdown.Item>
            <Dropdown.Item href="/newCRM/products/labels">Nhãn sản phẩm</Dropdown.Item>
            <Dropdown.Item href="/newCRM/products/groups">Nhóm sản phẩm</Dropdown.Item>
            <Dropdown.Item href="/newCRM/products/attributes">Thuộc tính</Dropdown.Item>
            <Dropdown.Item href="/newCRM/products/tags">Thẻ</Dropdown.Item>
            <Dropdown.Item href="/newCRM/products/categories">Danh mục</Dropdown.Item>
            <Dropdown.Item href="/newCRM/products/brands">Thương hiệu</Dropdown.Item>
            <Dropdown.Item href="/newCRM/products/coupons">Mã giảm giá</Dropdown.Item>
            <Dropdown.Item href="#">Đánh giá</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Link className='nav-item' href="#partners">
          <img src={people_icon} alt='graph-chart-icon'/>Đối tác
        </Nav.Link>
        <Nav.Link className='nav-item' href="#orders">
          <img src={receipt_icon} alt='graph-chart-icon'/>Đơn hàng
        </Nav.Link>
        <Dropdown>
          <Dropdown.Toggle className='nav-item nav-link' href="#">
            <img src={click_on_shopping_bag_icon} alt='graph-chart-icon'/>Bán online
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/selling/on-website">Website bán hàng</Dropdown.Item>
            <Dropdown.Item href="/selling/on-ecommerce">Bán trên sàn TMĐT</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Nav.Link className='nav-item ms-auto nav-item--cart' href="#selling">
          <img src={cart_icon} alt='graph-chart-icon'/>Bán hàng
        </Nav.Link>
      </Nav>
    </Navbar>
    </>
  );
}

export default NavbarComponent;
