
/**
 * Created by Jesus Cirion on 12/7/2016.
 */

const Q = require('q');
const data = require('./data');

function findServers() {
  const deferred = Q.defer();
  const randomNumber = Math.random() >= 0.5;

  if (randomNumber) {
    deferred.reject('No online servers.');
    return deferred.promise;
  }

  deferred.resolve(data.generate());
  return deferred.promise;
}

module.exports = {
  findServers: findServers
};
