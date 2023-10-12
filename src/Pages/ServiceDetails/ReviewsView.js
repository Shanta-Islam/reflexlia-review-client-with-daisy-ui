import React from 'react';

const ReviewsView = ({ review}) => {
    return (
        <div className='mt-5'>
            <article className='border-2 p-5 rounded'>
                <div class="flex items-center mb-3 space-x-4">
                    <img class="w-10 h-10 rounded-full" src={review.reviewer_info.userPhoto} alt="" />
                    <div class="space-y-1 font-medium ">
                        <p className='text-2xl'>{review.reviewer_info.userName} <span class="block text-sm">{review.reviewer_info.userEmail}</span></p>
                    </div>
                </div>
                <div class="flex items-center mb-1"> 
                    
                </div>
                <footer class="mb-3 text-sm"><p>Reviewed on <time>{new Date(parseInt(review.review_date)).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</time></p></footer>
                <p class="font-light mb-3">{review.review_message}</p>
            </article>
        </div>
    );
};

export default ReviewsView;