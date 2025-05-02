import React, { useEffect } from "react";


const SuccessPage = () => {

  useEffect(() => {
    // You may want to fetch the payment status from your backend
    toast.success("Payment completed successfully!");
  }, []);

  return (
    <div>
      <h1>Payment Success</h1>
      <p>Your booking has been confirmed.</p>
    </div>
  );
};

export default SuccessPage;
