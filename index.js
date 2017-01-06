var projectId = "cloud-vision-test-154722";

var vision = require('@google-cloud/vision');

var visionClient = vision({
    projectId: 'my-project',
    keyFilename: './config/keyfile.json'
});

visionClient.detectText('./image.jpg', function(err, text) {
  if (err) {
    console.log('Error: ' + err);
  } else {
    console.log(text);
  }
});
