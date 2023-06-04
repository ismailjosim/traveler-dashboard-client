import React from 'react'
import PageHeading from '../../utilities/PageHeading'
import CTA from '../Home/HomeSections/CTA'
import Stars from '../Shared/Stars'
import AllDestinations from './Sections/AllDestinations'

const Destinations = () => {
	return (
		<div>
			<PageHeading headTitle={ 'destination list' } />
			<AllDestinations />
			<Stars />
			<CTA />
		</div>
	)
}

export default Destinations
