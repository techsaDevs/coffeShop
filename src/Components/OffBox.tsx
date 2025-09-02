import React from 'react';

interface IOffBox {
    off: number;
    classNames?:
    "px-3 h-7 top-5 right-5 text-base" |
    "px-2 h-5 top-1.5 right-1.5 text-base" |
    "px-2 h-6 top-0 right-0 text-xs";
    // pc | laptop | mobile
}

const OffBox = ({ off , classNames = "px-3 h-7 top-5 right-5 text-base" }: IOffBox) => {
    return (
        <div className={`absolute ${classNames} rounded-full flexCenter bg-orange-300 text-white`}>
            <span className='block -mb-1'>{off}%</span>
        </div>
    );
};

export default OffBox;