import React, { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { get_status, get_download_file } from "../../service/service";
import "./rightActionContainer.css";

const RightActionContainer = () => {
  const [status_id, setstatus_id] = useState("");

  const [data_status, setdata_status] = useState({});

  const [download_id, setdownload_id] = useState("");

  const [keys, setkeys] = useState([]);
  const [value, setvalue] = useState([]);

  const generate_id = (event) => {
    setstatus_id(event.target.value);
  };

  const get_status_id = (event) => {
    event.preventDefault();
    get_status(status_id)
      .then((res) => setdata_status(res.data))
      .catch((err) => err);
  };

  const get_status_download_id = (event) => {
    setdownload_id(event.target.value);
  };

  // const get_download = (event) => {
  //   event.preventDefault();

  //   get_download_file(download_id)
  //     .then((res) => {
  //       // debugger;
  //       setdownload_id("");
  //       window.open(res.config.url);
  //     })
  //     .catch((err) => console.log(err));
  // };
  return (
    <section className="right_container">
      <div>
        <Form onSubmit={get_status_id}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Col sm={9}>
              <Form.Control
                type="text"
                placeholder="ENTER ID"
                // value={download_id}
                onChange={generate_id}
              />
            </Col>
            {/* <Form.Label> */}
            <button
              column
              sm={3}
              type="submit"
              // variant="outline-success"
              className="primary-button-header"
              //   size="lg"
            >
              {/* <a href="" download="" target="_self"> */} GET STATUS
              {/* </a> */}
            </button>
            {/* </Form.Label> */}
          </Form.Group>
        </Form>
      </div>
      <div>
        <div>STATUS:</div>
        <div className="right_container_status">
          {data_status
            ? Object.entries(data_status).map(([key, val]) => (
                <div
                  style={{ padding: "10px", wordBreak: "break-word" }}
                  className="d-flex align-items-center"
                >
                  <div className="key-right-res">
                    {key.replaceAll("_", " ").toUpperCase()}
                  </div>{" "}
                  :{" "}
                  {key === "supervision_url" ? (
                    <div className="ml-2  val-right-res">
                      {val !== null && (
                        <a
                          href={val}
                          style={{ textDecoration: "none" }}
                          target="blank"
                        >
                          Click Here
                        </a>
                      )}
                    </div>
                  ) : (
                    <div className="ml-2  val-right-res">{val}</div>
                  )}
                  {/* <div className="ml-2  val-right-res">
                    {val === "supervision_url" ? <a href={val}>Click</a> : val}
                  </div> */}
                </div>
              ))
            : ""}
        </div>
      </div>

      <div>
        {/* <Form onSubmit={get_download}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Col>
              <Form.Control
                type="text"
                placeholder="ENTER ID"
                onChange={get_status_download_id}
              />
            </Col>

            <button column type="submit" className="primary-button-header">
              GET RESULTS
            </button>
          </Form.Group>
        </Form> */}
      </div>
      {/* </div> */}
    </section>
  );
};
export default RightActionContainer;
