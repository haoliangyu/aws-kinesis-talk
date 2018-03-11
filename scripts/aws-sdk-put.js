const AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();

kinesis
  .putRecord({
    // stream record in buffer
    Data: new Buffer('your record in string'),
    // AWS hash the partition key and use the value to determine the shard to add
    PartitionKey: 'go to which shard',
    StreamName: 'kinesis stream name'
  })
  .promise()
  .then(() => {
    // do something
  });
