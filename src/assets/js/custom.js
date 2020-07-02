function myTest() {
    alert('Welcome to custom js');
}

function makePayment() {
    FlutterwaveCheckout({
      public_key: "FLWPUBK-e5f72bf99d21fbc69dbae898be07be54-X",
      tx_ref: "hooli-tx-1920bbtyt",
      amount: 600,
      currency: "RWF",
      payment_options: "mobile_money_rwanda",
      customer: {
        email: "user@gmail.com",
        phonenumber: "0784485654",
        name: "Niyonsaba Alex",
      },
      callback: function (data) { // specified callback function
        console.log(data);
      },
      customizations: {
        title: "My store",
        description: "Payment for items in cart",
        logo: "https://assets.piedpiper.com/logo.png",
      },
    });
  }