const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error if "fullName" arg is not a string or is not provided', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
        expect(formatFullname()).to.equal('Error');
    });

    it('should return an error if "fullName" is String made of one word or more than two', () => {
        expect(formatFullname('John Doe Second')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
    });

    it('should correctly format "fullName" to "Name Lastname" string', () => {
        expect(formatFullname('john doe')).to.equal('John Doe');
        expect(formatFullname('JoHn DoE')).to.equal('John Doe');
        expect(formatFullname('JoHn DOE')).to.equal('John Doe');
    });

});