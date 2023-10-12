import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import TableView from './TableView';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/user-reviews/${user?.uid}`;
        fetch(url)
            .then((response) => response.json())
            .then((actualData) => {
                setReviewData(actualData);
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    }, [user?.uid, loading, logOut]);
    return (
        <div className='container mx-auto md:px-5 px-3 py-20'>
            <TableView reviewData={reviewData}></TableView>
        </div>
    );
};

export default MyReviews;