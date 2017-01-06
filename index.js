var projectId = "cloud-vision-test-154722";

var googleCloud = require('google-cloud');

var visionClient = googleCloud.vision({
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
