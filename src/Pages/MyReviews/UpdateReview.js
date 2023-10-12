import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateReview = () => {
    const router = useParams();
    const [updateReview, setUpdateReview] = useState({});
    const { id } = router;
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch(`http://localhost:5000/reviews/${id}`)
        .then((res) => res.json())
        .then((actualData) => {
            setUpdateReview(actualData);
        })
        .catch((err) => toast.error(err.message));
    }, [id]);
    return (
        <div className='container py-20'>
            <form>
                <textarea className="textarea textarea-bordered w-96 h-36 mx-auto" defaultValue={updateReview?.review_message}></textarea>
                <button>Update</button>
            </form>
            
        </div>
    );
};

export default UpdateReview;