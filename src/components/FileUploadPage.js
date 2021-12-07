import React, { useState } from "react";
import styled from "styled-components";
import * as lib from "./library.js";
import "../css/DragDrop.css";

export const FileUploadPage = () => {
  const [dropFlag, setDropFlag] = useState(false);

  const Container = styled.div`
    display: flex;
    justify-content: flex-start;
`
  const Dropbox = styled.div`
      margin: auto;
  `
  return (
    <Container>
      <Dropbox
      id="drag-drop-field"
      className={dropFlag ? "in" : "out"}
      onDrop={(e) => lib.handleOnDrop(e, setDropFlag)}
      onDragOver={(e) => lib.handleDragOver(e, setDropFlag)}
      onDragLeave={(e) => lib.handleOnDragLeave(e, setDropFlag)}
    >
      <p>drag & drop</p>
      <input type="file" accept=".csv" onChange={(e) => lib.handleUpload(e)}/>
      </Dropbox>
    </Container>
  );
};
