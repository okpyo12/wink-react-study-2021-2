// import React from "react";
// import { Flex } from "@chakra-ui/react";
// import FileUpload from "./components/FileUpload";
// import { useMutation } from "react-query";
// import axios from "axios";
// import './App.css';

// const App = () => {
//   const { mutate, data } = useMutation((file) => {    // data는 post 요청 받고 나서 돌아오는 결과값 
//     const formData = new FormData();
//     formData.append("file", file);
//     return axios.post("/upload", formData, {    // upload 주소로 post 요청 
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//   });

//   const onFileAccepted = (file) => {
//     // console.log(file);
//     mutate(file);
//   };

//   return (
//     <Flex w="1000px" h="1000px" alignItems="center" justifyContent="center" marginLeft="20px">
//       {data && <div><div dangerouslySetInnerHTML={{__html: data.data.data}} /></div>   // data가 있으면 그걸 보여준다 
//       }    
//       {!!!data && <FileUpload onFileAccepted={onFileAccepted} />   //data가 없으면 파일업로드 페이지 보여준다
//       }
//     </Flex>
//   );
// };

// export default App;

import React from "react";
import { Flex } from "@chakra-ui/react";
import FileUpload from "./components/FileUpload";
import { useMutation } from "react-query";
import axios from "axios";
import './App.css';
// import kakaotalk from './kakaotalk.png'

const App = () => {
  
  const { mutate, data } = useMutation((file) => {    // data는 post 요청 받고 나서 돌아오는 결과값 
    const formData = new FormData();
    formData.append("file", file);
    return axios.post("/upload", formData, {    // upload 주소로 post 요청 
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  });

  const onFileAccepted = (file) => {
    // console.log(file);
    mutate(file);
  };

  return (
    <div className="container">
      <div className="headertop">.</div>
      <div className="header">
        WHO TALKED MORE?
      </div>
      <br/>
      {/* <img className="kakaoimg" src={kakaotalk} width='200px' alt="카카오톡"></img><br/><br/> */}
      <div className="explanation">Upload your Kakaotalk chat file and wait a second to get analyzed result!</div>
      <div className="howtouse">How to use</div>
      <div className="howtouse-guideline">1. 카카오톡을 열고 채팅방에 들어갑니다. <br/>2. 채팅방 설정-'대화 내용 저장'을 클릭합니다. 
                                          <br/>3. 추출된 csv 파일을 업로드합니다. <br/>4. 결과 출력시까지 3~5초가 소요됩니다. 
                                          <br/>5. 새로고침시 새로운 파일을 업로드할 수 있습니다. 
                                          <br/><br/><br/><hr/>
                                          </div>
      <Flex w="100" h="450px" alignItems="center" justifyContent="center" marginTop="200px" marginBottom="300px">
        {data && <div><div dangerouslySetInnerHTML={{__html: data.data.data}} /></div>   // data가 있으면 그걸 보여준다 
        }    
        {!!!data && <FileUpload onFileAccepted={onFileAccepted} />   //data가 없으면 파일업로드 페이지 보여준다
        }
      </Flex>
      // </div>
  );
};

export default App;



