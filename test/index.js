/**
 * Created by Jesus Cirion on 12/7/2016.
 */

const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

const index = require('../servers/index');
const data = require('../servers/data');

describe('servers - index', function () {
  describe('method findServers', function () {
    describe('when the random number is true', () => {
      beforeEach(() => {
        Math.random = sinon.stub().returns(0.7);
      });

      it('should reject the promise with an error', done => {
        index.findServers().catch(error => {
          expect(error).to.eql('No online servers.');
          done();
        });
      });
    });

    describe('when the random number is false', () => {
      let values;

      beforeEach(() => {
        values = [
          {
            'url': 'http://doesNotExist.boldtech.co',
            'priority': 1
          }
        ];

        Math.random = sinon.stub().returns(0.3);
        data.generate = sinon.stub().returns(values);
      });

      it('should resolve the promise with the servers', done => {
        index.findServers().then(servers => {
          expect(servers).to.eql(values);
          done();
        });
      });
    });
  });
});
