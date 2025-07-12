const ThumbnailUploader = ({ register, errors, thumbnailPreview, setThumbnailPreview, currentThumbnail }) => (
	<div className='form-control w-full grid grid-cols-3 gap-10 items-center'>
		<div className='col-span-2'>
			<label className='label font-semibold'>Thumbnail</label>
			<input
				type='file'
				className='file-input file-input-bordered file-input-primary w-full'
				{...register('thumbnail')}
				onChange={(e) => {
					const file = e.target.files[0]
					if (file) {
						setThumbnailPreview(URL.createObjectURL(file))
					} else {
						setThumbnailPreview(null)
					}
				}}
			/>
			{errors.thumbnail && <p className='text-error mt-1'>{errors.thumbnail.message}</p>}
		</div>
		<div>
			{thumbnailPreview ? (
				<img src={thumbnailPreview} alt='Preview' className='w-full h-28 object-cover border rounded' />
			) : currentThumbnail && (
				<img src={currentThumbnail} alt='Current' className='w-full h-28 object-cover border rounded' />
			)}
		</div>
	</div>
)

export default ThumbnailUploader
