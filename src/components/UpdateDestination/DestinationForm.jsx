import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { BsFillSendFill } from 'react-icons/bs'
import { uploadImage } from '../../utilities/uploadImage'
import { useUpdateDestinationMutation } from '../../redux/features/api/apiSlice'
import ThumbnailUploader from './ThumbnailUploader'
import DestinationSelects from './DestinationSelects'
import GalleryUploader from './GalleryUploader'
import Tags from '../AddDestination/Tags'
import DescriptionInput from './DescriptionInput'
import { useNavigate } from 'react-router-dom'


const suggestions = [
	'Air Fares', '3 Nights Hotel', 'Tour Guide', 'Entrance Fees',
	'Guide Service Fee', 'Driver Service Fee', 'Private Expenses',
	'Room Service Fees',
]

const DestinationForm = ({ data, id }) => {
	const navigate = useNavigate()
	const [updateDestination] = useUpdateDestinationMutation()
	const [loading, setLoading] = useState(false)
	const [includedTags, setIncludedTags] = useState([])
	const [excludedTags, setExcludedTags] = useState(suggestions)
	const [thumbnailPreview, setThumbnailPreview] = useState(null)
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm()

	useEffect(() => {
		if (data) {
			const {
				title, touristPlace, city, country,
				selectPackages, description, includedTags: included, excludedTags: excluded,
			} = data

			reset({ title, touristPlace, city, country, selectPackages, description })
			setIncludedTags(included || [])
			setExcludedTags(excluded || suggestions.filter(tag => !included?.includes(tag)))
		}
	}, [data, reset])

	const onSubmit = async (formData) => {
		setLoading(true)
		try {
			let thumbnailUrl = data.thumbnail
			let galleryUrls = data.gallery

			if (formData.thumbnail.length) {
				thumbnailUrl = await uploadImage(formData.thumbnail[0])
			}
			if (formData.gallery.length) {
				galleryUrls = await Promise.all([...formData.gallery].map(uploadImage))
			}

			const updated = {
				...formData,
				thumbnail: thumbnailUrl,
				gallery: galleryUrls,
				includedTags,
				excludedTags,
			}

			const result = await updateDestination({ id, data: updated })
			if (result?.data?.acknowledged || result?.data?.modifiedCount) {
				toast.success('Destination Updated Successfully 🎉', { autoClose: 1000 })
				navigate('/destinations')
			}
		} catch (err) {
			toast.error('Something went wrong')
			console.error(err)
		} finally {
			setLoading(false)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='grid md:grid-cols-2 gap-5'>
			{/* Title */}
			<div className='form-control w-full'>
				<label className='label font-semibold'>Destination Title</label>
				<input
					type='text'
					className='input input-bordered input-primary w-full'
					{...register('title', { required: 'Title is Required' })}
				/>
				{errors.title && <p className='text-error mt-1'>{errors.title.message}</p>}
			</div>

			<ThumbnailUploader
				register={register}
				errors={errors}
				thumbnailPreview={thumbnailPreview}
				setThumbnailPreview={setThumbnailPreview}
				currentThumbnail={data?.thumbnail}
			/>

			{/* Tourist Place */}
			<div className='form-control w-full'>
				<label className='label font-semibold'>Total Tourist Place</label>
				<input
					type='number'
					className='input input-bordered input-primary w-full'
					{...register('touristPlace', { required: 'touristPlace is Required' })}
				/>
				{errors.touristPlace && <p className='text-error mt-1'>{errors.touristPlace.message}</p>}
			</div>

			{/* City */}
			<div className='form-control w-full'>
				<label className='label font-semibold'>City Name</label>
				<input
					type='text'
					className='input input-bordered input-primary w-full'
					{...register('city', { required: 'City is Required' })}
				/>
				{errors.city && <p className='text-error mt-1'>{errors.city.message}</p>}
			</div>

			<DestinationSelects register={register} errors={errors} />
			<GalleryUploader register={register} errors={errors} gallery={data?.gallery} />

			<Tags
				suggestions={suggestions}
				includedTags={includedTags}
				excludedTags={excludedTags}
				setIncludedTags={setIncludedTags}
				setExcludedTags={setExcludedTags}
			/>

			<DescriptionInput register={register} errors={errors} />

			<div className='form-control mt-10 md:col-span-2 flex justify-end'>
				<button disabled={loading} type='submit' className='btn btn-primary text-white'>
					Confirm Update <BsFillSendFill />
				</button>
			</div>
		</form>
	)
}

export default DestinationForm
