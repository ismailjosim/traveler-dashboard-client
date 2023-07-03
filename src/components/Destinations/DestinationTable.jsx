import React from 'react';

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
                        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Email</th>
                        <th scope="col" className="h-12 px-6 text-sm font-medium stroke-slate-700 text-slate-700 ">Action</th>
                    </tr>
                    { destinations && destinations.map((item, index) => {
                        console.log(item)
                        return (
                            <tr className="border-b border-slate-200" key={ index }>
                                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500">
                                    <div className="avatar">
                                        <div className="w-14 rounded">
                                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>

                                </td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Designer</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Carroll Group</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">Member</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">salas_a</td>
                                <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">salas_a</td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </div>
    );
};

export default DestinationTable;
