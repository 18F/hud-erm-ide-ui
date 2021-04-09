import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import MultiSelectAll from "../MultiSelect";
import options from "../../data";
import "./leftActionContainer.css";
import MultiSelectAllPdf from "../MultiSelectPdf";

const LeftActionContainer = ({
  get_upload_id,
  getBookmark,
  csv,
  acceptPartialResults,
  extractFullResults,
  get_radio,
  verify_doc,
  extractPdf_val,
}) => {
  const [bookmark, setbookmark] = useState(true);
  const [csv_data, setcsv_data] = useState(true);
  const [acceptPartialResults_data, setacceptPartialResults_data] = useState(
    true
  );
  const [extractFullResults_data, setextractFullResults_data] = useState(true);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions_pdf, setSelectedOptions_pdf] = useState([]);

  useEffect(() => {
    setSelectedOptions();
  }, []);

  useEffect(() => {
    setSelectedOptions_pdf();
  }, []);

  // function onChange_pdf(value, event) {
  //   if (event.action === "select-option" && event.option.value === "*") {
  //     this.setState(this.options);
  //   } else if (
  //     event.action === "deselect-option" &&
  //     event.option.value === "*"
  //   ) {
  //     this.setState([]);
  //   } else if (event.action === "deselect-option") {
  //     this.setState(value.filter((o) => o.value !== "*"));
  //   } else if (value.length === this.options.length - 1) {
  //     this.setState(this.options);
  //   } else {
  //     this.setState(value);
  //   }
  //   console.log(selectedOptions_pdf, "selectedOptions_pdf");

  // }

  function onChange(value, event) {
    if (event.action === "select-option" && event.option.value === "*") {
      this.setState(this.options);
    } else if (
      event.action === "deselect-option" &&
      event.option.value === "*"
    ) {
      this.setState([]);
    } else if (event.action === "deselect-option") {
      this.setState(value.filter((o) => o.value !== "*"));
    } else if (value.length === this.options.length - 1) {
      this.setState(this.options);
    } else {
      this.setState(value);
    }
    console.log(selectedOptions, "selectedOptions");
  }
  const change_bookmark = () => {
    setbookmark(!bookmark);
    // console.log(bookmark, 45);
    getBookmark(bookmark);
  };

  const change_csv = () => {
    setcsv_data(!csv_data);
    csv(csv_data);
  };

  // const acceptPartialResults_val = () => {
  // setacceptPartialResults_data(true);
  // setextractFullResults_data(!acceptPartialResults_data);
  // console.log(acceptPartialResults_data);
  // console.log(extractFullResults_data);
  // debugger;
  // get_radio(radio_data);
  // };

  const extractFullResults_val = () => {
    // console.log(extractFullResults_data, 41);

    setextractFullResults_data(true);
    setacceptPartialResults_data(false);

    // console.log(extractFullResults_data, "extractFullResults_data");
    // console.log(acceptPartialResults_data, "acceptPartialResults_data");

    extractFullResults(extractFullResults_data, acceptPartialResults_data);
    // debugger;
    // get_radio(radio_data);
  };

  const acceptPartialResults_data_val_toggle = () => {
    //  console.log(extractFullResults_data, 41);

    setextractFullResults_data(true);
    setacceptPartialResults_data(false);

    // console.log(extractFullResults_data, "extractFullResults_data");
    // console.log(acceptPartialResults_data, "acceptPartialResults_data");
    acceptPartialResults(acceptPartialResults_data, extractFullResults_data);
    // debugger;
    // get_radio(radio_data);
  };

  // let options = [
  //   { label: "HUD 92800-5B", value: "HUD 92800-5B" },
  //   { label: "HUD-92051", value: "HUD-92051" },
  //   { label: "HUD-92300", value: "HUD-92300" },
  // ];

  return (
    <Form>
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={4}>
          External ID
        </Form.Label>
        <Col sm={4} className="left_container_col">
          <Form.Control
            type="email"
            placeholder="ENTER ID"
            onChange={get_upload_id}
          />
        </Col>
      </Form.Group>

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

      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={4}>
            Accept Partial Results
          </Form.Label>
          <Col
            sm={4}
            className="left_container_col"
            // onChange={acceptPartialResults}
          >
            <Form.Check
              type="radio"
              //   label="first radio"
              defaultChecked={true}
              value={acceptPartialResults_data}
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              // onChange={acceptPartialResults_val}
              onChange={acceptPartialResults_data_val_toggle}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={4}>
            Require Full Results
          </Form.Label>
          <Col sm={4} className="left_container_col">
            <Form.Check
              type="radio"
              //   label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value={extractFullResults_data}
              onChange={extractFullResults_val}

              // onchange={change_radio_button}
            />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} controlId="formHorizontalCheck">
        <Form.Label column sm={4}>
          Verify Document Presence
        </Form.Label>
        <Col sm={4} className="left_container_col">
          {/* <ReactMultiSelectCheckboxes
            options={[{ label: "All", value: "*" }, ...options]}
            //   placeholderButtonLabel="Colors"
            //   getDropdownButtonLabel={getDropdownButtonLabel}
            value={selectedOptions}
            onChange={onChange}
            setState={setSelectedOptions}
          /> */}
          <MultiSelectAll verify_doc={verify_doc} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalCheck">
        <Form.Label column sm={4}>
          Return JSON File
        </Form.Label>
        <Col sm={4} className="left_container_col">
          <Form.Check />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalCheck">
        <Form.Label column sm={4}>
          Extract Pdf
        </Form.Label>
        <Col sm={4} className="left_container_col">
          {/* <ReactMultiSelectCheckboxes
            options={[{ label: "All", value: "*" }, ...options]}
            //   placeholderButtonLabel="Colors"
            //   getDropdownButtonLabel={getDropdownButtonLabel}
            value={selectedOptions_pdf}
            onChange={onChange_pdf}
            setState={setSelectedOptions_pdf}
          /> */}
          <MultiSelectAllPdf extractPdf_val={extractPdf_val} />
        </Col>
      </Form.Group>
    </Form>
  );
};
export default LeftActionContainer;
