import React, { useState } from 'react'
import { BsFillSendFill } from 'react-icons/bs'
import Tags from '../components/AddDestination/Tags'
import { useForm } from "react-hook-form"
import { uploadImage } from '../utilities/uploadImage'
import { toast } from 'react-toastify'



const suggestions = [
    'Air Fares',
    '3 Nights Hotel',
    'Tour Guide',
    'Entrance Fees',
    'Guide Service Fee',
    'Driver Service Fee',
    'Private Expenses',
    'Room Service Fees',
]

// const imageHostKey = process.env.REACT_APP_imgbb_key
const AddDestination = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()
    const [excludedTags, setExcludedTags] = useState(suggestions)
    const [includedTags, setIncludedTags] = useState([])
    const [loading, setLoading] = useState(false)


    const handleAdd = data => {
        setLoading(true);

        const title = data.title;
        const thumbnailImage = data.thumbnail;
        const touristPlace = data.touristPlace;
        const city = data.city;
        const country = data.country;
        const selectPackages = data.selectPackages;
        const galleryImage = data.gallery;
        const description = data.description;

        const photo = thumbnailImage[0];

        // Upload the thumbnail image
        uploadImage(photo)
            .then(thumbnail => {
                const fileList = galleryImage;
                const filesArray = [...fileList];

                // Upload the gallery images
                const uploadPromises = filesArray.map((single, index) =>
                    uploadImage(single)
                );

                // Wait for all gallery images to be uploaded
                Promise.all(uploadPromises)
                    .then(galleryImages => {
                        const formData = {
                            title,
                            thumbnail,
                            touristPlace,
                            city,
                            country,
                            selectPackages,
                            gallery: galleryImages,
                            description,
                            includedTags,
                            excludedTags
                        };

                        console.log(formData);
                        fetch("http://localhost:5000/destinations", {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(formData)
                        })
                            .then(res => res.json())
                            .then(data => {

                                if (data.destination.acknowledged) {
                                    toast.success('Destination Added Successfully 🎉', { autoClose: 1000 })
                                    reset();
                                    setLoading(false)
                                }
                            })
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error('Error uploading gallery images:', error);
                        setLoading(false);
                    });
            })
            .catch(error => {
                console.error('Error uploading thumbnail image:', error);
                setLoading(false);
            });
    };

    return (
        <section>
            <div className='p-10'>
                <div className='text-center'>
                    <h3 className='text-3xl mb-5'>
                        <strong>Add New Destination</strong>
                    </h3>
                </div>
                <form
                    onSubmit={ handleSubmit(handleAdd) }
                    className='grid md:grid-cols-2 grid-cols-1 gap-5'
                >
                    <div className='form-control w-full'>
                        <label className='label font-poppins font-semibold'>
                            Destination Title
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Destination Name'
                            name='title'
                            className='input input-bordered input-primary w-full'
                            { ...register('title', {
                                required: 'title is Required',
                            }) }
                        />
                        { errors.title && <p className='text-error font-medium mt-1'>{ errors.title.message }</p> }
                    </div>

                    <div className='form-control w-full'>
                        <label className='label font-poppins font-semibold'>
                            Thumbnail
                        </label>
                        <input
                            type='file'
                            name='thumbnail'
                            className='file-input file-input-bordered file-input-primary w-full'
                            { ...register('thumbnail', {
                                required: 'thumbnail is Required',
                            }) }
                        />
                        { errors.thumbnail && <p className='text-error font-medium mt-1'>{ errors.thumbnail.message }</p> }
                    </div>
                    <div className='form-control w-full'>
                        <label className='label font-poppins font-semibold'>
                            Total Tourist Place
                        </label>
                        <input
                            type='number'
                            name='touristPlace'
                            placeholder='Enter Amount'
                            className='input input-bordered w-full input-primary'
                            { ...register('touristPlace', {
                                required: 'touristPlace is Required',
                            }) }
                        />
                        { errors.touristPlace && <p className='text-error font-medium mt-1'>{ errors.touristPlace.message }</p> }
                    </div>
                    <div className='form-control w-full'>
                        <label className='label font-poppins font-semibold capitalize'>
                            City Name
                        </label>
                        <input
                            type='text'
                            name='city'
                            placeholder='Enter City Name'
                            className='input input-bordered w-full input-primary'
                            { ...register('city', {
                                required: 'city is Required',
                            }) }
                        />
                        { errors.city && <p className='text-error font-medium mt-1'>{ errors.city.message }</p> }
                    </div>

                    <div className='form-control w-full'>
                        <label className='label font-poppins font-semibold'>
                            Select Country
                        </label>
                        <select
                            className='select select-primary w-full text-base'
                            defaultValue={ 'Select Location' }
                            { ...register('country', {
                                required: 'country is Required',
                            }) }
                        >
                            <option disabled>Select Location</option>
                            <option value='Afghanistan'>Afghanistan</option>
                            <option value='Åland Islands'>Åland Islands</option>
                            <option value='Albania'>Albania</option>
                            <option value='Algeria'>Algeria</option>
                            <option value='American Samoa'>American Samoa</option>
                            <option value='Andorra'>Andorra</option>
                            <option value='Angola'>Angola</option>
                            <option value='Anguilla'>Anguilla</option>
                            <option value='Antarctica'>Antarctica</option>
                            <option value='Argentina'>Argentina</option>
                            <option value='Armenia'>Armenia</option>
                            <option value='Aruba'>Aruba</option>
                            <option value='Australia'>Australia</option>
                            <option value='Austria'>Austria</option>
                            <option value='Azerbaijan'>Azerbaijan</option>
                            <option value='Bahamas'>Bahamas</option>
                            <option value='Bahrain'>Bahrain</option>
                            <option value='Bangladesh'>Bangladesh</option>
                            <option value='Barbados'>Barbados</option>
                            <option value='Belarus'>Belarus</option>
                            <option value='Belgium'>Belgium</option>
                            <option value='Belize'>Belize</option>
                            <option value='Benin'>Benin</option>
                            <option value='Bermuda'>Bermuda</option>
                            <option value='Bhutan'>Bhutan</option>
                            <option value='Bolivia'>Bolivia</option>
                            <option value='Botswana'>Botswana</option>
                            <option value='Bouvet Island'>Bouvet Island</option>
                            <option value='Brazil'>Brazil</option>
                            <option value='Bulgaria'>Bulgaria</option>
                            <option value='Burkina Faso'>Burkina Faso</option>
                            <option value='Burundi'>Burundi</option>
                            <option value='Cambodia'>Cambodia</option>
                            <option value='Cameroon'>Cameroon</option>
                            <option value='Canada'>Canada</option>
                            <option value='Cape Verde'>Cape Verde</option>
                            <option value='Cayman Islands'>Cayman Islands</option>
                            <option value='Chad'>Chad</option>
                            <option value='Chile'>Chile</option>
                            <option value='China'>China</option>
                            <option value='Colombia'>Colombia</option>
                            <option value='Comoros'>Comoros</option>
                            <option value='Congo'>Congo</option>
                            <option value='Cook Islands'>Cook Islands</option>
                            <option value='Costa Rica'>Costa Rica</option>
                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                            <option value='Croatia'>Croatia</option>
                            <option value='Cuba'>Cuba</option>
                            <option value='Cyprus'>Cyprus</option>
                            <option value='Czech Republic'>Czech Republic</option>
                            <option value='Denmark'>Denmark</option>
                            <option value='Djibouti'>Djibouti</option>
                            <option value='Dominica'>Dominica</option>
                            <option value='Ecuador'>Ecuador</option>
                            <option value='Egypt'>Egypt</option>
                            <option value='El Salvador'>El Salvador</option>
                            <option value='Eritrea'>Eritrea</option>
                            <option value='Estonia'>Estonia</option>
                            <option value='Ethiopia'>Ethiopia</option>
                            <option value='Faroe Islands'>Faroe Islands</option>
                            <option value='Fiji'>Fiji</option>
                            <option value='Finland'>Finland</option>
                            <option value='France'>France</option>
                            <option value='French Guiana'>French Guiana</option>
                            <option value='Gabon'>Gabon</option>
                            <option value='Gambia'>Gambia</option>
                            <option value='Georgia'>Georgia</option>
                            <option value='Germany'>Germany</option>
                            <option value='Ghana'>Ghana</option>
                            <option value='Gibraltar'>Gibraltar</option>
                            <option value='Greece'>Greece</option>
                            <option value='Greenland'>Greenland</option>
                            <option value='Grenada'>Grenada</option>
                            <option value='Guadeloupe'>Guadeloupe</option>
                            <option value='Guam'>Guam</option>
                            <option value='Guatemala'>Guatemala</option>
                            <option value='Guernsey'>Guernsey</option>
                            <option value='Guinea'>Guinea</option>
                            <option value='Guinea-bissau'>Guinea-bissau</option>
                            <option value='Guyana'>Guyana</option>
                            <option value='Haiti'>Haiti</option>
                            <option value='Honduras'>Honduras</option>
                            <option value='Hong Kong'>Hong Kong</option>
                            <option value='Hungary'>Hungary</option>
                            <option value='Iceland'>Iceland</option>
                            <option value='India'>India</option>
                            <option value='Indonesia'>Indonesia</option>
                            <option value='Iraq'>Iraq</option>
                            <option value='Ireland'>Ireland</option>
                            <option value='Isle of Man'>Isle of Man</option>
                            <option value='Israel'>Israel</option>
                            <option value='Italy'>Italy</option>
                            <option value='Jamaica'>Jamaica</option>
                            <option value='Japan'>Japan</option>
                            <option value='Jersey'>Jersey</option>
                            <option value='Jordan'>Jordan</option>
                            <option value='Kazakhstan'>Kazakhstan</option>
                            <option value='Kenya'>Kenya</option>
                            <option value='Kiribati'>Kiribati</option>
                            <option value='Kuwait'>Kuwait</option>
                            <option value='Kyrgyzstan'>Kyrgyzstan</option>
                            <option value='Latvia'>Latvia</option>
                            <option value='Lebanon'>Lebanon</option>
                            <option value='Lesotho'>Lesotho</option>
                            <option value='Liberia'>Liberia</option>
                            <option value='Liechtenstein'>Liechtenstein</option>
                            <option value='Lithuania'>Lithuania</option>
                            <option value='Luxembourg'>Luxembourg</option>
                            <option value='Macao'>Macao</option>
                            <option value='Madagascar'>Madagascar</option>
                            <option value='Malawi'>Malawi</option>
                            <option value='Malaysia'>Malaysia</option>
                            <option value='Maldives'>Maldives</option>
                            <option value='Mali'>Mali</option>
                            <option value='Malta'>Malta</option>
                            <option value='Martinique'>Martinique</option>
                            <option value='Mauritania'>Mauritania</option>
                            <option value='Mauritius'>Mauritius</option>
                            <option value='Mayotte'>Mayotte</option>
                            <option value='Mexico'>Mexico</option>
                            <option value='Monaco'>Monaco</option>
                            <option value='Mongolia'>Mongolia</option>
                            <option value='Montenegro'>Montenegro</option>
                            <option value='Montserrat'>Montserrat</option>
                            <option value='Morocco'>Morocco</option>
                            <option value='Mozambique'>Mozambique</option>
                            <option value='Myanmar'>Myanmar</option>
                            <option value='Namibia'>Namibia</option>
                            <option value='Nauru'>Nauru</option>
                            <option value='Nepal'>Nepal</option>
                            <option value='Netherlands'>Netherlands</option>
                            <option value='New Caledonia'>New Caledonia</option>
                            <option value='New Zealand'>New Zealand</option>
                            <option value='Nicaragua'>Nicaragua</option>
                            <option value='Niger'>Niger</option>
                            <option value='Nigeria'>Nigeria</option>
                            <option value='Niue'>Niue</option>
                            <option value='Norfolk Island'>Norfolk Island</option>
                            <option value='Norway'>Norway</option>
                            <option value='Oman'>Oman</option>
                            <option value='Pakistan'>Pakistan</option>
                            <option value='Palau'>Palau</option>
                            <option value='Panama'>Panama</option>
                            <option value='Paraguay'>Paraguay</option>
                            <option value='Peru'>Peru</option>
                            <option value='Philippines'>Philippines</option>
                            <option value='Pitcairn'>Pitcairn</option>
                            <option value='Poland'>Poland</option>
                            <option value='Portugal'>Portugal</option>
                            <option value='Puerto Rico'>Puerto Rico</option>
                            <option value='Qatar'>Qatar</option>
                            <option value='Reunion'>Reunion</option>
                            <option value='Romania'>Romania</option>
                            <option value='Russia'>Russia</option>
                            <option value='Rwanda'>Rwanda</option>
                            <option value='Saint Helena'>Saint Helena</option>
                            <option value='Saint Lucia'>Saint Lucia</option>
                            <option value='Samoa'>Samoa</option>
                            <option value='San Marino'>San Marino</option>
                            <option value='Saudi Arabia'>Saudi Arabia</option>
                            <option value='Senegal'>Senegal</option>
                            <option value='Serbia'>Serbia</option>
                            <option value='Seychelles'>Seychelles</option>
                            <option value='Sierra Leone'>Sierra Leone</option>
                            <option value='Singapore'>Singapore</option>
                            <option value='Slovakia'>Slovakia</option>
                            <option value='Slovenia'>Slovenia</option>
                            <option value='Somalia'>Somalia</option>
                            <option value='South Africa'>South Africa</option>
                            <option value='Spain'>Spain</option>
                            <option value='Sri Lanka'>Sri Lanka</option>
                            <option value='Sudan'>Sudan</option>
                            <option value='Suriname'>Suriname</option>
                            <option value='Swaziland'>Swaziland</option>
                            <option value='Sweden'>Sweden</option>
                            <option value='Switzerland'>Switzerland</option>
                            <option value='Taiwan'>Taiwan</option>
                            <option value='Tajikistan'>Tajikistan</option>
                            <option value='Thailand'>Thailand</option>
                            <option value='Timor-leste'>Timor-leste</option>
                            <option value='Togo'>Togo</option>
                            <option value='Tokelau'>Tokelau</option>
                            <option value='Tonga'>Tonga</option>
                            <option value='Tunisia'>Tunisia</option>
                            <option value='Turkey'>Turkey</option>
                            <option value='Turkmenistan'>Turkmenistan</option>
                            <option value='Tuvalu'>Tuvalu</option>
                            <option value='Uganda'>Uganda</option>
                            <option value='Ukraine'>Ukraine</option>
                            <option value='United Kingdom'>United Kingdom</option>
                            <option value='United States'>United States</option>
                            <option value='Uruguay'>Uruguay</option>
                            <option value='Uzbekistan'>Uzbekistan</option>
                            <option value='Vanuatu'>Vanuatu</option>
                            <option value='Venezuela'>Venezuela</option>
                            <option value='Viet Nam'>Viet Nam</option>
                            <option value='Western Sahara'>Western Sahara</option>
                            <option value='Yemen'>Yemen</option>
                            <option value='Zambia'>Zambia</option>
                            <option value='Zimbabwe'>Zimbabwe</option>
                        </select>
                        { errors.country && <p className='text-error font-medium mt-1'>{ errors.country.message }</p> }
                    </div>

                    <div className='form-control w-full'>
                        <label className='label font-poppins font-semibold'>
                            Select package
                        </label>
                        <select
                            className='select select-primary w-full text-base'
                            defaultValue={ 'Select package' }
                            { ...register('selectPackages', {
                                required: 'selectPackages is Required',
                            }) }
                        >
                            <option disabled>Select package</option>
                            <option value='Basic package'>Basic package</option>
                            <option value='Medium package'>Medium package</option>
                            <option value='Advanced package'>Advanced package</option>
                        </select>
                        { errors.selectPackages && <p className='text-error font-medium mt-1'>{ errors.selectPackages.message }</p> }
                    </div>
                    <div className='form-control w-full flex flex-col gap-3'>
                        <label className='label font-poppins font-semibold'>
                            gallery Image
                        </label>
                        <input
                            type='file'
                            name='gallery'
                            className='file-input file-input-bordered file-input-primary w-full'
                            multiple
                            { ...register('gallery', {
                                required: 'gallery is Required',
                            }) }
                        />
                        { errors.gallery && <p className='text-error font-medium mt-1'>{ errors.gallery.message }</p> }
                        <Tags
                            suggestions={ suggestions }
                            excludedTags={ excludedTags }
                            setExcludedTags={ setExcludedTags }
                            includedTags={ includedTags }
                            setIncludedTags={ setIncludedTags }
                        />
                    </div>
                    <div className='form-control'>
                        <label className='label font-poppins font-semibold'>
                            Descriptions
                        </label>
                        <textarea
                            className='textarea textarea-primary h-40'
                            name='descriptions'
                            placeholder='Details'
                            style={ { resize: 'none', overflow: 'auto' } }
                            { ...register('description', {
                                required: 'description is Required',
                            }) }
                        ></textarea>
                        { errors.description && <p className='text-error font-medium mt-1'>{ errors.description.message }</p> }
                    </div>
                    <div className='form-control w-full mt-10 md:col-span-2 md:flex justify-end items-end'>
                        <button
                            disabled={ loading }
                            type='submit'
                            className='btn btn-primary text-white'
                        >
                            <span>Add Now</span>
                            <BsFillSendFill />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddDestination
