import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Table, Form, Dropdown } from 'react-bootstrap';
// import ButtonComp from '../miscellaneous/button/Button';

export default function TableCompContent({data, itemsPerPage}){
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageClick = (items) => {
      setCurrentPage(items.selected);
    };
    const offset = currentPage * itemsPerPage;
    const currentItems = data.slice(offset, offset + itemsPerPage);
    var getColorAttr = [];
    var getWeightAttr = [];
    data.map((item)=>{
        if(!getColorAttr.includes(item.attr.color)){
            getColorAttr.push(item.attr.color);
        }
        if(!getWeightAttr.includes(item.attr.weight)){
            getWeightAttr.push(item.attr.weight);
        }
    })
    useEffect(()=>{
        window.scroll(0, 0);
    },[currentPage])
    return(
        <div className='table-list__content'>
            <Table className='table--product'>
                <thead>
                    <tr>
                        <th><Form.Check type='checkbox'/></th>
                        <th className='flex-fill'>Tên</th>
                        <th>Thuộc tính con</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Form.Check type='checkbox'/></td>
                        <td>
                            <span>Màu sắc</span>
                        </td>
                        <td className='table-item__attr'>
                            <div className="attr__container">
                                {getColorAttr.map((item, index)=>{
                                    return(
                                        <span key={index} className='success'>{item}</span>
                                    )
                                })}
                            </div>
                        </td>
                        <td>
                        <Dropdown>
                            <Dropdown.Toggle className="btn--action btn--primary text--white">
                                <span>Thao tác</span>
                                <i className="fas fa-sort-down"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                    <tr>
                        <td><Form.Check type='checkbox'/></td>
                        <td>
                            <span>Trọng lượng</span>
                        </td>
                        <td className='table-item__attr'>
                            <div className="attr__container">
                                {getWeightAttr.map((item, index)=>{
                                    return(
                                        <span key={index} className='success'>{item}</span>
                                    )
                                })}
                            </div>
                        </td>
                        <td>
                        <Dropdown>
                            <Dropdown.Toggle className="btn--action btn--primary text--white">
                                <span>Thao tác</span>
                                <i className="fas fa-sort-down"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <ReactPaginate
                previousLabel={<i className="fas fa-chevron-left"></i>}
                nextLabel={<i className="fas fa-chevron-right"></i>}
                breakLabel={"..."}
                pageCount={Math.ceil(1 / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
      </div>
    )
}