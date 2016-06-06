var expect = require('chai').expect,
    util = require('../index.js');     // lwm2m-util module

describe('APIs Arguments Type Check', function() {
    describe('#.getOid', function() {
        it('is a function', function () {
            expect(util.getOid).to.be.a('function');
        });

        it('should throw TypeError if input oid is not a number and not a string', function () {
            expect(function () { return util.getOid(); }).to.throw(TypeError);
            expect(function () { return util.getOid(undefined); }).to.throw(TypeError);
            expect(function () { return util.getOid(null); }).to.throw(TypeError);
            expect(function () { return util.getOid(NaN); }).to.throw(TypeError);
            expect(function () { return util.getOid([]); }).to.throw(TypeError);
            expect(function () { return util.getOid({}); }).to.throw(TypeError);
            expect(function () { return util.getOid(true); }).to.throw(TypeError);
            expect(function () { return util.getOid(new Date()); }).to.throw(TypeError);
            expect(function () { return util.getOid(function () {}); }).to.throw(TypeError);

            expect(function () { return util.getOid(3); }).not.to.throw(Error);
            expect(function () { return util.getOid('3'); }).not.to.throw(Error);
            expect(function () { return util.getOid('xx'); }).not.to.throw(Error);
        });
    });

    describe('#.oidKey', function() {
        it('is a function', function () {
            expect(util.oidKey).to.be.a('function');
        });

        it('should throw TypeError if input oid is not a number and not a string', function () {
            expect(function () { return util.oidKey(); }).to.throw(TypeError);
            expect(function () { return util.oidKey(undefined); }).to.throw(TypeError);
            expect(function () { return util.oidKey(null); }).to.throw(TypeError);
            expect(function () { return util.oidKey(NaN); }).to.throw(TypeError);
            expect(function () { return util.oidKey([]); }).to.throw(TypeError);
            expect(function () { return util.oidKey({}); }).to.throw(TypeError);
            expect(function () { return util.oidKey(true); }).to.throw(TypeError);
            expect(function () { return util.oidKey(new Date()); }).to.throw(TypeError);
            expect(function () { return util.oidKey(function () {}); }).to.throw(TypeError);

            expect(function () { return util.oidKey(3); }).not.to.throw(Error);
            expect(function () { return util.oidKey('3'); }).not.to.throw(Error);
            expect(function () { return util.oidKey('xx'); }).not.to.throw(Error);
        });
    });

    describe('#.oidNum', function() {
        it('is a function', function () {
            expect(util.oidNum).to.be.a('function');
        });

        it('should throw TypeError if input oid is not a number and not a string', function () {
            expect(function () { return util.oidNum(); }).to.throw(TypeError);
            expect(function () { return util.oidNum(undefined); }).to.throw(TypeError);
            expect(function () { return util.oidNum(null); }).to.throw(TypeError);
            expect(function () { return util.oidNum(NaN); }).to.throw(TypeError);
            expect(function () { return util.oidNum([]); }).to.throw(TypeError);
            expect(function () { return util.oidNum({}); }).to.throw(TypeError);
            expect(function () { return util.oidNum(true); }).to.throw(TypeError);
            expect(function () { return util.oidNum(new Date()); }).to.throw(TypeError);
            expect(function () { return util.oidNum(function () {}); }).to.throw(TypeError);

            expect(function () { return util.oidNum(3); }).not.to.throw(Error);
            expect(function () { return util.oidNum('3'); }).not.to.throw(Error);
            expect(function () { return util.oidNum('xx'); }).not.to.throw(Error);
        });
    });

    describe('#.getRid', function() {
        it('is a function', function () {
            expect(util.getRid).to.be.a('function');
        });

        it('should throw TypeError if input rid is not a number and not a string', function () {
            expect(function () { return util.getRid(); }).to.throw(TypeError);
            expect(function () { return util.getRid(undefined); }).to.throw(TypeError);
            expect(function () { return util.getRid(null); }).to.throw(TypeError);
            expect(function () { return util.getRid(NaN); }).to.throw(TypeError);
            expect(function () { return util.getRid([]); }).to.throw(TypeError);
            expect(function () { return util.getRid({}); }).to.throw(TypeError);
            expect(function () { return util.getRid(true); }).to.throw(TypeError);
            expect(function () { return util.getRid(new Date()); }).to.throw(TypeError);
            expect(function () { return util.getRid(function () {}); }).to.throw(TypeError);

            expect(function () { return util.getRid(3); }).not.to.throw(Error);
            expect(function () { return util.getRid('3'); }).not.to.throw(Error);
            expect(function () { return util.getRid('xx'); }).not.to.throw(Error);
        });

        it('should throw TypeError if input oid is not a number and not a string', function () {
            expect(function () { return util.getRid(undefined, 3); }).to.throw(TypeError);
            expect(function () { return util.getRid(null, 3); }).to.throw(TypeError);
            expect(function () { return util.getRid(NaN, 3); }).to.throw(TypeError);
            expect(function () { return util.getRid([], 3); }).to.throw(TypeError);
            expect(function () { return util.getRid({}, 3); }).to.throw(TypeError);
            expect(function () { return util.getRid(true, 3); }).to.throw(TypeError);
            expect(function () { return util.getRid(new Date(), 3); }).to.throw(TypeError);
            expect(function () { return util.getRid(function () {}, 3); }).to.throw(TypeError);

            expect(function () { return util.getRid(3, 3); }).not.to.throw(Error);
            expect(function () { return util.getRid('3', 3); }).not.to.throw(Error);
            expect(function () { return util.getRid('xx', 3); }).not.to.throw(Error);
        });

        it('should throw TypeError if input oid is valid but rid is not a number and not a string', function () {
            expect(function () { return util.getRid(3, null); }).to.throw(TypeError);
            expect(function () { return util.getRid(3, NaN); }).to.throw(TypeError);
            expect(function () { return util.getRid(3, []); }).to.throw(TypeError);
            expect(function () { return util.getRid(3, {}); }).to.throw(TypeError);
            expect(function () { return util.getRid(3, true); }).to.throw(TypeError);
            expect(function () { return util.getRid(3, new Date()); }).to.throw(TypeError);
            expect(function () { return util.getRid(3, function () {}); }).to.throw(TypeError);

            expect(function () { return util.getRid(3, 3); }).not.to.throw(Error);
            expect(function () { return util.getRid(3, '3'); }).not.to.throw(Error);
            expect(function () { return util.getRid(3, 'xx'); }).not.to.throw(Error);
        });
    });

    describe('#.ridKey', function() {
        it('is a function', function () {
            expect(util.ridKey).to.be.a('function');
        });

        it('should throw TypeError if input rid is not a number and not a string', function () {
            expect(function () { return util.ridKey(); }).to.throw(TypeError);
            expect(function () { return util.ridKey(undefined); }).to.throw(TypeError);
            expect(function () { return util.ridKey(null); }).to.throw(TypeError);
            expect(function () { return util.ridKey(NaN); }).to.throw(TypeError);
            expect(function () { return util.ridKey([]); }).to.throw(TypeError);
            expect(function () { return util.ridKey({}); }).to.throw(TypeError);
            expect(function () { return util.ridKey(true); }).to.throw(TypeError);
            expect(function () { return util.ridKey(new Date()); }).to.throw(TypeError);
            expect(function () { return util.ridKey(function () {}); }).to.throw(TypeError);

            expect(function () { return util.ridKey(3); }).not.to.throw(Error);
            expect(function () { return util.ridKey('3'); }).not.to.throw(Error);
            expect(function () { return util.ridKey('xx'); }).not.to.throw(Error);
        });

        it('should throw TypeError if input oid is not a number and not a string', function () {
            expect(function () { return util.ridKey(undefined, 3); }).to.throw(TypeError);
            expect(function () { return util.ridKey(null, 3); }).to.throw(TypeError);
            expect(function () { return util.ridKey(NaN, 3); }).to.throw(TypeError);
            expect(function () { return util.ridKey([], 3); }).to.throw(TypeError);
            expect(function () { return util.ridKey({}, 3); }).to.throw(TypeError);
            expect(function () { return util.ridKey(true, 3); }).to.throw(TypeError);
            expect(function () { return util.ridKey(new Date(), 3); }).to.throw(TypeError);
            expect(function () { return util.ridKey(function () {}, 3); }).to.throw(TypeError);

            expect(function () { return util.ridKey(3, 3); }).not.to.throw(Error);
            expect(function () { return util.ridKey('3', 3); }).not.to.throw(Error);
            expect(function () { return util.ridKey('xx', 3); }).not.to.throw(Error);
        });

        it('should throw TypeError if input oid is valid but rid is not a number and not a string', function () {
            expect(function () { return util.ridKey(3, null); }).to.throw(TypeError);
            expect(function () { return util.ridKey(3, NaN); }).to.throw(TypeError);
            expect(function () { return util.ridKey(3, []); }).to.throw(TypeError);
            expect(function () { return util.ridKey(3, {}); }).to.throw(TypeError);
            expect(function () { return util.ridKey(3, true); }).to.throw(TypeError);
            expect(function () { return util.ridKey(3, new Date()); }).to.throw(TypeError);
            expect(function () { return util.ridKey(3, function () {}); }).to.throw(TypeError);

            expect(function () { return util.ridKey(3, 3); }).not.to.throw(Error);
            expect(function () { return util.ridKey(3, '3'); }).not.to.throw(Error);
            expect(function () { return util.ridKey(3, 'xx'); }).not.to.throw(Error);
        });
    });

    describe('#.ridNum', function() {
        it('is a function', function () {
            expect(util.ridNum).to.be.a('function');
        });

        it('should throw TypeError if input rid is not a number and not a string', function () {
            expect(function () { return util.ridNum(); }).to.throw(TypeError);
            expect(function () { return util.ridNum(undefined); }).to.throw(TypeError);
            expect(function () { return util.ridNum(null); }).to.throw(TypeError);
            expect(function () { return util.ridNum(NaN); }).to.throw(TypeError);
            expect(function () { return util.ridNum([]); }).to.throw(TypeError);
            expect(function () { return util.ridNum({}); }).to.throw(TypeError);
            expect(function () { return util.ridNum(true); }).to.throw(TypeError);
            expect(function () { return util.ridNum(new Date()); }).to.throw(TypeError);
            expect(function () { return util.ridNum(function () {}); }).to.throw(TypeError);

            expect(function () { return util.ridNum(3); }).not.to.throw(Error);
            expect(function () { return util.ridNum('3'); }).not.to.throw(Error);
            expect(function () { return util.ridNum('xx'); }).not.to.throw(Error);
        });

        it('should throw TypeError if input oid is not a number and not a string', function () {
            expect(function () { return util.ridNum(undefined, 3); }).to.throw(TypeError);
            expect(function () { return util.ridNum(null, 3); }).to.throw(TypeError);
            expect(function () { return util.ridNum(NaN, 3); }).to.throw(TypeError);
            expect(function () { return util.ridNum([], 3); }).to.throw(TypeError);
            expect(function () { return util.ridNum({}, 3); }).to.throw(TypeError);
            expect(function () { return util.ridNum(true, 3); }).to.throw(TypeError);
            expect(function () { return util.ridNum(new Date(), 3); }).to.throw(TypeError);
            expect(function () { return util.ridNum(function () {}, 3); }).to.throw(TypeError);

            expect(function () { return util.ridNum(3, 3); }).not.to.throw(Error);
            expect(function () { return util.ridNum('3', 3); }).not.to.throw(Error);
            expect(function () { return util.ridNum('xx', 3); }).not.to.throw(Error);
        });

        it('should throw TypeError if input oid is valid but rid is not a number and not a string', function () {
            expect(function () { return util.ridNum(3, null); }).to.throw(TypeError);
            expect(function () { return util.ridNum(3, NaN); }).to.throw(TypeError);
            expect(function () { return util.ridNum(3, []); }).to.throw(TypeError);
            expect(function () { return util.ridNum(3, {}); }).to.throw(TypeError);
            expect(function () { return util.ridNum(3, true); }).to.throw(TypeError);
            expect(function () { return util.ridNum(3, new Date()); }).to.throw(TypeError);
            expect(function () { return util.ridNum(3, function () {}); }).to.throw(TypeError);

            expect(function () { return util.ridNum(3, 3); }).not.to.throw(Error);
            expect(function () { return util.ridNum(3, '3'); }).not.to.throw(Error);
            expect(function () { return util.ridNum(3, 'xx'); }).not.to.throw(Error);
        });
    });

    describe('#.getRspCode', function() {
        it('is a function', function () {
            expect(util.getRspCode).to.be.a('function');
        });

        it('should throw TypeError if input code is not a number and not a string', function () {
            expect(function () { return util.getRspCode(); }).to.throw(TypeError);
            expect(function () { return util.getRspCode(undefined); }).to.throw(TypeError);
            expect(function () { return util.getRspCode(null); }).to.throw(TypeError);
            expect(function () { return util.getRspCode(NaN); }).to.throw(TypeError);
            expect(function () { return util.getRspCode([]); }).to.throw(TypeError);
            expect(function () { return util.getRspCode({}); }).to.throw(TypeError);
            expect(function () { return util.getRspCode(true); }).to.throw(TypeError);
            expect(function () { return util.getRspCode(new Date()); }).to.throw(TypeError);
            expect(function () { return util.getRspCode(function () {}); }).to.throw(TypeError);

            expect(function () { return util.getRspCode(3); }).not.to.throw(Error);
            expect(function () { return util.getRspCode('3'); }).not.to.throw(Error);
            expect(function () { return util.getRspCode('xx'); }).not.to.throw(Error);
        });
    });

    describe('#.rspCodeKey', function() {
        it('is a function', function () {
            expect(util.rspCodeKey).to.be.a('function');
        });

        it('should throw TypeError if input code is not a number and not a string', function () {
            expect(function () { return util.rspCodeKey(); }).to.throw(TypeError);
            expect(function () { return util.rspCodeKey(undefined); }).to.throw(TypeError);
            expect(function () { return util.rspCodeKey(null); }).to.throw(TypeError);
            expect(function () { return util.rspCodeKey(NaN); }).to.throw(TypeError);
            expect(function () { return util.rspCodeKey([]); }).to.throw(TypeError);
            expect(function () { return util.rspCodeKey({}); }).to.throw(TypeError);
            expect(function () { return util.rspCodeKey(true); }).to.throw(TypeError);
            expect(function () { return util.rspCodeKey(new Date()); }).to.throw(TypeError);
            expect(function () { return util.rspCodeKey(function () {}); }).to.throw(TypeError);

            expect(function () { return util.rspCodeKey(3); }).not.to.throw(Error);
            expect(function () { return util.rspCodeKey('3'); }).not.to.throw(Error);
            expect(function () { return util.rspCodeKey('xx'); }).not.to.throw(Error);
        });
    });

    describe('#.rspCodeNum', function() {
        it('is a function', function () {
            expect(util.rspCodeNum).to.be.a('function');
        });

        it('should throw TypeError if input code is not a number and not a string', function () {
            expect(function () { return util.rspCodeNum(); }).to.throw(TypeError);
            expect(function () { return util.rspCodeNum(undefined); }).to.throw(TypeError);
            expect(function () { return util.rspCodeNum(null); }).to.throw(TypeError);
            expect(function () { return util.rspCodeNum(NaN); }).to.throw(TypeError);
            expect(function () { return util.rspCodeNum([]); }).to.throw(TypeError);
            expect(function () { return util.rspCodeNum({}); }).to.throw(TypeError);
            expect(function () { return util.rspCodeNum(true); }).to.throw(TypeError);
            expect(function () { return util.rspCodeNum(new Date()); }).to.throw(TypeError);
            expect(function () { return util.rspCodeNum(function () {}); }).to.throw(TypeError);

            expect(function () { return util.rspCodeNum(3); }).not.to.throw(Error);
            expect(function () { return util.rspCodeNum('3'); }).not.to.throw(Error);
            expect(function () { return util.rspCodeNum('xx'); }).not.to.throw(Error);
        });
    });

    describe('#.getCmd', function() {
        it('is a function', function () {
            expect(util.getCmd).to.be.a('function');
        });

        it('should throw TypeError if input cmd is not a number and not a string', function () {
            expect(function () { return util.getCmd(); }).to.throw(TypeError);
            expect(function () { return util.getCmd(undefined); }).to.throw(TypeError);
            expect(function () { return util.getCmd(null); }).to.throw(TypeError);
            expect(function () { return util.getCmd(NaN); }).to.throw(TypeError);
            expect(function () { return util.getCmd([]); }).to.throw(TypeError);
            expect(function () { return util.getCmd({}); }).to.throw(TypeError);
            expect(function () { return util.getCmd(true); }).to.throw(TypeError);
            expect(function () { return util.getCmd(new Date()); }).to.throw(TypeError);
            expect(function () { return util.getCmd(function () {}); }).to.throw(TypeError);

            expect(function () { return util.getCmd(3); }).not.to.throw(Error);
            expect(function () { return util.getCmd('3'); }).not.to.throw(Error);
            expect(function () { return util.getCmd('xx'); }).not.to.throw(Error);
        });
    });

    describe('#.cmdKey', function() {
        it('is a function', function () {
            expect(util.cmdKey).to.be.a('function');
        });

        it('should throw TypeError if input cmd is not a number and not a string', function () {
            expect(function () { return util.cmdKey(); }).to.throw(TypeError);
            expect(function () { return util.cmdKey(undefined); }).to.throw(TypeError);
            expect(function () { return util.cmdKey(null); }).to.throw(TypeError);
            expect(function () { return util.cmdKey(NaN); }).to.throw(TypeError);
            expect(function () { return util.cmdKey([]); }).to.throw(TypeError);
            expect(function () { return util.cmdKey({}); }).to.throw(TypeError);
            expect(function () { return util.cmdKey(true); }).to.throw(TypeError);
            expect(function () { return util.cmdKey(new Date()); }).to.throw(TypeError);
            expect(function () { return util.cmdKey(function () {}); }).to.throw(TypeError);

            expect(function () { return util.cmdKey(3); }).not.to.throw(Error);
            expect(function () { return util.cmdKey('3'); }).not.to.throw(Error);
            expect(function () { return util.cmdKey('xx'); }).not.to.throw(Error);
        });
    });

    describe('#.cmdNum', function() {
        it('is a function', function () {
            expect(util.cmdNum).to.be.a('function');
        });

        it('should throw TypeError if input cmd is not a number and not a string', function () {
            expect(function () { return util.cmdNum(); }).to.throw(TypeError);
            expect(function () { return util.cmdNum(undefined); }).to.throw(TypeError);
            expect(function () { return util.cmdNum(null); }).to.throw(TypeError);
            expect(function () { return util.cmdNum(NaN); }).to.throw(TypeError);
            expect(function () { return util.cmdNum([]); }).to.throw(TypeError);
            expect(function () { return util.cmdNum({}); }).to.throw(TypeError);
            expect(function () { return util.cmdNum(true); }).to.throw(TypeError);
            expect(function () { return util.cmdNum(new Date()); }).to.throw(TypeError);
            expect(function () { return util.cmdNum(function () {}); }).to.throw(TypeError);

            expect(function () { return util.cmdNum(3); }).not.to.throw(Error);
            expect(function () { return util.cmdNum('3'); }).not.to.throw(Error);
            expect(function () { return util.cmdNum('xx'); }).not.to.throw(Error);
        });
    });

    describe('#.createPath', function() {
        it('is a function', function () {
            expect(util.createPath).to.be.a('function');
        });

        it('should throw TypeError if any of the input is not a number and not a string', function () {
            expect(function () { return util.createPath(); }).to.throw(TypeError);
            expect(function () { return util.createPath(undefined); }).to.throw(TypeError);
            expect(function () { return util.createPath(null); }).to.throw(TypeError);
            expect(function () { return util.createPath(NaN); }).to.throw(TypeError);
            expect(function () { return util.createPath([]); }).to.throw(TypeError);
            expect(function () { return util.createPath({}); }).to.throw(TypeError);
            expect(function () { return util.createPath(true); }).to.throw(TypeError);
            expect(function () { return util.createPath(new Date()); }).to.throw(TypeError);
            expect(function () { return util.createPath(function () {}); }).to.throw(TypeError);

            expect(function () { return util.createPath(2, undefined); }).to.throw(TypeError);
            expect(function () { return util.createPath(2, null); }).to.throw(TypeError);
            expect(function () { return util.createPath(2, NaN); }).to.throw(TypeError);
            expect(function () { return util.createPath(2, []); }).to.throw(TypeError);
            expect(function () { return util.createPath(2, {}); }).to.throw(TypeError);
            expect(function () { return util.createPath(2, true); }).to.throw(TypeError);
            expect(function () { return util.createPath(2, new Date()); }).to.throw(TypeError);
            expect(function () { return util.createPath(2, function () {}); }).to.throw(TypeError);

            expect(function () { return util.createPath('2', undefined); }).to.throw(TypeError);
            expect(function () { return util.createPath('2', null); }).to.throw(TypeError);
            expect(function () { return util.createPath('2', NaN); }).to.throw(TypeError);
            expect(function () { return util.createPath('2', []); }).to.throw(TypeError);
            expect(function () { return util.createPath('2', {}); }).to.throw(TypeError);
            expect(function () { return util.createPath('2', true); }).to.throw(TypeError);
            expect(function () { return util.createPath('2', new Date()); }).to.throw(TypeError);
            expect(function () { return util.createPath('2', function () {}); }).to.throw(TypeError);

            expect(function () { return util.createPath('.', 2, undefined); }).to.throw(TypeError);
            expect(function () { return util.createPath('.', 2, null); }).to.throw(TypeError);
            expect(function () { return util.createPath('.', 2, NaN); }).to.throw(TypeError);
            expect(function () { return util.createPath('.', 2, []); }).to.throw(TypeError);
            expect(function () { return util.createPath('.', 2, {}); }).to.throw(TypeError);
            expect(function () { return util.createPath('.', 2, true); }).to.throw(TypeError);
            expect(function () { return util.createPath('.', 2, new Date()); }).to.throw(TypeError);
            expect(function () { return util.createPath('.', 2, function () {}); }).to.throw(TypeError);

            expect(function () { return util.createPath(3, 3, 3); }).not.to.throw(Error);
            expect(function () { return util.createPath('3', '3', 1); }).not.to.throw(Error);
            expect(function () { return util.createPath('.', 'xx', 1, 100, 'hello'); }).not.to.throw(Error);
        });

    });

    describe('#.slashPath', function() {
        it('is a function', function () {
            expect(util.slashPath).to.be.a('function');
        });

        it('should throw TypeError if input path is not a string', function () {
            expect(function () { return util.slashPath(); }).to.throw(TypeError);
            expect(function () { return util.slashPath(undefined); }).to.throw(TypeError);
            expect(function () { return util.slashPath(null); }).to.throw(TypeError);
            expect(function () { return util.slashPath(NaN); }).to.throw(TypeError);
            expect(function () { return util.slashPath([]); }).to.throw(TypeError);
            expect(function () { return util.slashPath({}); }).to.throw(TypeError);
            expect(function () { return util.slashPath(true); }).to.throw(TypeError);
            expect(function () { return util.slashPath(new Date()); }).to.throw(TypeError);
            expect(function () { return util.slashPath(function () {}); }).to.throw(TypeError);
            expect(function () { return util.slashPath(3); }).to.throw(Error);

            expect(function () { return util.slashPath('3'); }).not.to.throw(Error);
            expect(function () { return util.slashPath('xx'); }).not.to.throw(Error);
            expect(function () { return util.slashPath('xx.y.z.g.h.j'); }).not.to.throw(Error);
        });
    });

    describe('#.dotPath', function() {
        it('is a function', function () {
            expect(util.dotPath).to.be.a('function');
        });

        it('should throw TypeError if input path is not a string', function () {
            expect(function () { return util.dotPath(); }).to.throw(TypeError);
            expect(function () { return util.dotPath(undefined); }).to.throw(TypeError);
            expect(function () { return util.dotPath(null); }).to.throw(TypeError);
            expect(function () { return util.dotPath(NaN); }).to.throw(TypeError);
            expect(function () { return util.dotPath([]); }).to.throw(TypeError);
            expect(function () { return util.dotPath({}); }).to.throw(TypeError);
            expect(function () { return util.dotPath(true); }).to.throw(TypeError);
            expect(function () { return util.dotPath(new Date()); }).to.throw(TypeError);
            expect(function () { return util.dotPath(function () {}); }).to.throw(TypeError);
            expect(function () { return util.dotPath(3); }).to.throw(Error);

            expect(function () { return util.dotPath('3'); }).not.to.throw(Error);
            expect(function () { return util.dotPath('xx'); }).not.to.throw(Error);
            expect(function () { return util.dotPath('xx.y.z.g.h.j'); }).not.to.throw(Error);
            expect(function () { return util.dotPath('xx/y/z/g/h/j'); }).not.to.throw(Error);
        });
    });

    describe('#.pathItems', function() {
        it('is a function', function () {
            expect(util.pathItems).to.be.a('function');
        });

        it('should throw TypeError if input path is not a string', function () {
            expect(function () { return util.pathItems(); }).to.throw(TypeError);
            expect(function () { return util.pathItems(undefined); }).to.throw(TypeError);
            expect(function () { return util.pathItems(null); }).to.throw(TypeError);
            expect(function () { return util.pathItems(NaN); }).to.throw(TypeError);
            expect(function () { return util.pathItems([]); }).to.throw(TypeError);
            expect(function () { return util.pathItems({}); }).to.throw(TypeError);
            expect(function () { return util.pathItems(true); }).to.throw(TypeError);
            expect(function () { return util.pathItems(new Date()); }).to.throw(TypeError);
            expect(function () { return util.pathItems(function () {}); }).to.throw(TypeError);
            expect(function () { return util.pathItems(3); }).to.throw(Error);

            expect(function () { return util.pathItems('3'); }).not.to.throw(Error);
            expect(function () { return util.pathItems('xx'); }).not.to.throw(Error);
            expect(function () { return util.pathItems('xx.y.z.g.h.j'); }).not.to.throw(Error);
            expect(function () { return util.pathItems('xx/y/z/g/h/j'); }).not.to.throw(Error);
        });
    });

    describe('#.buildPathValuePairs', function() {
        it('is a function', function () {
            expect(util.buildPathValuePairs).to.be.a('function');
        });

        it('should throw TypeError if input rootPath is not a string', function () {
            expect(function () { return util.buildPathValuePairs(); }).to.throw(TypeError);
            expect(function () { return util.buildPathValuePairs(undefined); }).to.throw(TypeError);
            expect(function () { return util.buildPathValuePairs(null); }).to.throw(TypeError);
            expect(function () { return util.buildPathValuePairs(NaN); }).to.throw(TypeError);
            expect(function () { return util.buildPathValuePairs([]); }).to.throw(TypeError);
            expect(function () { return util.buildPathValuePairs({}); }).to.throw(TypeError);
            expect(function () { return util.buildPathValuePairs(true); }).to.throw(TypeError);
            expect(function () { return util.buildPathValuePairs(new Date()); }).to.throw(TypeError);
            expect(function () { return util.buildPathValuePairs(function () {}); }).to.throw(TypeError);
            expect(function () { return util.buildPathValuePairs(3); }).to.throw(Error);

            expect(function () { return util.buildPathValuePairs('3'); }).not.to.throw(Error);
            expect(function () { return util.buildPathValuePairs('xx'); }).not.to.throw(Error);
            expect(function () { return util.buildPathValuePairs('xx.y.z.g.h.j'); }).not.to.throw(Error);
            expect(function () { return util.buildPathValuePairs('xx/y/z/g/h/j'); }).not.to.throw(Error);
        });
    });

    describe('#.isGoodResponse', function() {
        it('is a function', function () {
            expect(util.isGoodResponse).to.be.a('function');
        });

        it('should throw TypeError if input status is not a number and not a string', function () {
            expect(function () { return util.isGoodResponse(); }).to.throw(TypeError);
            expect(function () { return util.isGoodResponse(undefined); }).to.throw(TypeError);
            expect(function () { return util.isGoodResponse(null); }).to.throw(TypeError);
            expect(function () { return util.isGoodResponse(NaN); }).to.throw(TypeError);
            expect(function () { return util.isGoodResponse([]); }).to.throw(TypeError);
            expect(function () { return util.isGoodResponse({}); }).to.throw(TypeError);
            expect(function () { return util.isGoodResponse(true); }).to.throw(TypeError);
            expect(function () { return util.isGoodResponse(new Date()); }).to.throw(TypeError);
            expect(function () { return util.isGoodResponse(function () {}); }).to.throw(TypeError);

            expect(function () { return util.isGoodResponse(3); }).not.to.throw(Error);
            expect(function () { return util.isGoodResponse('3'); }).not.to.throw(Error);
            expect(function () { return util.isGoodResponse('xx'); }).not.to.throw(Error);
        });
    });

    describe('#.getAccessCtrl', function() {
        it('is a function', function () {
            expect(util.getAccessCtrl).to.be.a('function');
        });

        it('should throw TypeError if input rid is not a number and not a string', function () {
            expect(function () { return util.getAccessCtrl(); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(undefined); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(null); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(NaN); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl([]); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl({}); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(true); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(new Date()); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(function () {}); }).to.throw(TypeError);

            expect(function () { return util.getAccessCtrl(3); }).not.to.throw(Error);
            expect(function () { return util.getAccessCtrl('3'); }).not.to.throw(Error);
            expect(function () { return util.getAccessCtrl('xx'); }).not.to.throw(Error);
        });

        it('should throw TypeError if input rid is valid but oid is not a number and not a string', function () {
            expect(function () { return util.getAccessCtrl(null, 3); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(NaN, 3); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl([], 3); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl({}, 3); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(true, 3); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(new Date(), 3); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(function () {}, 3); }).to.throw(TypeError);

            expect(function () { return util.getAccessCtrl(3, 3); }).not.to.throw(Error);
            expect(function () { return util.getAccessCtrl('3', 3); }).not.to.throw(Error);
            expect(function () { return util.getAccessCtrl('xx', 3); }).not.to.throw(Error);
        });

        it('should throw TypeError if input oid is valid but rid is not a number and not a string', function () {
            expect(function () { return util.getAccessCtrl(3, null); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(3, NaN); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(3, []); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(3, {}); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(3, true); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(3, new Date()); }).to.throw(TypeError);
            expect(function () { return util.getAccessCtrl(3, function () {}); }).to.throw(TypeError);

            expect(function () { return util.getAccessCtrl(3, 3); }).not.to.throw(Error);
            expect(function () { return util.getAccessCtrl(3, '3'); }).not.to.throw(Error);
            expect(function () { return util.getAccessCtrl(3, 'xx'); }).not.to.throw(Error);
        });
    });

    describe('#.jsonify', function() {
        it('is a function', function () {
            expect(util.jsonify).to.be.a('function');
        });

        it('should throw TypeError if input str is not a string', function () {
            expect(function () { return util.jsonify(); }).to.throw(TypeError);
            expect(function () { return util.jsonify(undefined); }).to.throw(TypeError);
            expect(function () { return util.jsonify(null); }).to.throw(TypeError);
            expect(function () { return util.jsonify(NaN); }).to.throw(TypeError);
            expect(function () { return util.jsonify([]); }).to.throw(TypeError);
            expect(function () { return util.jsonify({}); }).to.throw(TypeError);
            expect(function () { return util.jsonify(true); }).to.throw(TypeError);
            expect(function () { return util.jsonify(new Date()); }).to.throw(TypeError);
            expect(function () { return util.jsonify(function () {}); }).to.throw(TypeError);
            expect(function () { return util.jsonify(3); }).to.throw(Error);

            expect(function () { return util.jsonify('3'); }).not.to.throw(Error);
            expect(function () { return util.jsonify('xx'); }).not.to.throw(Error);
            expect(function () { return util.jsonify('xx.y.z.g.h.j'); }).not.to.throw(Error);
            expect(function () { return util.jsonify('xx/y/z/g/h/j'); }).not.to.throw(Error);
        });
    });
});