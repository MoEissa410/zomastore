import axios from "axios";

//
export const REACT_APP_STRIPE_DEV_APP_KEY =
  "506f48369270c4f52b348382f0abb583f23298b4c4d144ca050339275b8d8649baa10265723e7e88ca0421f446005a369959757cc697a6a286425626d053a1fa244fe7ff60cece94fcf7c6a1f716b72ee491e226c547720ae89437942cfd56748e7779e26922ecf5161e77db0077b0642f626b16cf37c272739b163ec70c9a04";
export const REACT_APP_STRIPE_APP_DEV_URL =
  "https://backend-zomastory.onrender.com";
//
//
export const REACT_APP_STRIPE_PUBLISHABLE_KEY =
  "pk_test_51MDp33SD8BxA31DW0RfZehhQP0BqgUiYliXnGZkE4jA4bUjtzwirmGhz7ngpp7RZLM3EHdpjX0UUKWNllRlPROC800l7vtgVb1";

const params = {
  headers: {
    Authorization: "bearer " + REACT_APP_STRIPE_DEV_APP_KEY,
  },
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(
      REACT_APP_STRIPE_APP_DEV_URL + url,
      params
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const makePaymentRequest = axios.create({
  baseURL: REACT_APP_STRIPE_APP_DEV_URL,
  headers: {
    Authorization: "bearer " + REACT_APP_STRIPE_DEV_APP_KEY,
  },
});
