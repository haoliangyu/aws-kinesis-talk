const AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();

kinesis
  .getShardIterator({
    ShardId: '123',
    ShardIteratorType: 'AFTER_SEQUENCE_NUMBER',
    StreamName: 'nest',
    StartingSequenceNumber: '1'
  })
  .promise()
  .then((result) => {
    const iterator = result.ShardIterator;
    return kinesis.getRecords({
      ShardIterator: 'iterator',
      Limit: 10
    });
  })
  .promise()
  .then((result) => {
    const records = result.Records;
    const nextIterator = result.NextShardIterator;
  });
