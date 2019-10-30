const db = require('../services/connection');

module.exports = (collection, dbUrl) => ({
  createDocument: async (...document) => {
    const user = await (await db(dbUrl))
      .collection(collection)
      .insertOne(document[0]);
    return user;
  },
  updateDocument: async (idDocument, ...document) => {
    const user = await (await db(dbUrl))
      .collection(collection)
      .updateOne({ _id: idDocument },
        { $set: document[0] });
    return user;
  },
  deleteDocument: async (idDocument) => {
    const user = await (await db(dbUrl))
      .collection(collection)
      .deleteOne({ _id: idDocument });
    return user;
  },
  searchDataBase: async (document) => {
    const result = await (await db(dbUrl))
      .collection(collection)
      .findOne(document);
    return result;
  },
  showListCollectionsDB: async () => {
    const result = await (await db(dbUrl))
      .collection(collection)
      .find({})
    return result;
  },
  showListCollections: async (skip, limit) => {
    const result = await (await db(dbUrl))
      .collection(collection)
      .find({}).skip(skip)
      .limit(limit)
      .toArray();
    return result;
  },
  countCollections: async () => {
    const result = await (await db(dbUrl)).collection(collection).countDocuments();
    return result;
  },
});
