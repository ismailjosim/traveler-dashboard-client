import '../../../styles/Custom.css'
import TourCard from '../../TourPackages/TourSections/TourCard';
import SectionHeading from '../../../utilities/SectionHeading';
import Button from './../../../utilities/Button';
import { useGetTourPackagesQuery } from '../../../redux/features/api/apiSlice';
import Loading from '../../../utilities/Loading';
import Error from '../../../utilities/Error';


const heading = {
	subHeading: 'Top Pick',
	headingOne: "Best",
	headingTwo: 'Tour Packages',
	describe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
}

const TopPackages = () => {
	const { data, isError, isLoading } = useGetTourPackagesQuery();

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
		content = data?.packages.slice(0, 3).map((item, idx) => <TourCard key={ idx } item={ item } />)
	}


	return (
		<section>
			<SectionHeading heading={ heading }></SectionHeading>
			<div className='w-11/12 mx-auto'>
				{ content }
			</div>
			<div className='text-center'>
				<Button btnText={ 'Explore more' } destination={ '/packages' }></Button>
			</div>
		</section>
	)
}

export default TopPackages
