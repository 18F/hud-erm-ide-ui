import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/header/header";
import LeftActionContainer from "./components/leftActionContainer/leftActionContainer";
import RightContainer from "./components/rightActionContainer/rightActionContainer";
import "./App.css";

const App = () => {
  const [upload_id, setupload_id] = useState("");

  const [upload_bookmark, setupload_bookmark] = useState(true);

  const [upload_csv, setupload_csv] = useState(true);

  const [
    upload_AcceptPartialResults,
    setupload_AcceptPartialResults,
  ] = useState(false);

  const [
    upload_extractFullResults_data,
    setupload_extractFullResults_data,
  ] = useState(false);

  const [getVerifyDocumentPresence, setgetVerifyDocumentPresences] = useState();

  const [extract_Pdf, setextractPdf] = useState();

  // const get_upload_id = (event) => {
  //   setupload_id(event.target.value);
  // };

  const getBookmark = (event) => {
    setupload_bookmark(event);
    // console.log(upload_bookmark, "getBookmark");
  };

  const csv = (event) => {
    setupload_csv(event);
    // console.log(event, "csv");
  };

  const acceptPartialResults = (val_1, val_2) => {
    setupload_AcceptPartialResults(val_1);
    setupload_extractFullResults_data(val_2);
  };

  const extractFullResults = (val_1, val_2) => {
    setupload_extractFullResults_data(val_1);
    setupload_AcceptPartialResults(val_2);
  };

  const verify_doc = (val) => {
    // console.log(val, "verify_doc");
    // let verify_doc_new = val && val.map((item) => item.label);
    // console.log(verify_doc_new, "verifydoc new");
    setgetVerifyDocumentPresences(val);
  };

  const extractPdf_val = (val) => {
    // console.log(val, "extractPdf_val");
    // let extractPdf_new = val && val.map((item) => item.label);
    // console.log(extractPdf_new, "extractPdf_new");
    setextractPdf(val);
  };

  return (
    <Container fluid className="main_container">
      <Row>
        <Col xs={12}>
          <Header
            // upload_id={upload_id && upload_id}
            upload_bookmark={upload_bookmark && upload_bookmark}
            upload_csv={upload_csv && upload_csv}
            acceptPartialResults={
              upload_AcceptPartialResults && upload_AcceptPartialResults
            }
            upload_extractFullResults_data={
              upload_extractFullResults_data && upload_extractFullResults_data
            }
            getVerifyDocumentPresence={getVerifyDocumentPresence}
            extractPdf={extract_Pdf}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <LeftActionContainer
            // get_upload_id={get_upload_id}
            getBookmark={getBookmark}
            csv={csv}
            acceptPartialResults={acceptPartialResults}
            extractFullResults={extractFullResults}
            extractFullResults={extractFullResults}
            verify_doc={verify_doc}
            extractPdf_val={extractPdf_val}
            // get_radio={get_radio}
            // acceptPartialResults={acceptPartialResults}
            // extractFullResults={extractFullResults}
          />
        </Col>
        <Col xs={6}>
          <RightContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
