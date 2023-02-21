// src/mongodb.ts
import mongoose from 'mongoose';

(async () => {
  const databseName = 'testdb';

  // MongoDB
  const { connect, connection, model, Schema, Types } = mongoose;

  await connect(`mongodb://root:example@localhost:27017/${databseName}`, {
    connectTimeoutMS: 1000,
    authSource: 'admin',
  });

  const testSchema = new Schema({
    id: Types.ObjectId,
    key: String,
    key2: String,
    createdAt: Date,
  });

  // Model
  const testModel = model('test', testSchema);

  // insert
  const test = await testModel.create({ key: 'value', createdAt: new Date() });
  console.log(test);

  // update
  await testModel.findOneAndUpdate(test._id, { $set: { key2: 'value2' } });

  // select
  const tests = await testModel.find();
  console.log(tests);

  // delete
  await testModel.deleteOne({ _id: test._id });

  await connection.close();
})();
