'use strict';

const sampleData = require('./sample-data.json');

module.exports = function (app, cb) {

  const promises = [];

  Object.keys(sampleData).forEach(modelName => {
    const Model = app.models[modelName];
    const modelItems = sampleData[modelName];

    modelItems.forEach(modelItem => {
      promises.push(new Promise(resolve => {
        Model.upsert(modelItem).then(resolve)
      }))
    })
  });


  return Promise
    .all(promises)
    .then((res) => {
      console.log('Created %s items', res.length);
      return cb()
    })
    .catch(cb);

};
