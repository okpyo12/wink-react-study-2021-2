var express = require("express");
var router = express.Router();
var multer = require("multer"); // 1

var storage = multer.diskStorage({    //보낸 파일을 어떤 경로에 저장할 것인지 
  // 2
  destination(req, file, cb) {
    cb(null, "uploadedFiles/");
  },
  filename(req, file, cb) {
    cb(null, "sample.csv");    //보낸 파일을 이 이름으로 저장 
  },
});
var upload = multer({ dest: "uploadedFiles/" }); // 3-1
var uploadWithOriginalFilename = multer({ storage: storage });

router.get("/", function (req, res) {
  res.json({"hi": "12"});
});

router.post("/upload", uploadWithOriginalFilename.single("file"), function (req, res) {   //frontend에서 보낸 파일 받음 
  // 4

  const spawn = require('child_process').spawn
  const result = spawn('python3', ['run.py'])   //파이썬 파일 실행 

  result.stdout.on('data', function(data) {
    console.log(data.toString())
    res.json({ data: data.toString() });    //결과값 리턴 코드 data 변수 안에 나온 결과값 모두 넣음
  })

  result.stderr.on('data', function(data) {   //에러나면 에러메시지 출력
    console.log(data.toString())
  })
  console.log(req.file);
  // res.json({ file: req.file });
});

module.exports = router;
