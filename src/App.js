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

  const get_upload_id = (event) => {
    setupload_id(event.target.value);
  };

  const getBookmark = (event) => {
    // console.log(event, "getBookmark");
    setupload_bookmark(event);
    console.log(upload_bookmark, "getBookmark");
  };

  const csv = (event) => {
    // console.log(event, "csv");
    setupload_csv(event);
    console.log(event, "csv");

    // setupload_id(event.target.value);
  };

  const acceptPartialResults = (val_1, val_2) => {
    // console.log(event, "acceptPartialResults");
    // setupload_id(event.target.value);
    // console.log(val_1, "accept val 1");
    // console.log(val_2, "accept val 2");
    setupload_AcceptPartialResults(val_1);
    setupload_extractFullResults_data(val_2);

    console.log(upload_AcceptPartialResults, "upload_AcceptPartialResults");
    console.log(
      upload_extractFullResults_data,
      "upload_extractFullResults_data"
    );
  };

  const extractFullResults = (val_1, val_2) => {
    // console.log(event, "extractFullResults");
    // setupload_id(event.target.value);

    setupload_extractFullResults_data(val_1);
    setupload_AcceptPartialResults(val_2);

    console.log(upload_AcceptPartialResults, "upload_AcceptPartialResults");
    console.log(
      upload_extractFullResults_data,
      "upload_extractFullResults_data"
    );
  };

  return (
    <Container className="main_container">
      <Row>
        <Col xs={12}>
          <Header
            upload_id={upload_id && upload_id}
            upload_bookmark={upload_bookmark && upload_bookmark}
            upload_csv={upload_csv && upload_csv}
            acceptPartialResults={
              upload_AcceptPartialResults && upload_AcceptPartialResults
            }
            upload_extractFullResults_data={
              upload_extractFullResults_data && upload_extractFullResults_data
            }
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <LeftActionContainer
            get_upload_id={get_upload_id}
            getBookmark={getBookmark}
            csv={csv}
            acceptPartialResults={acceptPartialResults}
            extractFullResults={extractFullResults}
            extractFullResults={extractFullResults}
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
