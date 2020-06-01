import React, { useState } from "react";
import { Container } from "react-bootstrap";
import BaseCss from "./utils/BaseCss";
import Panel from "./utils/Panel";

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <Container>
      <BaseCss />
      <div className="row mt-3">
        <div className="col-11">
          <input
            type="range"
            min="0"
            max="255"
            value={red}
            className="slider-red"
            id="myRangeRed"
            onChange={(e) => setRed(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="col-1 text-danger font-weight-bolder">{red}</div>
      </div>
      <div className="row mt-3">
        <div className="col-11">
          <input
            type="range"
            min="0"
            max="255"
            value={green}
            className="slider-green"
            id="myRangeGreen"
            onChange={(e) => setGreen(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="col-1 text-success font-weight-bolder">{green}</div>
      </div>

      <div className="row mt-3">
        <div className="col-11">
          <input
            type="range"
            min="0"
            max="255"
            value={blue}
            className="slider-blue"
            id="myRangeBlue"
            onChange={(e) => setBlue(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="col-1 text-primary font-weight-bolder">{blue}</div>
      </div>
      <Panel color={{ red, green, blue }} />
    </Container>
  );
}

export default App;
