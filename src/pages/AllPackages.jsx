import React from 'react';
import { useGetTourPackagesQuery } from '../redux/features/api/apiSlice';
import DestinationLoading from '../utilities/DestinationLoading';
import DestinationError from '../utilities/DestinationError';
import DestinationTable from '../components/Destinations/DestinationTable';

const AllPackages = () => {
    const { isLoading, data, isError, error } = useGetTourPackagesQuery();

    let content;
    if (isLoading) {
        content = <DestinationLoading />
    }

    if (!isLoading && isError) {
        content = <DestinationError message={ error } />
    }
    if (!isLoading || !isError || data?.packages > 0) {
        content = <DestinationTable destinations={ data?.packages } />
    }



    return (
        <>
            { content }
        </>
    );
};

export default AllPackages;
