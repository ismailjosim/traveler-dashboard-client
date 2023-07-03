import React from 'react';
import { CiWarning } from 'react-icons/ci'

const NoDataFound = () => {
    return (
        <div
            className="flex items-center justify-center gap-4 w-4/12 mx-auto rounded border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-500">
            <CiWarning size={ 30 } />
            <p className='text-xl font-semibold'>Warning! No Data Found! 😭</p>
        </div>

    );
};

export default NoDataFound;

