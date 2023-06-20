import React, { useState } from 'react';
import { BsFillSendFill } from 'react-icons/bs'
import Tags from '../components/AddDestination/Tags';


const suggestions = [
    "Air Fares",
    "3 Nights Hotel",
    "Tour Guide",
    "Entrance Fees",
    "Guide Service Fee",
    "Driver Service Fee",
    "Private Expenses",
    "Room Service Fees"
];


// const imageHostKey = process.env.REACT_APP_imgbb_key
const AddDestination = () => {
    const [excludedTags, setExcludedTags] = useState(suggestions);
    const [includedTags, setIncludedTags] = useState([]);
    const [loading, setLoading] = useState(false)



    const handleAdd = () => {

    }

    return (
        <section>
            <div className='p-10'>
                <div className='text-center'>
                    <h3 className='text-3xl mb-5'><strong>Add New Destination</strong></h3>
                </div>
                <form action="" onSubmit={ handleAdd } className='grid md:grid-cols-2 grid-cols-1 gap-5'>

                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Destination Title</label>
                        <input type="text" placeholder="Enter Destination Name" name='title' className="input input-bordered input-primary w-full" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Thumbnail</label>
                        <input type="file" name='thumbnail' className="file-input file-input-bordered file-input-primary w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold capitalize">tourist Place</label>
                        <input type="number" name='touristPlace' placeholder="Enter amount" className="input input-bordered w-full input-primary" />
                    </div>











                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Select Country</label>
                        <input type="text" placeholder="Enter Country Name" name='country' className="input input-bordered w-full input-primary" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Total Tourist Place</label>
                        <input type="number" name='touristPlace' placeholder="Enter Amount" className="input input-bordered w-full input-primary" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-poppins font-semibold">Category</label>
                        <input type="number" name='category' placeholder="Enter Category Name" className="input input-bordered w-full input-primary" />
                    </div>
                    <div className="form-control w-full flex flex-col gap-3">
                        <label className="label font-poppins font-semibold">Category</label>
                        <input type="number" name='category' placeholder="Enter Category Name" className="input input-bordered w-full input-primary" />
                        <Tags
                            suggestions={ suggestions }
                            excludedTags={ excludedTags }
                            setExcludedTags={ setExcludedTags }
                            includedTags={ includedTags }
                            setIncludedTags={ setIncludedTags }
                        />
                    </div>
                    <div className="form-control">
                        <label className="label font-poppins font-semibold">Descriptions</label>
                        <textarea className="textarea textarea-primary h-40" name="descriptions" placeholder="Details" style={ { resize: 'none', overflow: 'auto' } }></textarea>
                    </div>
                    <div className="form-control w-full mt-10 md:col-span-2 md:flex justify-end items-end">
                        <button disabled={ loading } type='submit' className='btn btn-primary text-white'>
                            <span>Add Now</span>
                            <BsFillSendFill />
                        </button>
                    </div>
                </form>


            </div>


        </section>
    );
};

export default AddDestination;
