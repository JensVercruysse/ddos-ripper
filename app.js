const axios = require('axios');

setInterval(function(){ 
  axios.get('http://172.16.4.71:80?say=[todo]-never-gonna-give-you-up')
  .then(response => {
    // console.log(response.data);
    // console.log(response.data.explanation);
    // console.log(".");
  })
  .catch(error => {
    console.log(error);
  });
 }, 5);


