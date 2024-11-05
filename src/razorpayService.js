
export const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  
  export const pay = async (orderPlaceCallback) => {
    const amount = 100;
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
  
    const options = {
      key: "rzp_test_AWrlyaXOO9ncih",
      amount: parseInt(amount * 100),
      currency: "INR",
      name: "Testing",
      description: "Test Transaction",
      image: "",
      handler: function () {
        orderPlaceCallback(); 
      },
      prefill: {
        name: "Testing",
        email: "testing@gmail.com",
        contact: "9759997000",
      },
      notes: {
        address: "India",
      },
      theme: {
        color: "#153793",
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  