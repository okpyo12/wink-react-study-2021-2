import React from "react";
import { Flex } from "@chakra-ui/react";
import FileUpload from "./components/FileUpload";
import { useMutation } from "react-query";
import axios from "axios";

const App = () => {
  const { mutate, data } = useMutation((file) => {  //data는 post 요청 받고 나서 돌아오는 결과값 
    const formData = new FormData();
    formData.append("file", file);
    return axios.post("/upload", formData, {  //upload 주소로 post 요청 
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
    <Flex w="1000px" h="1000px" alignItems="center" justifyContent="center">
      {data && <div><div dangerouslySetInnerHTML={{__html: data.data.data}} /></div>// data가 있으면 그걸 보여준다
      }    
      {!!!data && <FileUpload onFileAccepted={onFileAccepted} /> //data가 없으면 파일업로드 페이지 보여준다
      }    
    </Flex>
  );
};

export default App;
