import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';
import { BsFillTrashFill } from 'react-icons/bs';

const DestinationTable = ({ destinations }) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse rounded w-overflow-x-auto " cellSpacing="0">
                <tbody>
                    <tr className="border-b border-slate-300">
                        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 "></th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Title</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Tourist Place</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Country</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">View</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Edit</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Delete</th>
                    </tr>
                    { destinations && destinations.map((item, index) => {
                        const { title, country, city, thumbnail, touristPlace } = item || {}
                        return (
                            <tr className="border-b border-slate-200" key={ index }>
                                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                                    <div className="avatar">
                                        <div className="w-14 rounded">
                                            <img src={ thumbnail } alt={ title } />
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    <div className="font-bold">{ title }</div>
                                    <div className="text-sm opacity-50">{ city }, { country }</div>
                                </td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{ touristPlace } Places</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">exmple@gmail.com</td>
                                <td className="h-12 px-6 text-sm transition duration-300 text-primary">
                                    <AiFillEye size={ 20 } />
                                </td>
                                <td className="h-12 px-6 text-sm transition duration-300 text-secondary">
                                    <BiEdit size={ 20 } />
                                </td>
                                <td className="h-12 px-6 text-sm transition duration-300 text-error">
                                    <BsFillTrashFill size={ 20 } />
                                </td>

                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </div>
    );
};

export default DestinationTable;
