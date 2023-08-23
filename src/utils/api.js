import axios from "axios";

//
export const REACT_APP_STRIPE_DEV_APP_KEY =
  "03139a3455dd6973344b6f2ea9425e4e1e8300602213bda5655999d1a139fe445c0246084a2d5bb017cd747563f3091749b0d03a20b49c18315bc4254f370b050ca2d42916c6d405b1127bd76bb218bf11d47589fcbca3f3fdb72f38692febf5e301a76a3615d850e654b1b381f411ae10e8cb0db60593e668a4e44b922f3383";
export const REACT_APP_STRIPE_APP_DEV_URL =
  "https://zomastore-api.onrender.com";
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
