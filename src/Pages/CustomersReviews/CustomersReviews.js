import React from 'react';
import './CustomerReviews.css';

const CustomersReviews = () => {
    return (
        <div>
            <h2 className='customer-review-title'>Our Customers Review</h2>
            <p className='customer-review-title'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, omnis?</p>
            <hr />
            <div className="customers-review-container">
                <div className="customer-review">
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo et magni blanditiis assumenda, eos error ipsam distinctio amet quia quae quaerat ea nostrum debitis sint consectetur esse odio rerum accusantium?</small></p>
                    <div className="customer-review-info">
                        <img  src="https://i.ibb.co/hLqjQFm/ben-parker-Oh-KEl-Ok-Q3-RE-unsplash.jpg" alt="" />
                        <div>
                            <h5>Alexander</h5>
                            <h6><small>Businessman</small></h6>
                        </div>
                    </div>
                </div>
                <div className="customer-review">
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo et magni blanditiis assumenda, eos error ipsam distinctio amet quia quae quaerat ea nostrum debitis sint consectetur esse odio rerum accusantium?</small></p>
                    <div className="customer-review-info">
                        <img  src="https://i.ibb.co/9rkgck0/vicky-hladynets-C8-Ta0gw-Pb-Qg-unsplash.jpg" alt="" />
                        <div>
                            <h5>Alexander</h5>
                            <h6><small>Businessman</small></h6>
                        </div>
                    </div>
                </div>
                <div className="customer-review">
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo et magni blanditiis assumenda, eos error ipsam distinctio amet quia quae quaerat ea nostrum debitis sint consectetur esse odio rerum accusantium?</small></p>
                    <div className="customer-review-info">
                        <img src="https://i.ibb.co/jgd52kp/jake-nackos-IF9-TK5-Uy-KI-unsplash.jpg" alt="" />
                        <div>
                            <h5>Alexander</h5>
                            <h6><small>Businessman</small></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersReviews;