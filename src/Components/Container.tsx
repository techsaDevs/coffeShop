import React from 'react';
import { IContainer } from '@/lib/types';

const Container = ({ children, className = "" }: IContainer) => {
  return (
    <div className={`
       container
       mx-auto 
       px-4 
       lg:px-[0.625rem]
       xl:max-w-[1260px]
       ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;