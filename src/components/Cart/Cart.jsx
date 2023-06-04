import React from 'react';
import PageHeading from '../../utilities/PageHeading';
import cartImg from '../../assets/destinations/destination1.jpg'
import '../../styles/Custom.css'
import { BiMinus, BiPlus } from 'react-icons/bi'

const Cart = () => {
    const arr = [1, 2, 3, 4, 5]

    return (
        <section>
            <PageHeading headTitle={ 'CART' } />
            <div>
                <div className="w-9/12 mx-auto">
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">

                            <thead className='bg-primary text-white'>
                                <tr>
                                    <th></th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Sub Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                { arr.map((item, idx) => {
                                    return (
                                        <tr key={ idx } className='border-2'>
                                            <td className='flex items-center gap-2'>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                                <img src={ cartImg } alt="" className="object-cover w-16 h-16 rounded" />
                                            </td>
                                            <td className='border-2'>
                                                SUMMER HOLIDAY TO THE AXOLOTLS RIVER
                                            </td>
                                            <td className='border-2'>$ 1140.00</td>
                                            <td className='border-2'>
                                                <div className='flex items-center gap-2'>
                                                    <BiMinus />
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        id="Line2Qty"
                                                        className="h-8 w-12 rounded border-2-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                                    />
                                                    <BiPlus />
                                                </div>
                                            </td>
                                            <td>$ 1140.00</td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='border-2 border-b-0 my-20'>
                        <div className='flex justify-between items-center py-10 px-5'>
                            <div className='flex gap-2'>
                                <input className='input input-bordered input-primary' placeholder='Have a Coupon' type="text" />
                                <button className='btn btn-primary text-white'>Apply Coupon</button>
                            </div>
                            <div>
                                <button className='btn btn-primary text-white'>Update cart</button>
                            </div>
                        </div>
                        <div className='border-y-2 pr-5 py-5'>
                            <div>
                                <div className="flex justify-end gap-10">
                                    <dt>Subtotal</dt>
                                    <dd>£250</dd>
                                </div>
                                <div className="flex justify-end gap-10">
                                    <dt>VAT</dt>
                                    <dd>£25</dd>
                                </div>
                                <div className="flex justify-end gap-10">
                                    <dt>Discount</dt>
                                    <dd>-£20</dd>
                                </div>

                                <div className="flex justify-end gap-10">
                                    <dt>VAT</dt>
                                    <dd>£25</dd>
                                </div>

                                <div className="flex justify-end gap-10">
                                    <dt>Discount</dt>
                                    <dd>-£20</dd>
                                </div>
                                <div className="flex justify-end gap-10">
                                    <dt>Total</dt>
                                    <dd>£200</dd>
                                </div>
                            </div>
                        </div>
                        <div className='border-y-2 border-t-0 pr-5 py-5 flex justify-end'>
                            <button className='btn btn-primary'>confirm checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;
