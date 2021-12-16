import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import * as lib from "./library.js";
import "../css/MainPage.css";

export const FileUploadPage = () => {
  const [dropFlag, setDropFlag] = useState(false);

  const Container = styled.div`
    display: flex;
    justify-content: flex-start;
  `
  const Dropbox = styled.div`
      margin: auto;
  `
  const Header = styled.div`
    display: flex;
    background: #f7df28;
    text-align: center;
    margin: auto;
    align-items: center;
    justify-content: center;
    
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 40px;
    width: 40vw;
`
  const history = useHistory();

  return (
    <div class="MainPage">
      <Header>
      카카오톡 내용 분석기
      </Header>
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
      <br/>
      <button
      class = "resultbutton"
      onClick={() => history.push('/result')}>결과 확인하기
      </button>

    </div>
  );
};
