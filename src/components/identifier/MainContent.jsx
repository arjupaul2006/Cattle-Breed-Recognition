import React from 'react';
import LeftSideUI from './Left';
import RightSideUI from './Right';

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 md:p-8 lg:mt-20 mt-25">
      <div className="flex-1 bg-white md:rounded-xl shadow-lg flex flex-col md:flex-row h-full">
        <LeftSideUI/>
        <RightSideUI/>
      </div>
    </div>
  );
};

export default MainLayout;