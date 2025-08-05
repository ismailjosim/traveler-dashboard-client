import ShowIcon from './ShowIcon'

const MetricCard = ({ info }) => {
    const { id, name, value, cardStyles, iconColor } = info || {}

    return (
        <div className='w-full md:w-1/2 xl:w-1/3 p-6'>
            <div
                className={ `bg-gradient-to-b border-b-4 rounded-lg shadow-xl p-5 ${ cardStyles }` }
            >
                <div className='flex flex-row items-center'>
                    { <ShowIcon id={ id } iconColor={ iconColor } /> }
                    <div className='flex-1 text-right md:text-center'>
                        <h2 className='font-bold uppercase text-gray-600'>{ name }</h2>
                        <p className='font-bold text-3xl'>{ value }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MetricCard
