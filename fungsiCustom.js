// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (cb) => {
  const fs = require("fs");
  let dataBacaan = [];
  fs.readFile(file1, "utf8", (err, data) => {
    if (err) return cb(err, null);
    const data1 = JSON.parse(data).message.slice(5);
    fs.readFile(file2, "utf8", (err, data) => {
      if (err) return cb(err, null);
      let data2 = JSON.parse(data)[0].message.slice(5);
      fs.readFile(file3, "utf8", (err, data) => {
        if (err) return cb(err, null);
        let data3 = JSON.parse(data)[0].data.message.slice(5);
        dataBacaan.push(data1, data2, data3);
        cb(null, dataBacaan);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
