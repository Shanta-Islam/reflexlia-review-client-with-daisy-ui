import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewsView from './ReviewsView';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    const [serviceReviews, setServiceReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        const url = `http://localhost:5000/service-reviews?serviceID=${serviceDetails._id}`;
        fetch(url)
            .then((response) => response.json())
            .then((actualData) => {
                setServiceReviews(actualData);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
            });
    }, [serviceDetails._id, loading]);


    const handleSubmitReview = event => {
        event.preventDefault();
        const form = event.target;
        const username = form.username.value;
        const email = user?.email || 'unregistered';
        const reviewMsg = form.reviewmsg.value;
        const userphoto = form.userphoto.value;
        console.log(username, reviewMsg, email, userphoto);

        const review = {
            service_id: serviceDetails._id,
            service_name: serviceDetails.title,
            review_message: reviewMsg,
            review_date: new Date().getTime(),
            reviewer_info: {
                userID: user?.uid,
                userName: username,
                userEmail: user?.email,
                userPhoto: userphoto
            }
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review receive successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err));

    }


    return (
        <div className='container mx-auto md:px-5 px-3 mb-5 py-28'>
            <div className="card w-3/4 bg-base-100 shadow-xl mx-auto">
                <img src={serviceDetails.img} alt="Shoes" className='object-cover h-96 w-full rounded-lg' />
                <div className="card-body">
                    <h2 className="card-title">{serviceDetails.title}</h2>
                    <p className='text-lg'><span className='font-medium'>About this service:</span>  <br />{serviceDetails.description}</p>
                    <p>
                        <span className="text-2xl font-bold">
                            <span className='text-2xl font-extrabold mr-1'>৳</span>{serviceDetails.price} BDT
                        </span>
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn" onClick={() => window.review_modal.showModal()}>Write your review</button>
                    </div>
                    <div className={!(serviceReviews.length <= 0) ? 'hidden' : 'block'}>
                        <p className='text-2xl font-semibold text-gray-500 text-center mt-12 mb-12'>No Reviews Yet Added</p>
                    </div>
                    {serviceReviews.map(review => <ReviewsView key={review._id} review={review} setLoading={setLoading}></ReviewsView>)}
                </div>

            </div>
            <React.Fragment>
                <dialog id="review_modal" type="checkbox" className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box" onSubmit={handleSubmitReview}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="username" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="text" placeholder="Email" name="email" className="input input-bordered" defaultValue={user?.email} readOnly />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Review</span>
                            </label>
                            <textarea name="reviewmsg" className="textarea textarea-bordered h-24 w-full" placeholder="Write Your Review" required></textarea>
                            <input type="text" placeholder="photo" name="userphoto" className="input input-bordered hidden" value={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/X2xMzwL/defultuser.png'} />
                        </div>
                        <div className="modal-action" htmlFor="review_modal">
                            <button className="btn">Submit Review</button>
                        </div>
                    </form>
                </dialog>
            </React.Fragment>
        </div>
    );
};

export default ServiceDetails;