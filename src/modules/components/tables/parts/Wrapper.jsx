import React, { useState } from 'react';

const itemsPerPage = 10; // Số lượng item mỗi trang

const Wrapper = ({children}) => {

  return (
    <div className='table-list'>
      {children}
    </div>
  );
};

export default Wrapper;