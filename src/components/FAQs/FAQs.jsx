import React from 'react'
import PageHeading from '../../utilities/PageHeading'
import Partners from '../Home/HomeSections/Partners'
import Questions from './Questions'
import SubmitQuestion from './SubmitQuestion'

const FAQs = () => {
	return (
		<div>
			<PageHeading headTitle={'faq'}></PageHeading>
			<Questions></Questions>
			<SubmitQuestion></SubmitQuestion>
			<Partners />
		</div>
	)
}

export default FAQs
