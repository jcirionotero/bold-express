/**
 * Created by Jesus Cirion on 12/7/2016.
 */

const chai = require('chai');
const expect = chai.expect;
const data = require('../servers/data');

describe('servers - data', function () {
  describe('method generate', function () {
    let result;

    beforeEach(() => {
      result = data.generate();
    });

    it('should return an array', function () {
      expect(result).to.be.an('array');
    });

    it('should return an array with length to equal 4', function () {
      expect(result.length).to.eql(4);
    });

    it('should return an array with priority property defined', function () {
      expect(result[0].priority).to.be.a('number');
    });
  });
});
