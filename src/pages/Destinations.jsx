import React from 'react';
import { useGetDestinationsQuery } from '../redux/features/api/apiSlice';
import DestinationLoading from '../utilities/DestinationLoading';
import DestinationError from '../utilities/DestinationError';
import NoDataFound from '../utilities/NoDataFound';
import DestinationTable from '../components/Destinations/DestinationTable';

const Destinations = () => {
	const { isLoading, data, isError, error, refetch } = useGetDestinationsQuery();

	let content;


	if (isLoading) {
		return content = <DestinationLoading />
	}
	if (!isLoading && isError) {
		return content = <DestinationError message={ error } />

	}
	if (!isLoading || !isError || data?.destinations.length === 0) {
		return content = <NoDataFound />
	}

	if (!isLoading || !isError || data?.destinations.length > 0) {
		content = <DestinationTable destinations={ data?.destinations } />
	}

	return (<>
		{ content }
	</>)


};

export default Destinations;
