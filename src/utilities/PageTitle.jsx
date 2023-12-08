import React from 'react';

const PageTitle = ({ title }) => {
    return (
        <div className="bg-transparent pt-3 mr-5">
            <div className="rounded-t-3xl bg-primary p-4 text-2xl text-white">
                <h1 className="font-bold pl-2">{ title }</h1>
            </div>
        </div>
    );
};

export default PageTitle;
