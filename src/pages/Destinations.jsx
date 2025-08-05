import React from 'react';
import { useGetDestinationsQuery } from '../redux/features/api/apiSlice';
import DestinationLoading from '../utilities/DestinationLoading';
import DestinationError from '../utilities/DestinationError';
import DestinationTable from '../components/Destinations/DestinationTable';

const Destinations = () => {
	const { isLoading, data, isError, error } = useGetDestinationsQuery();

	let content;


	if (isLoading) {
		content = <DestinationLoading />
	}
	if (!isLoading && isError) {
		content = <DestinationError message={ error } />
	}
	if (!isLoading || !isError || data?.destinations > 0) {
		content = <DestinationTable destinations={ data?.destinations } />
	}
	return <>{ content }</>


};

export default Destinations;
