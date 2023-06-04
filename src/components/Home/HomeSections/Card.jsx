import React from 'react'
import '../../../styles/Custom.css'

const Card = ({ data }) => {
	const { icon, title, subtitle, review } = data
	return (
		<div className='why-us-item p-12 border-2 rounded-xl bg-white'>
			<div className='why-us-content'>
				<p className='text-6xl text-primary mb-3 icon'>{ icon }</p>
				<h4 className='font-semibold text-xl leading-6'>{ title }</h4>
				<p className='my-4 text-base font-normal'>{ subtitle }</p>
				<p className='mb-0 text-primary card_review'>{ review }</p>
			</div>
		</div>
	)
}

export default Card
