import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const TableRow = ({ review }) => {
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                alert('are you sure', data);
            }).catch(err => toast.error(err.message))
    };

    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/MyReviews/UpdateReview/${id}`)
      }

    return (
        <tr className="border-b bg-opacity-0 border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                <Link to={`/service/${review.service_id}`}>{review.service_name}</Link>
            </th>
            <td className="py-4 px-6">
                {new Date(parseInt(review.review_date)).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </td>
            <td className="py-4 px-6">
                {review.review_message}
            </td>

            <td className="py-4 px-6 flex">
                <button onClick={() => handleEdit(review._id)} className="font-medium flex items-center  border-2 px-4 py-2 rounded-lg mr-2 mb-2 md:mb-0 hover:bg-blue-500"><span className='ml-1'>Edit</span></button>
                <button onClick={() => handleDelete(review._id)} className="font-medium flex items-center  border-2 px-4 py-2 rounded-lg hover:bg-red-500"><span className='ml-1'>Delete</span></button>
            </td>
            
        </tr>


    );
};

export default TableRow;