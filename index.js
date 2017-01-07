var projectId = "cloud-vision-test-154722";
var key = process.env.GCLOUD_API_KEY;

var fetch = require('node-fetch');
var fs = require('fs');

var file = fs.readFileSync('./image.jpg');
var base64_file = file.toString('base64');

// Construct google cloud vision request data
function buildVisionReqBody(var base64ImageFile) {
  var requestBody = {};

  requestBody.requests = [];
  var image = {'content':  base64ImageFile };
  var features = [{'type': 'TEXT_DETECTION'}];
  requestBody.requests[0] = {image, features};

  return JSON.stringify(requestBody);
}

fetch('https://vision.googleapis.com/v1/images:annotate?key=' + key, { method: 'POST', body: JSON.stringify(data) })
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    console.log(JSON.stringify(json));
  })
  .catch((error) => {console.log(error)});
