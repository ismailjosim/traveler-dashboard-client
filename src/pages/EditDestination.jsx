import { useParams } from 'react-router-dom'
import { useGetSingleDestinationQuery } from '../redux/features/api/apiSlice'
import DestinationLoading from '../utilities/DestinationLoading'
import DestinationError from '../utilities/DestinationError'
import DestinationForm from '../components/UpdateDestination/DestinationForm'


const EditDestination = () => {
	const { id } = useParams()
	const { isLoading, isError, error, data } = useGetSingleDestinationQuery(id)

	if (isLoading) return <DestinationLoading />
	if (isError) return <DestinationError message={error} />

	return (
		<section className='p-10'>
			<h3 className='text-3xl text-center mb-5 font-bold'>Modify Destination</h3>
			<DestinationForm data={data.destination} id={id} />
		</section>
	)
}

export default EditDestination
