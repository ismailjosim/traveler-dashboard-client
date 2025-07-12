const DescriptionInput = ({ register, errors }) => (
	<div className='form-control w-full'>
		<label className='label font-semibold'>Description</label>
		<textarea
			className='textarea textarea-primary h-40'
			style={{ resize: 'none', overflow: 'auto' }}
			{...register('description', { required: 'Description is required' })}
		/>
		{errors.description && <p className='text-error mt-1'>{errors.description.message}</p>}
	</div>
)

export default DescriptionInput
