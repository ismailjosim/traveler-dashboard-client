import '../../../styles/Custom.css'
import DestinationCard from './DestinationCard'
import { useGetDestinationsQuery } from '../../../redux/features/api/apiSlice'
import Loading from '../../../utilities/Loading'
import Error from '../../../utilities/Error'


const AllDestinations = () => {
	const { data, isError, isLoading, } = useGetDestinationsQuery();

	let content = null;

	if (isLoading) {
		content = <Loading />
	}

	if (!isLoading && isError) {
		content = <Error message="No Videos Found!" />
	}

	if (!isLoading && !isError && data.length === 0) {
		content = <Error message="No Videos Found!"></Error>
	} else {
		content = data?.destinations.map(item => <DestinationCard item={ item } key={ item._id } />)
	}


	return (
		<div className='mb-10'>
			<div className='w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>{ content }</div>
		</div>
	)
}

export default AllDestinations
