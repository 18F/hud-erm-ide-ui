import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

// import axios from "axios";
// import { Button } from "react-bootstrap";
import "./header.css";
import { upload_file } from "../../service/service";

const Header = ({
  // upload_id,
  upload_bookmark,
  upload_csv,
  acceptPartialResults,
  upload_extractFullResults_data,
  getVerifyDocumentPresence,
  extractPdf,
}) => {
  const [File_name, setFile_name] = useState("");

  const [File, setFile] = useState();

  const [setproceesed_message_status, setset_message_status] = useState("");

  const [upload_id, setupload_id] = useState("");

  const [accept_partial_result, setaccept_partial_result] = useState(true);

  const [require_full_results, setrequire_full_results] = useState(false);

  const [message_status, set_message_status] = useState("");
  const select_file = (event) => {
    setFile_name(event.target.files[0].name);
    setFile(event.target.files[0]);
  };

  const Accept_partial_Results = (event) => {
    setaccept_partial_result(true);
    setrequire_full_results(false);
  };

  const Require_Full_Results = (event) => {
    setrequire_full_results(true);
    setaccept_partial_result(false);
  };
  const submit_file = (event) => {
    let api_getVerifyDocumentPresence =
      getVerifyDocumentPresence &&
      getVerifyDocumentPresence.map((item) => item.label);

    let api_extractPdf = extractPdf && extractPdf.map((item) => item.label);
    event.preventDefault();
    let data = new FormData();
    data.append("submissionFileName", File);
    data.append("externalId", upload_id);
    // data.append("generateBookmarkedPdf", upload_bookmark);
    // data.append("generateCsv", upload_csv);

    data.append("acceptPartialResults", accept_partial_result);
    data.append("extractFullResults", require_full_results);
    // data.append("presenceFormNames", api_getVerifyDocumentPresence);
    // data.append("extractionFormNames", api_extractPdf);
    setset_message_status("Processing...");

    upload_file(data)
      .then((res) => {
        if (res.status === 200) {
          setset_message_status("Processed");
          set_message_status(res.data.message);
          setupload_id("");
        }
      })
      .catch((err) => console.log(err));
  };

  console.log(accept_partial_result, "accept_partial_result");
  console.log(require_full_results, "require_full_results");

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
         <div>
            <fieldset>
              <Form.Group as={Row} className="form_group_accept">
                <Form.Label as="legend" className="accept_partial_result">
                  Accept Partial Results 
                </Form.Label>
                <div
                  className="left_container_col"
                  // onChange={acceptPartialResults}
                >
                  <Form.Check
                    type="radio"
                    //   label="first radio"
                    defaultChecked={true}
                    value={accept_partial_result}
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    onChange={Accept_partial_Results}
                  />
                </div>
              </Form.Group>
              <Form.Group as={Row} className="form_group_require">
                <Form.Label as="legend" className="require_full_results">
                  Require Full Results
                </Form.Label>
                <div className="left_container_col">
                  <Form.Check
                    type="radio"
                    //   label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    value={require_full_results}
                    // onChange={extractFullResults_val}
                    onChange={Require_Full_Results}

                    // onchange={change_radio_button}
                  />
                </div>
              </Form.Group>
            </fieldset>
         </div> 

          <input
            placeholder="ENTER ID"
            className="input_header_id"
            onChange={(event) => setupload_id(event.target.value)}
          />
          <div className="right_header_button">
            <button type="submit" size="lg" className="primary-button-header">
              SUBMIT
            </button>
            <div
              style={
                setproceesed_message_status === "Processing..."
                  ? { color: "red", marginTop: "5px" }
                  : { color: "green", marginTop: "5px" }
              }
            >
              {setproceesed_message_status}
            </div>
            <div>{message_status}</div>
          </div>
        </div>
      </form>
    </header>
  );
};
export default Header;
