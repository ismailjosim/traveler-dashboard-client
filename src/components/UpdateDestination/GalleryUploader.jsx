const GalleryUploader = ({ register, errors, gallery }) => (
	<div className='form-control w-full'>
		<label className='label font-semibold'>Gallery Image</label>
		<input
			type='file'
			className='file-input file-input-bordered file-input-primary w-full'
			multiple
			{...register('gallery', { required: 'Gallery is Required' })}
		/>
		{errors.gallery && <p className='text-error mt-1'>{errors.gallery.message}</p>}
		{gallery?.length > 0 && (
			<div className='flex gap-2 mt-2'>
				{gallery.map((img, i) => (
					<img key={i} src={img} alt='gallery' className='w-16 object-cover rounded' />
				))}
			</div>
		)}
	</div>
)

export default GalleryUploader
