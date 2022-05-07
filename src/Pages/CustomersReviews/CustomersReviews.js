import React from "react";
import "./CustomerReviews.css";

const CustomersReviews = () => {
  return (
    <div>
      <h2 className="customer-review-title review-header-title">
        Our Customers Review
      </h2>
      <p className="customer-review-title">see what our customers say</p>
      <hr className="review-hr" />
      <div className="customers-review-container">
        <div className="customer-review">
          <p>
            <small>
              To all the team at Fine Fruits. We just want to thank you very
              much for today's delivery of fresh vegetables.The quality of all
              the items enclosed is fantastic; so fresh and hardly any plastic
              in sight!Well done. All the best to you and thanks once again.
            </small>
          </p>
          <div className="customer-review-info">
            <img src="https://i.ibb.co/2vmZX6B/person-1.png" alt="" />
            <div className="mt-3">
              <h5 className="mb-0">Alexander</h5>
              <p>
                <small>Engineer</small>
              </p>
            </div>
          </div>
        </div>
        <div className="customer-review">
          <p>
            <small>
              We have been getting our fruit & veg delivered since the first
              lockdown and wouldn't shop anywhere else now. The quality is
              outstanding and lasts for days, not like supermarket bought. The
              bread is amazing too, so fresh & incredibly tasty. Thankyou for
              you the fab service & quality you're providing.
            </small>
          </p>
          <div className="customer-review-info">
            <img src="https://i.ibb.co/RpSXxNt/person-2.png" alt="" />
            <div className="mt-3">
              <h5 className="mb-0">Raveena Paveen</h5>
              <p>
                <small>Fashion Designer</small>
              </p>
            </div>
          </div>
        </div>
        <div className="customer-review">
          <p>
            <small>
              Started ordering from here during lockdown and I'll never go back
              to supermarket fruit and veg again. So easy to order, always
              delivered when scheduled, stays fresh for ages and so much
              flavour. No more watching bananas die in the fruit bowl and bland
              strawberries for me!
            </small>
          </p>
          <div className="customer-review-info">
            <img src="https://i.ibb.co/QXtnmnh/person-3.png" alt="" />
            <div className="mt-3">
              <h5 className="mb-0">Mr. Simon</h5>
              <p>
                <small>Businessman</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersReviews;
