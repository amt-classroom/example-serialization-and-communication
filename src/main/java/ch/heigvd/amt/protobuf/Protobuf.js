
// Install the protoc-gen-js plugin
// npm install protoc-gen-js --save

// Install the google-protobuf library
// npm install google-protobuf --save

// Install the protobufjs library
// npm install protobufjs --save

// Generate the JS file
// protoc --js_out=import_style=commonjs,binary:. src/main/resources/proto/person.proto

// Import the generated JS file
const personProto = require('../../../../../resources/proto/person_pb');

// Read the binary data from a file
const fs = require('fs');
const binaryData = fs.readFileSync('persons.pb');

// Deserialize the binary data
const persons = personProto.Persons.deserializeBinary(binaryData);

// Display the persons
persons.getPersonsList().forEach(person => {
    console.log(person.getName());
    console.log(person.getAge());
});

// Run the script
// node src/main/java/ch/heigvd/amt/protbuf/Protobuf.js
