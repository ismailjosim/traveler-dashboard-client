import React from 'react';
import PageHeading from '../../utilities/PageHeading';
import { FaPhoneVolume } from 'react-icons/fa'

const Booking = () => {
    return (
        <section>
            <PageHeading headTitle={ "booking" } />
            <div className='w-11/12 mx-auto grid lg:grid-cols-3 gap-10 my-10'>
                {/* Section : Left side Content */ }
                <div className='lg:col-span-2'>
                    {/* TODO: Details Section => Only visible in table and mobile  */ }
                    <div className='bg-slate-50 px-5 py-10 shadow-md rounded-md mb-10 lg:hidden'>
                        <h4 className='bg-primary text-white text-center py-2 rounded-lg uppercase text-lg font-semibold mb-5'>Details</h4>
                        <div>
                            <p className='flex justify-between items-center border-b pb-2'>
                                <span className='font-semibold'>Packages cost</span>
                                <span>$500</span>
                            </p>
                            <p className='flex justify-between items-center border-b py-2'>
                                <span className='font-semibold'>Packages Name</span>
                                <span>Machu Picchu, peru</span>
                            </p>
                            <p className='flex justify-between items-center border-b py-2'>
                                <span className='font-semibold'>Packages cost</span>
                                <span>$500</span>
                            </p>
                            <p className='flex justify-between items-center border-b py-2'>
                                <span className='font-semibold'>Dedicated tour guide</span>
                                <span>$60</span>
                            </p>
                            <p className='flex justify-between items-center border-b py-2'>
                                <span className='font-semibold'>Insurance</span>
                                <span>$40</span>
                            </p>
                            <p className='flex justify-between items-center border-b py-2'>
                                <span className='font-semibold'>Tax</span>
                                <span>15%</span>
                            </p>
                            <p className='flex justify-between items-center pt-5'>
                                <span className='font-semibold'>Total cost</span>
                                <span className='text-primary font-bold'>$580</span>
                            </p>

                        </div>
                    </div>
                    {/* Section : Step 01 */ }
                    <div className='bg-slate-50 px-5 py-10 rounded-lg shadow-md'>
                        <h3 className='text-3xl flex gap-5 items-center font-semibold'>
                            <span className='bg-primary w-14 h-14 text-center rounded-full text-white flex justify-center items-center'>1</span>
                            <span>YOUR DETAILS</span>
                        </h3>
                        <form action="" className='grid lg:grid-cols-2 gap-5'>
                            <div>
                                <label className='label'>First Name*</label>
                                <input
                                    type='text'
                                    placeholder='Full Name'
                                    className='input input-bordered input-success w-full'
                                />
                            </div>
                            <div>
                                <label className='label'>Last Name*</label>
                                <input
                                    type='text'
                                    placeholder='Last Name'
                                    className='input input-bordered input-success w-full'
                                />
                            </div>
                            <div>
                                <label className='label'>Email*</label>
                                <input
                                    type='email'
                                    placeholder='Email Address'
                                    className='input input-bordered input-success w-full'
                                />
                            </div>
                            <div>
                                <label className='label'>Phone*</label>
                                <input
                                    type='number'
                                    placeholder='Phone No.'
                                    className='input input-bordered input-success w-full'
                                />
                            </div>
                            <div>
                                <label className='label'>Gender</label>
                                <select
                                    className='select select-primary w-full text-base'
                                    defaultValue={ 'Select Gender' }
                                >
                                    <option disabled>Select Gender</option>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='others'>Others</option>
                                </select>
                            </div>
                            <div>
                                <label className='label'>Select Country</label>
                                <select
                                    className='select select-primary w-full text-base'
                                    defaultValue={ 'Select Country' }
                                >
                                    <option disabled>Select Country</option>
                                    <option value='Afghanistan'>Afghanistan</option>
                                    <option value='Åland Islands'>Åland Islands</option>
                                    <option value='Albania'>Albania</option>
                                    <option value='Algeria'>Algeria</option>
                                    <option value='American Samoa'>American Samoa</option>
                                    <option value='Andorra'>Andorra</option>
                                    <option value='Angola'>Angola</option>
                                    <option value='Anguilla'>Anguilla</option>
                                    <option value='Antarctica'>Antarctica</option>
                                    <option value='Antigua and Barbuda'>
                                        Antigua and Barbuda
                                    </option>
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
                                    <option value='Bosnia and Herzegovina'>
                                        Bosnia and Herzegovina
                                    </option>
                                    <option value='Botswana'>Botswana</option>
                                    <option value='Bouvet Island'>Bouvet Island</option>
                                    <option value='Brazil'>Brazil</option>
                                    <option value='British Indian Ocean Territory'>
                                        British Indian Ocean Territory
                                    </option>
                                    <option value='Brunei Darussalam'>
                                        Brunei Darussalam
                                    </option>
                                    <option value='Bulgaria'>Bulgaria</option>
                                    <option value='Burkina Faso'>Burkina Faso</option>
                                    <option value='Burundi'>Burundi</option>
                                    <option value='Cambodia'>Cambodia</option>
                                    <option value='Cameroon'>Cameroon</option>
                                    <option value='Canada'>Canada</option>
                                    <option value='Cape Verde'>Cape Verde</option>
                                    <option value='Cayman Islands'>Cayman Islands</option>
                                    <option value='Central African Republic'>
                                        Central African Republic
                                    </option>
                                    <option value='Chad'>Chad</option>
                                    <option value='Chile'>Chile</option>
                                    <option value='China'>China</option>
                                    <option value='Christmas Island'>
                                        Christmas Island
                                    </option>
                                    <option value='Cocos (Keeling) Islands'>
                                        Cocos (Keeling) Islands
                                    </option>
                                    <option value='Colombia'>Colombia</option>
                                    <option value='Comoros'>Comoros</option>
                                    <option value='Congo'>Congo</option>
                                    <option value='Congo, The Democratic Republic of The'>
                                        Congo, The Democratic Republic of The
                                    </option>
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
                                    <option value='Dominican Republic'>
                                        Dominican Republic
                                    </option>
                                    <option value='Ecuador'>Ecuador</option>
                                    <option value='Egypt'>Egypt</option>
                                    <option value='El Salvador'>El Salvador</option>
                                    <option value='Equatorial Guinea'>
                                        Equatorial Guinea
                                    </option>
                                    <option value='Eritrea'>Eritrea</option>
                                    <option value='Estonia'>Estonia</option>
                                    <option value='Ethiopia'>Ethiopia</option>
                                    <option value='Falkland Islands (Malvinas)'>
                                        Falkland Islands (Malvinas)
                                    </option>
                                    <option value='Faroe Islands'>Faroe Islands</option>
                                    <option value='Fiji'>Fiji</option>
                                    <option value='Finland'>Finland</option>
                                    <option value='France'>France</option>
                                    <option value='French Guiana'>French Guiana</option>
                                    <option value='French Polynesia'>
                                        French Polynesia
                                    </option>
                                    <option value='French Southern Territories'>
                                        French Southern Territories
                                    </option>
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
                                    <option value='Heard Island and Mcdonald Islands'>
                                        Heard Island and Mcdonald Islands
                                    </option>
                                    <option value='Holy See (Vatican City State)'>
                                        Holy See (Vatican City State)
                                    </option>
                                    <option value='Honduras'>Honduras</option>
                                    <option value='Hong Kong'>Hong Kong</option>
                                    <option value='Hungary'>Hungary</option>
                                    <option value='Iceland'>Iceland</option>
                                    <option value='India'>India</option>
                                    <option value='Indonesia'>Indonesia</option>
                                    <option value='Iran, Islamic Republic of'>
                                        Iran, Islamic Republic of
                                    </option>
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
                                    <option value="Korea, Democratic People's Republic of">
                                        Korea, Democratic People's Republic of
                                    </option>
                                    <option value='Korea, Republic of'>
                                        Korea, Republic of
                                    </option>
                                    <option value='Kuwait'>Kuwait</option>
                                    <option value='Kyrgyzstan'>Kyrgyzstan</option>
                                    <option value="Lao People's Democratic Republic">
                                        Lao People's Democratic Republic
                                    </option>
                                    <option value='Latvia'>Latvia</option>
                                    <option value='Lebanon'>Lebanon</option>
                                    <option value='Lesotho'>Lesotho</option>
                                    <option value='Liberia'>Liberia</option>
                                    <option value='Libyan Arab Jamahiriya'>
                                        Libyan Arab Jamahiriya
                                    </option>
                                    <option value='Liechtenstein'>Liechtenstein</option>
                                    <option value='Lithuania'>Lithuania</option>
                                    <option value='Luxembourg'>Luxembourg</option>
                                    <option value='Macao'>Macao</option>
                                    <option value='Macedonia, The Former Yugoslav Republic of'>
                                        Macedonia, The Former Yugoslav Republic of
                                    </option>
                                    <option value='Madagascar'>Madagascar</option>
                                    <option value='Malawi'>Malawi</option>
                                    <option value='Malaysia'>Malaysia</option>
                                    <option value='Maldives'>Maldives</option>
                                    <option value='Mali'>Mali</option>
                                    <option value='Malta'>Malta</option>
                                    <option value='Marshall Islands'>
                                        Marshall Islands
                                    </option>
                                    <option value='Martinique'>Martinique</option>
                                    <option value='Mauritania'>Mauritania</option>
                                    <option value='Mauritius'>Mauritius</option>
                                    <option value='Mayotte'>Mayotte</option>
                                    <option value='Mexico'>Mexico</option>
                                    <option value='Micronesia, Federated States of'>
                                        Micronesia, Federated States of
                                    </option>
                                    <option value='Moldova, Republic of'>
                                        Moldova, Republic of
                                    </option>
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
                                    <option value='Netherlands Antilles'>
                                        Netherlands Antilles
                                    </option>
                                    <option value='New Caledonia'>New Caledonia</option>
                                    <option value='New Zealand'>New Zealand</option>
                                    <option value='Nicaragua'>Nicaragua</option>
                                    <option value='Niger'>Niger</option>
                                    <option value='Nigeria'>Nigeria</option>
                                    <option value='Niue'>Niue</option>
                                    <option value='Norfolk Island'>Norfolk Island</option>
                                    <option value='Northern Mariana Islands'>
                                        Northern Mariana Islands
                                    </option>
                                    <option value='Norway'>Norway</option>
                                    <option value='Oman'>Oman</option>
                                    <option value='Pakistan'>Pakistan</option>
                                    <option value='Palau'>Palau</option>
                                    <option value='Palestinian Territory, Occupied'>
                                        Palestinian Territory, Occupied
                                    </option>
                                    <option value='Panama'>Panama</option>
                                    <option value='Papua New Guinea'>
                                        Papua New Guinea
                                    </option>
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
                                    <option value='Russian Federation'>
                                        Russian Federation
                                    </option>
                                    <option value='Rwanda'>Rwanda</option>
                                    <option value='Saint Helena'>Saint Helena</option>
                                    <option value='Saint Kitts and Nevis'>
                                        Saint Kitts and Nevis
                                    </option>
                                    <option value='Saint Lucia'>Saint Lucia</option>
                                    <option value='Saint Pierre and Miquelon'>
                                        Saint Pierre and Miquelon
                                    </option>
                                    <option value='Saint Vincent and The Grenadines'>
                                        Saint Vincent and The Grenadines
                                    </option>
                                    <option value='Samoa'>Samoa</option>
                                    <option value='San Marino'>San Marino</option>
                                    <option value='Sao Tome and Principe'>
                                        Sao Tome and Principe
                                    </option>
                                    <option value='Saudi Arabia'>Saudi Arabia</option>
                                    <option value='Senegal'>Senegal</option>
                                    <option value='Serbia'>Serbia</option>
                                    <option value='Seychelles'>Seychelles</option>
                                    <option value='Sierra Leone'>Sierra Leone</option>
                                    <option value='Singapore'>Singapore</option>
                                    <option value='Slovakia'>Slovakia</option>
                                    <option value='Slovenia'>Slovenia</option>
                                    <option value='Solomon Islands'>Solomon Islands</option>
                                    <option value='Somalia'>Somalia</option>
                                    <option value='South Africa'>South Africa</option>
                                    <option value='South Georgia and The South Sandwich Islands'>
                                        South Georgia and The South Sandwich Islands
                                    </option>
                                    <option value='Spain'>Spain</option>
                                    <option value='Sri Lanka'>Sri Lanka</option>
                                    <option value='Sudan'>Sudan</option>
                                    <option value='Suriname'>Suriname</option>
                                    <option value='Svalbard and Jan Mayen'>
                                        Svalbard and Jan Mayen
                                    </option>
                                    <option value='Swaziland'>Swaziland</option>
                                    <option value='Sweden'>Sweden</option>
                                    <option value='Switzerland'>Switzerland</option>
                                    <option value='Syrian Arab Republic'>
                                        Syrian Arab Republic
                                    </option>
                                    <option value='Taiwan'>Taiwan</option>
                                    <option value='Tajikistan'>Tajikistan</option>
                                    <option value='Tanzania, United Republic of'>
                                        Tanzania, United Republic of
                                    </option>
                                    <option value='Thailand'>Thailand</option>
                                    <option value='Timor-leste'>Timor-leste</option>
                                    <option value='Togo'>Togo</option>
                                    <option value='Tokelau'>Tokelau</option>
                                    <option value='Tonga'>Tonga</option>
                                    <option value='Trinidad and Tobago'>
                                        Trinidad and Tobago
                                    </option>
                                    <option value='Tunisia'>Tunisia</option>
                                    <option value='Turkey'>Turkey</option>
                                    <option value='Turkmenistan'>Turkmenistan</option>
                                    <option value='Turks and Caicos Islands'>
                                        Turks and Caicos Islands
                                    </option>
                                    <option value='Tuvalu'>Tuvalu</option>
                                    <option value='Uganda'>Uganda</option>
                                    <option value='Ukraine'>Ukraine</option>
                                    <option value='United Arab Emirates'>
                                        United Arab Emirates
                                    </option>
                                    <option value='United Kingdom'>United Kingdom</option>
                                    <option value='United States'>United States</option>
                                    <option value='United States Minor Outlying Islands'>
                                        United States Minor Outlying Islands
                                    </option>
                                    <option value='Uruguay'>Uruguay</option>
                                    <option value='Uzbekistan'>Uzbekistan</option>
                                    <option value='Vanuatu'>Vanuatu</option>
                                    <option value='Venezuela'>Venezuela</option>
                                    <option value='Viet Nam'>Viet Nam</option>
                                    <option value='Virgin Islands, British'>
                                        Virgin Islands, British
                                    </option>
                                    <option value='Virgin Islands, U.S.'>
                                        Virgin Islands, U.S.
                                    </option>
                                    <option value='Wallis and Futuna'>
                                        Wallis and Futuna
                                    </option>
                                    <option value='Western Sahara'>Western Sahara</option>
                                    <option value='Yemen'>Yemen</option>
                                    <option value='Zambia'>Zambia</option>
                                    <option value='Zimbabwe'>Zimbabwe</option>
                                </select>
                            </div>
                            <div>
                                <label className='label'>No Of Person*</label>
                                <input
                                    type='number'
                                    placeholder='No Of Person.'
                                    className='input input-bordered input-success w-full'
                                />
                            </div>
                            <div>
                                <label className='label'>Address Line 1</label>
                                <input
                                    type='text'
                                    placeholder='Address Line 1'
                                    className='input input-bordered input-success w-full'
                                />
                            </div>
                            <div>
                                <label className='label'>Address Line 2</label>
                                <input
                                    type='text'
                                    placeholder='Address Line 1'
                                    className='input input-bordered input-success w-full'
                                />
                            </div>
                        </form>
                    </div>
                    {/* Section : Step 02 */ }
                    <div className='bg-slate-50 mt-14 px-5 rounded-lg shadow-md py-10'>
                        <h3 className='text-3xl flex gap-5 items-center font-semibold'>
                            <span className='bg-primary w-14 h-14 text-center rounded-full text-white flex justify-center items-center'>2</span>
                            <span>PAYMENT INFORMATION</span>
                        </h3>
                        <form action="" className='grid lg:grid-cols-2 gap-5'>
                            <div>
                                <label className='label'>Name on card*</label>
                                <input
                                    type='text'
                                    placeholder='Card Holder Number'
                                    className='input input-bordered input-success w-full'
                                />
                            </div>
                            <div>
                                <label className='label'>Card number*</label>
                                <input
                                    type='text'
                                    placeholder='****************'
                                    className='input input-bordered input-success w-full'
                                />
                            </div>

                            <div>
                                <label className='label'>Expiry Date</label>
                                <input
                                    type='text'
                                    placeholder='Expiry Date'
                                    className='input input-bordered input-success w-full'
                                />
                            </div>
                            <div>
                                <label className='label'>CVC/CVV</label>
                                <input
                                    type='text'
                                    placeholder='CVC/CVV'
                                    className='input input-bordered input-success w-full'
                                />
                            </div>
                            <div>
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type='checkbox'
                                        className='checkbox checkbox-primary'
                                    />
                                    <span>I agree to the Terms and Conditions.</span>
                                </div>
                                <div className='mt-5'>
                                    <button className='btn btn-primary text-white'>Submit Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='lg:col-span-1'>
                    <div className='bg-slate-50 px-5 py-10 shadow-md rounded-md  lg:block hidden'>
                        <h4 className='bg-primary text-white text-center py-2 rounded-lg uppercase text-lg font-semibold mb-5'>Details</h4>
                        <div>
                            <p className='flex justify-between items-center border-b pb-2'>
                                <span className='font-semibold'>Packages cost</span>
                                <span>$500</span>
                            </p>
                            <p className='flex justify-between items-center border-b py-2'>
                                <span className='font-semibold'>Packages Name</span>
                                <span>Machu Picchu, peru</span>
                            </p>
                            <p className='flex justify-between items-center border-b py-2'>
                                <span className='font-semibold'>Packages cost</span>
                                <span>$500</span>
                            </p>
                            <p className='flex justify-between items-center border-b py-2'>
                                <span className='font-semibold'>Dedicated tour guide</span>
                                <span>$60</span>
                            </p>
                            <p className='flex justify-between items-center border-b py-2'>
                                <span className='font-semibold'>Insurance</span>
                                <span>$40</span>
                            </p>
                            <p className='flex justify-between items-center border-b py-2'>
                                <span className='font-semibold'>Tax</span>
                                <span>15%</span>
                            </p>
                            <p className='flex justify-between items-center pt-5'>
                                <span className='font-semibold'>Total cost</span>
                                <span className='text-primary font-bold'>$580</span>
                            </p>

                        </div>
                    </div>
                    <div className='bg-slate-50 px-5 py-10 shadow-md rounded-md mt-10 flex flex-col justify-center items-center'>
                        <FaPhoneVolume className='text-4xl' />
                        <p className='font-thin my-2'>HELP AND SUPPORT</p>
                        <h3 className='text-3xl mb-2 font-bold'>+12 345 678 90</h3>
                        <p className='font-thin text-xs'>Monday to Friday 9.00am - 7.30pm</p>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Booking;
