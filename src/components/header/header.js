import React, { useState } from "react";

// import axios from "axios";
import { Button } from "react-bootstrap";
import "./header.css";
import { upload_file } from "../../service/service";

const Header = ({
  upload_id,
  upload_bookmark,
  upload_csv,
  acceptPartialResults,
  upload_extractFullResults_data,
  getVerifyDocumentPresence,
  extractPdf,
}) => {
  // console.log(upload_id, "header");
  // console.log(upload_bookmark, "upload_bookmark header");
  // console.log(upload_csv, "upload_csv header");
  // console.log(getVerifyDocumentPresence, "getVerifyDocumentPresence header");
  // console.log(extractPdf, "extractPdf header");

  const [File_name, setFile_name] = useState("");
  const [File, setFile] = useState();

  const [set_message_status, setset_message_status] = useState("");
  const select_file = (event) => {
    setFile_name(event.target.files[0].name);
    setFile(event.target.files[0]);
  };

  // let message;
  const submit_file = (event) => {
    let api_getVerifyDocumentPresence =
      getVerifyDocumentPresence &&
      getVerifyDocumentPresence.map((item) => item.label);

    let api_extractPdf = extractPdf && extractPdf.map((item) => item.label);
    event.preventDefault();
    let data = new FormData();
    data.append("submissionFileName", File);
    data.append("externalId", upload_id);
    data.append("generateBookmarkedPdf", upload_bookmark);
    data.append("generateCsv", upload_csv);

    data.append("acceptPartialResults", acceptPartialResults);
    data.append("extractFullResults", upload_extractFullResults_data);
    data.append("presenceFormNames", api_getVerifyDocumentPresence);
    data.append("extractionFormNames", api_extractPdf);
    setset_message_status("Processing...");
    // console.log(data);
    // debugger;
    upload_file(data)
      .then((res) => res.status === 200 && setset_message_status("Processed"))
      .catch((err) => console.log(err));
  };

  return (
    <header>
      <form className="header_container" onSubmit={submit_file}>
        <div className="header_container">
          <div>
            <label for="myInput" className="text-success header_input_file">
              SELECT FILE
              <input
                id="myInput"
                type="file"
                style={{ display: "none" }}
                onChange={select_file}
              />
            </label>
          </div>
          {File_name.length ? (
            <>
              <div className="ml-5">For File:</div>
              <div className="ml-2">{File_name}</div>
            </>
          ) : null}
        </div>

        <div className="header_container">
          <div className="right_header_button">
            <button type="submit" size="lg" className="primary-button-header">
              SUBMIT
            </button>
            <div
              style={
                set_message_status === "Processing..."
                  ? { color: "red", marginTop: "5px" }
                  : { color: "green", marginTop: "5px" }
              }
            >
              {set_message_status}
            </div>
          </div>
        </div>
      </form>
    </header>
  );
};
export default Header;
