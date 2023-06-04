import { FaBars, FaTh } from 'react-icons/fa'
import PageHeading from '../../utilities/PageHeading'
import { useGetBlogsQuery } from '../../redux/features/api/apiSlice'
import Loading from '../../utilities/Loading'
import Error from '../../utilities/Error'
import SingleArticle from './SingleArticle'

const Blogs = () => {
	const { data, isError, isLoading } = useGetBlogsQuery();

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
		content = data?.blogs.map(blog => <SingleArticle blog={ blog } key={ blog._id } />)
	}




	return (
		<div>
			<PageHeading headTitle={ 'latest blogs' }></PageHeading>
			<div className='w-11/12 mx-auto grid grid-cols-3 gap-5'>
				<div className='col-span-2'>
					<div className='flex justify-between items-center mb-5'>
						<h3>Show 1-5 of { data?.blogs.length } results</h3>
						<div className='flex gap-2'>
							<div className='active:bg-secondary bg-neutral p-2 rounded-md text-white hover:bg-secondary transition-all duration-500'>
								<FaBars />
							</div>
							<div className='active:bg-secondary bg-neutral p-2 rounded-md text-white hover:bg-secondary transition-all duration-500'>
								<FaTh />
							</div>
						</div>
						<select className='select select-bordered w-full max-w-xs'>
							<option>Sort By</option>
							<option>Date</option>
							<option>category</option>
							<option>average rating</option>
						</select>
					</div>
					<div>
						{ content }
					</div>
				</div>
				<div className='col-span-1'>
					<div className='card w-96 bg-base-100 shadow-xl'>
						<figure>
							<img src='https://placeimg.com/400/225/arch' alt='Shoes' />
						</figure>
						<div className='card-body'>
							<h2 className='card-title'>Shoes!</h2>
							<p>If a dog chews shoes whose shoes does he choose?</p>
							<div className='card-actions justify-end'>
								<button className='btn btn-primary'>Buy Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blogs
