import React from 'react';
import TableRow from './TableRow';

const TableView = ({ reviewData }) => {
    return (
        <div className="container">
            <table className="w-full text-sm text-left">
                <thead className="text-xs uppercase font-bold underline">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Services Name
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Review Date
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Review Message
                        </th>
                        <th scope="col" className="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody className={(reviewData.length <= 0) ? '' : 'hidden'}>
                    <tr>
                        <th colspan="7">
                            <p className='text-2xl font-semibold text-center p-5'>No Review Found</p>
                        </th>
                    </tr>
                </tbody>
                <tbody>
                    {reviewData.map(review => <TableRow key={reviewData._id} review={review}></TableRow>)}
                </tbody>
            </table>
        </div>
    );
};

export default TableView;