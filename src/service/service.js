import axios from "axios";

// import { useState } from "react";

// const [data_used, setdata_used] = useState();

export const get_status = (id) => {
  return axios.get(
    `http://api-sandb2.appsquared.io/getStatus?externalId=${id}`
  );
};

export const get_download_file = (data) => {
  return axios.post(`http://api-sandb2.appsquared.io/getResultsFiles`, data, {
    headers: { "Content-Type": "application/json" },
    responseType: "blob",
  });
};

export const upload_file = (data) => {
  return axios.post(`http://api-sandb2.appsquared.io/submitPdf`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// upload_file(20)
