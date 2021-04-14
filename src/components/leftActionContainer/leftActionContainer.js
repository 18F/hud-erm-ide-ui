import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import MultiSelectAll from "../MultiSelect";
import options from "../../data";
import "./leftActionContainer.css";
import MultiSelectAllPdf from "../MultiSelectPdf";
import { get_download_file } from "../../service/service";

const LeftActionContainer = ({ csv }) => {
  const [bookmark, setbookmark] = useState(false);

  const [csv_data, setcsv_data] = useState(false);

  const [extractFullResults_data, setextractFullResults_data] = useState(false);

  const [download_id, setdownload_id] = useState("");

  const [FileObj, setFileObj] = useState();

  // const [selectedOptions, setSelectedOptions] = useState([]);

  // const [selectedOptions_pdf, setSelectedOptions_pdf] = useState([]);

  const [verify_doc, setverify_doc] = useState([]);

  const [extractPdf_val, setextractPdf_val] = useState([]);

  // useEffect(() => {
  //   setSelectedOptions();
  // }, []);

  // useEffect(() => {
  //   setSelectedOptions_pdf();
  // }, []);

  const change_bookmark = (e) => {
    setbookmark(!bookmark);
  };

  const change_csv = () => {
    setcsv_data(!csv_data);
    csv(csv_data);
  };

  const extractFullResultsHandler = () => {
    setextractFullResults_data(!extractFullResults_data);
  };

  const verify_doc_left = (data) => {
    console.log(data, "verify_doc_left");
    setverify_doc(data);
  };
  const extractPdf_val_left = (data) => {
    console.log(data, "extractPdf_val_left");
    setextractPdf_val(data);
  };
  //download file
  const get_download = (event) => {
    event.preventDefault();
    let presenceFormNames = verify_doc && verify_doc.map((item) => item.value);
    let extractionFormNames =
      extractPdf_val && extractPdf_val.map((item) => item.value);

    let data = {
      externalId: download_id,
      generateBookmarkedPdf: bookmark,
      generateCsv: csv_data,
      extractFullResults: extractFullResults_data,
      presenceFormNames,
      extractionFormNames,
    };
    get_download_file(data)
      .then((res) => {
        console.log(res);
        const url = window.URL.createObjectURL(new Blob([res.data]));
        console.log(url);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${download_id}.zip`); //or any other extension
        document.body.appendChild(link);
        link.click();
        setFileObj(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form>
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Col className="d-flex">
          <Form.Control
            type="text"
            placeholder="ENTER ID"
            id="input_id_left_comp"
            onChange={(event) => setdownload_id(event.target.value)}
          />
          <button
            column
            type="submit"
            className="primary-button-header"
            onClick={get_download}
          >
            GET RESULTS
          </button>
        </Col>
      </Form.Group>
      {/* </Form> */}

      <Form.Group as={Row} controlId="formHorizontalCheck">
        <Form.Label column sm={4}>
          Bookmarked
        </Form.Label>
        <Col sm={4} className="left_container_col">
          <Form.Check value={bookmark} onChange={change_bookmark} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalCheck">
        <Form.Label column sm={4}>
          Send CSV File
        </Form.Label>
        <Col sm={4} className="left_container_col">
          <Form.Check value={csv_data} onChange={change_csv} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalCheck">
        <Form.Label column sm={4}>
          Verify Document Presence
        </Form.Label>
        <Col sm={4} className="left_container_col">
          <MultiSelectAll verify_doc_left={verify_doc_left} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalCheck">
        <Form.Label column sm={4}>
          Extract Full Results
        </Form.Label>
        <Col sm={4} className="left_container_col">
          <Form.Check
            value={extractFullResults_data}
            onChange={extractFullResultsHandler}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalCheck">
        <Form.Label column sm={4}>
          Extract Pdf
        </Form.Label>
        <Col sm={4} className="left_container_col">
          <MultiSelectAllPdf extractPdf_val_left={extractPdf_val_left} />
        </Col>
      </Form.Group>
    </Form>
  );
};
export default LeftActionContainer;
