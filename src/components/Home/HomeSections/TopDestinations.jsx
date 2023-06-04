
import SectionHeading from '../../../utilities/SectionHeading';
import DestinationCard from '../../Destinations/Sections/DestinationCard';
import Button from '../../../utilities/Button';
import { useGetDestinationsQuery } from '../../../redux/features/api/apiSlice';
import Loading from '../../../utilities/Loading';
import Error from '../../../utilities/Error';
const heading = {
    subHeading: 'Uncover Place',
    headingOne: 'POPULAR',
    headingTwo: 'DESTINATION',
    describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.'
}
const TopDestinations = () => {
    const { data, isError, isLoading } = useGetDestinationsQuery();

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
        content = data?.destinations.slice(0, 6).map(item => <DestinationCard item={ item } key={ item._id } />)
    }



    return (
        <div>
            <SectionHeading heading={ heading } />
            <div className='w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                { content }
            </div>
            <div className='text-center mt-10'>
                <Button btnText={ 'View All' } destination={ '/destinations' }></Button>
            </div>
        </div>
    );
};

export default TopDestinations;
