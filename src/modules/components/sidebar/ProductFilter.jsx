import React, { useState } from "react";
import Button from "../ui/button/Button";
import { Form, Dropdown } from "react-bootstrap";
import ButtonComp from "../ui/button/Button";
import './_sidebar.scss'

export default function SideBarFilter(){
    const categories = ['Tất cả', 'Danh mục 1', 'Danh mục 2', 'Danh mục 3']
    const brands = ['Tất cả', 'Thương hiệu 1', 'Thương hiệu 2', 'Thương hiệu 3']
    const labels = ['Tất cả', 'Nhãn 1', 'Nhãn 2', 'Nhãn 3']
    const [labelsCollapse, setLabelsCollapse] = useState(false)
    const [brandsCollapse, setBrandsCollapse] = useState(false)
    const [categoriesCollapse, setCategoriesCollapse] = useState(false)
    return(
        <div className="sidebar-filter">
            <div className="filter__body">
                <div className="filter__item">
                    <ButtonComp onClick={()=>{setCategoriesCollapse(!categoriesCollapse)}} className="title">
                        <span>Danh mục</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </ButtonComp>
                    <div className={categoriesCollapse == true ? "options--collapsed" : "options"}>
                        {categories.map((category, index) => (
                            <div className="option" key={index}>
                                <Form.Check
                                key={index}
                                label={category}
                                name='Categories'
                                type='radio'
                                id={`category${index}`}
                                defaultChecked={index == 0}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="filter__item">
                    <ButtonComp onClick={()=>{setBrandsCollapse(!brandsCollapse)}} className="title">
                        <span>Thương hiệu</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </ButtonComp>
                    <div className={brandsCollapse == true ? "options--collapsed" : "options"}>
                        {brands.map((item, index) => (
                            <div className="option" key={index}>
                                <Form.Check
                                key={index}
                                label={item}
                                name='Brands'
                                type='radio'
                                id={`brand-${index}`}
                                defaultChecked={index == 0}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="filter__item">
                    <ButtonComp onClick={()=>{setLabelsCollapse(!labelsCollapse)}} className="title">
                        <span>Nhãn</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </ButtonComp>
                    <div className={labelsCollapse == true ? "options--collapsed" : "options"}>
                        {labels.map((item, index) => (
                            <div className="option" key={index}>
                                <Form.Check
                                key={index}
                                label={item}
                                name='Prices'
                                type='radio'
                                id={`price-${index}`}
                                defaultChecked={index == 0}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}