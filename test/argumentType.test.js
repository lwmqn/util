/* eslint-env mocha */
const { expect } = require('chai')
const util = require('../index.js') // lwm2m-util module

describe('APIs Arguments Type Check', () => {
  describe('#.getOid', () => {
    it('is a function', () => {
      expect(util.getOid).to.be.a('function')
    })

    it('should throw TypeError if input oid is not a number and not a string', () => {
      expect(() => util.getOid()).to.throw(TypeError)
      expect(() => util.getOid(undefined)).to.throw(TypeError)
      expect(() => util.getOid(null)).to.throw(TypeError)
      expect(() => util.getOid(NaN)).to.throw(TypeError)
      expect(() => util.getOid([])).to.throw(TypeError)
      expect(() => util.getOid({})).to.throw(TypeError)
      expect(() => util.getOid(true)).to.throw(TypeError)
      expect(() => util.getOid(new Date())).to.throw(TypeError)
      expect(() => util.getOid(() => {})).to.throw(TypeError)

      expect(() => util.getOid(3)).not.to.throw(Error)
      expect(() => util.getOid('3')).not.to.throw(Error)
      expect(() => util.getOid('xx')).not.to.throw(Error)
    })
  })

  describe('#.oidKey', () => {
    it('is a function', () => {
      expect(util.oidKey).to.be.a('function')
    })

    it('should throw TypeError if input oid is not a number and not a string', () => {
      expect(() => util.oidKey()).to.throw(TypeError)
      expect(() => util.oidKey(undefined)).to.throw(TypeError)
      expect(() => util.oidKey(null)).to.throw(TypeError)
      expect(() => util.oidKey(NaN)).to.throw(TypeError)
      expect(() => util.oidKey([])).to.throw(TypeError)
      expect(() => util.oidKey({})).to.throw(TypeError)
      expect(() => util.oidKey(true)).to.throw(TypeError)
      expect(() => util.oidKey(new Date())).to.throw(TypeError)
      expect(() => util.oidKey(() => {})).to.throw(TypeError)

      expect(() => util.oidKey(3)).not.to.throw(Error)
      expect(() => util.oidKey('3')).not.to.throw(Error)
      expect(() => util.oidKey('xx')).not.to.throw(Error)
    })
  })

  describe('#.oidNum', () => {
    it('is a function', () => {
      expect(util.oidNum).to.be.a('function')
    })

    it('should throw TypeError if input oid is not a number and not a string', () => {
      expect(() => util.oidNum()).to.throw(TypeError)
      expect(() => util.oidNum(undefined)).to.throw(TypeError)
      expect(() => util.oidNum(null)).to.throw(TypeError)
      expect(() => util.oidNum(NaN)).to.throw(TypeError)
      expect(() => util.oidNum([])).to.throw(TypeError)
      expect(() => util.oidNum({})).to.throw(TypeError)
      expect(() => util.oidNum(true)).to.throw(TypeError)
      expect(() => util.oidNum(new Date())).to.throw(TypeError)
      expect(() => util.oidNum(() => {})).to.throw(TypeError)

      expect(() => util.oidNum(3)).not.to.throw(Error)
      expect(() => util.oidNum('3')).not.to.throw(Error)
      expect(() => util.oidNum('xx')).not.to.throw(Error)
    })
  })

  describe('#.getRid', () => {
    it('is a function', () => {
      expect(util.getRid).to.be.a('function')
    })

    it('should throw TypeError if input rid is not a number and not a string', () => {
      expect(() => util.getRid()).to.throw(TypeError)
      expect(() => util.getRid(undefined)).to.throw(TypeError)
      expect(() => util.getRid(null)).to.throw(TypeError)
      expect(() => util.getRid(NaN)).to.throw(TypeError)
      expect(() => util.getRid([])).to.throw(TypeError)
      expect(() => util.getRid({})).to.throw(TypeError)
      expect(() => util.getRid(true)).to.throw(TypeError)
      expect(() => util.getRid(new Date())).to.throw(TypeError)
      expect(() => util.getRid(() => {})).to.throw(TypeError)

      expect(() => util.getRid(3)).not.to.throw(Error)
      expect(() => util.getRid('3')).not.to.throw(Error)
      expect(() => util.getRid('xx')).not.to.throw(Error)
    })

    it('should throw TypeError if input oid is not a number and not a string', () => {
      expect(() => util.getRid(undefined, 3)).to.throw(TypeError)
      expect(() => util.getRid(null, 3)).to.throw(TypeError)
      expect(() => util.getRid(NaN, 3)).to.throw(TypeError)
      expect(() => util.getRid([], 3)).to.throw(TypeError)
      expect(() => util.getRid({}, 3)).to.throw(TypeError)
      expect(() => util.getRid(true, 3)).to.throw(TypeError)
      expect(() => util.getRid(new Date(), 3)).to.throw(TypeError)
      expect(() => util.getRid(() => {}, 3)).to.throw(TypeError)

      expect(() => util.getRid(3, 3)).not.to.throw(Error)
      expect(() => util.getRid('3', 3)).not.to.throw(Error)
      expect(() => util.getRid('xx', 3)).not.to.throw(Error)
    })

    it('should throw TypeError if input oid is valid but rid is not a number and not a string', () => {
      expect(() => util.getRid(3, null)).to.throw(TypeError)
      expect(() => util.getRid(3, NaN)).to.throw(TypeError)
      expect(() => util.getRid(3, [])).to.throw(TypeError)
      expect(() => util.getRid(3, {})).to.throw(TypeError)
      expect(() => util.getRid(3, true)).to.throw(TypeError)
      expect(() => util.getRid(3, new Date())).to.throw(TypeError)
      expect(() => util.getRid(3, () => {})).to.throw(TypeError)

      expect(() => util.getRid(3, 3)).not.to.throw(Error)
      expect(() => util.getRid(3, '3')).not.to.throw(Error)
      expect(() => util.getRid(3, 'xx')).not.to.throw(Error)
    })
  })

  describe('#.ridKey', () => {
    it('is a function', () => {
      expect(util.ridKey).to.be.a('function')
    })

    it('should throw TypeError if input rid is not a number and not a string', () => {
      expect(() => util.ridKey()).to.throw(TypeError)
      expect(() => util.ridKey(undefined)).to.throw(TypeError)
      expect(() => util.ridKey(null)).to.throw(TypeError)
      expect(() => util.ridKey(NaN)).to.throw(TypeError)
      expect(() => util.ridKey([])).to.throw(TypeError)
      expect(() => util.ridKey({})).to.throw(TypeError)
      expect(() => util.ridKey(true)).to.throw(TypeError)
      expect(() => util.ridKey(new Date())).to.throw(TypeError)
      expect(() => util.ridKey(() => {})).to.throw(TypeError)

      expect(() => util.ridKey(3)).not.to.throw(Error)
      expect(() => util.ridKey('3')).not.to.throw(Error)
      expect(() => util.ridKey('xx')).not.to.throw(Error)
    })

    it('should throw TypeError if input oid is not a number and not a string', () => {
      expect(() => util.ridKey(undefined, 3)).to.throw(TypeError)
      expect(() => util.ridKey(null, 3)).to.throw(TypeError)
      expect(() => util.ridKey(NaN, 3)).to.throw(TypeError)
      expect(() => util.ridKey([], 3)).to.throw(TypeError)
      expect(() => util.ridKey({}, 3)).to.throw(TypeError)
      expect(() => util.ridKey(true, 3)).to.throw(TypeError)
      expect(() => util.ridKey(new Date(), 3)).to.throw(TypeError)
      expect(() => util.ridKey(() => {}, 3)).to.throw(TypeError)

      expect(() => util.ridKey(3, 3)).not.to.throw(Error)
      expect(() => util.ridKey('3', 3)).not.to.throw(Error)
      expect(() => util.ridKey('xx', 3)).not.to.throw(Error)
    })

    it('should throw TypeError if input oid is valid but rid is not a number and not a string', () => {
      expect(() => util.ridKey(3, null)).to.throw(TypeError)
      expect(() => util.ridKey(3, NaN)).to.throw(TypeError)
      expect(() => util.ridKey(3, [])).to.throw(TypeError)
      expect(() => util.ridKey(3, {})).to.throw(TypeError)
      expect(() => util.ridKey(3, true)).to.throw(TypeError)
      expect(() => util.ridKey(3, new Date())).to.throw(TypeError)
      expect(() => util.ridKey(3, () => {})).to.throw(TypeError)

      expect(() => util.ridKey(3, 3)).not.to.throw(Error)
      expect(() => util.ridKey(3, '3')).not.to.throw(Error)
      expect(() => util.ridKey(3, 'xx')).not.to.throw(Error)
    })
  })

  describe('#.ridNum', () => {
    it('is a function', () => {
      expect(util.ridNum).to.be.a('function')
    })

    it('should throw TypeError if input rid is not a number and not a string', () => {
      expect(() => util.ridNum()).to.throw(TypeError)
      expect(() => util.ridNum(undefined)).to.throw(TypeError)
      expect(() => util.ridNum(null)).to.throw(TypeError)
      expect(() => util.ridNum(NaN)).to.throw(TypeError)
      expect(() => util.ridNum([])).to.throw(TypeError)
      expect(() => util.ridNum({})).to.throw(TypeError)
      expect(() => util.ridNum(true)).to.throw(TypeError)
      expect(() => util.ridNum(new Date())).to.throw(TypeError)
      expect(() => util.ridNum(() => {})).to.throw(TypeError)

      expect(() => util.ridNum(3)).not.to.throw(Error)
      expect(() => util.ridNum('3')).not.to.throw(Error)
      expect(() => util.ridNum('xx')).not.to.throw(Error)
    })

    it('should throw TypeError if input oid is not a number and not a string', () => {
      expect(() => util.ridNum(undefined, 3)).to.throw(TypeError)
      expect(() => util.ridNum(null, 3)).to.throw(TypeError)
      expect(() => util.ridNum(NaN, 3)).to.throw(TypeError)
      expect(() => util.ridNum([], 3)).to.throw(TypeError)
      expect(() => util.ridNum({}, 3)).to.throw(TypeError)
      expect(() => util.ridNum(true, 3)).to.throw(TypeError)
      expect(() => util.ridNum(new Date(), 3)).to.throw(TypeError)
      expect(() => util.ridNum(() => {}, 3)).to.throw(TypeError)

      expect(() => util.ridNum(3, 3)).not.to.throw(Error)
      expect(() => util.ridNum('3', 3)).not.to.throw(Error)
      expect(() => util.ridNum('xx', 3)).not.to.throw(Error)
    })

    it('should throw TypeError if input oid is valid but rid is not a number and not a string', () => {
      expect(() => util.ridNum(3, null)).to.throw(TypeError)
      expect(() => util.ridNum(3, NaN)).to.throw(TypeError)
      expect(() => util.ridNum(3, [])).to.throw(TypeError)
      expect(() => util.ridNum(3, {})).to.throw(TypeError)
      expect(() => util.ridNum(3, true)).to.throw(TypeError)
      expect(() => util.ridNum(3, new Date())).to.throw(TypeError)
      expect(() => util.ridNum(3, () => {})).to.throw(TypeError)

      expect(() => util.ridNum(3, 3)).not.to.throw(Error)
      expect(() => util.ridNum(3, '3')).not.to.throw(Error)
      expect(() => util.ridNum(3, 'xx')).not.to.throw(Error)
    })
  })

  describe('#.getRspCode', () => {
    it('is a function', () => {
      expect(util.getRspCode).to.be.a('function')
    })

    it('should throw TypeError if input code is not a number and not a string', () => {
      expect(() => util.getRspCode()).to.throw(TypeError)
      expect(() => util.getRspCode(undefined)).to.throw(TypeError)
      expect(() => util.getRspCode(null)).to.throw(TypeError)
      expect(() => util.getRspCode(NaN)).to.throw(TypeError)
      expect(() => util.getRspCode([])).to.throw(TypeError)
      expect(() => util.getRspCode({})).to.throw(TypeError)
      expect(() => util.getRspCode(true)).to.throw(TypeError)
      expect(() => util.getRspCode(new Date())).to.throw(TypeError)
      expect(() => util.getRspCode(() => {})).to.throw(TypeError)

      expect(() => util.getRspCode(3)).not.to.throw(Error)
      expect(() => util.getRspCode('3')).not.to.throw(Error)
      expect(() => util.getRspCode('xx')).not.to.throw(Error)
    })
  })

  describe('#.rspCodeKey', () => {
    it('is a function', () => {
      expect(util.rspCodeKey).to.be.a('function')
    })

    it('should throw TypeError if input code is not a number and not a string', () => {
      expect(() => util.rspCodeKey()).to.throw(TypeError)
      expect(() => util.rspCodeKey(undefined)).to.throw(TypeError)
      expect(() => util.rspCodeKey(null)).to.throw(TypeError)
      expect(() => util.rspCodeKey(NaN)).to.throw(TypeError)
      expect(() => util.rspCodeKey([])).to.throw(TypeError)
      expect(() => util.rspCodeKey({})).to.throw(TypeError)
      expect(() => util.rspCodeKey(true)).to.throw(TypeError)
      expect(() => util.rspCodeKey(new Date())).to.throw(TypeError)
      expect(() => util.rspCodeKey(() => {})).to.throw(TypeError)

      expect(() => util.rspCodeKey(3)).not.to.throw(Error)
      expect(() => util.rspCodeKey('3')).not.to.throw(Error)
      expect(() => util.rspCodeKey('xx')).not.to.throw(Error)
    })
  })

  describe('#.rspCodeNum', () => {
    it('is a function', () => {
      expect(util.rspCodeNum).to.be.a('function')
    })

    it('should throw TypeError if input code is not a number and not a string', () => {
      expect(() => util.rspCodeNum()).to.throw(TypeError)
      expect(() => util.rspCodeNum(undefined)).to.throw(TypeError)
      expect(() => util.rspCodeNum(null)).to.throw(TypeError)
      expect(() => util.rspCodeNum(NaN)).to.throw(TypeError)
      expect(() => util.rspCodeNum([])).to.throw(TypeError)
      expect(() => util.rspCodeNum({})).to.throw(TypeError)
      expect(() => util.rspCodeNum(true)).to.throw(TypeError)
      expect(() => util.rspCodeNum(new Date())).to.throw(TypeError)
      expect(() => util.rspCodeNum(() => {})).to.throw(TypeError)

      expect(() => util.rspCodeNum(3)).not.to.throw(Error)
      expect(() => util.rspCodeNum('3')).not.to.throw(Error)
      expect(() => util.rspCodeNum('xx')).not.to.throw(Error)
    })
  })

  describe('#.getCmd', () => {
    it('is a function', () => {
      expect(util.getCmd).to.be.a('function')
    })

    it('should throw TypeError if input cmd is not a number and not a string', () => {
      expect(() => util.getCmd()).to.throw(TypeError)
      expect(() => util.getCmd(undefined)).to.throw(TypeError)
      expect(() => util.getCmd(null)).to.throw(TypeError)
      expect(() => util.getCmd(NaN)).to.throw(TypeError)
      expect(() => util.getCmd([])).to.throw(TypeError)
      expect(() => util.getCmd({})).to.throw(TypeError)
      expect(() => util.getCmd(true)).to.throw(TypeError)
      expect(() => util.getCmd(new Date())).to.throw(TypeError)
      expect(() => util.getCmd(() => {})).to.throw(TypeError)

      expect(() => util.getCmd(3)).not.to.throw(Error)
      expect(() => util.getCmd('3')).not.to.throw(Error)
      expect(() => util.getCmd('xx')).not.to.throw(Error)
    })
  })

  describe('#.cmdKey', () => {
    it('is a function', () => {
      expect(util.cmdKey).to.be.a('function')
    })

    it('should throw TypeError if input cmd is not a number and not a string', () => {
      expect(() => util.cmdKey()).to.throw(TypeError)
      expect(() => util.cmdKey(undefined)).to.throw(TypeError)
      expect(() => util.cmdKey(null)).to.throw(TypeError)
      expect(() => util.cmdKey(NaN)).to.throw(TypeError)
      expect(() => util.cmdKey([])).to.throw(TypeError)
      expect(() => util.cmdKey({})).to.throw(TypeError)
      expect(() => util.cmdKey(true)).to.throw(TypeError)
      expect(() => util.cmdKey(new Date())).to.throw(TypeError)
      expect(() => util.cmdKey(() => {})).to.throw(TypeError)

      expect(() => util.cmdKey(3)).not.to.throw(Error)
      expect(() => util.cmdKey('3')).not.to.throw(Error)
      expect(() => util.cmdKey('xx')).not.to.throw(Error)
    })
  })

  describe('#.cmdNum', () => {
    it('is a function', () => {
      expect(util.cmdNum).to.be.a('function')
    })

    it('should throw TypeError if input cmd is not a number and not a string', () => {
      expect(() => util.cmdNum()).to.throw(TypeError)
      expect(() => util.cmdNum(undefined)).to.throw(TypeError)
      expect(() => util.cmdNum(null)).to.throw(TypeError)
      expect(() => util.cmdNum(NaN)).to.throw(TypeError)
      expect(() => util.cmdNum([])).to.throw(TypeError)
      expect(() => util.cmdNum({})).to.throw(TypeError)
      expect(() => util.cmdNum(true)).to.throw(TypeError)
      expect(() => util.cmdNum(new Date())).to.throw(TypeError)
      expect(() => util.cmdNum(() => {})).to.throw(TypeError)

      expect(() => util.cmdNum(3)).not.to.throw(Error)
      expect(() => util.cmdNum('3')).not.to.throw(Error)
      expect(() => util.cmdNum('xx')).not.to.throw(Error)
    })
  })

  describe('#.createPath', () => {
    it('is a function', () => {
      expect(util.createPath).to.be.a('function')
    })

    it('should throw TypeError if any of the input is not a number and not a string', () => {
      expect(() => util.createPath()).to.throw(TypeError)
      expect(() => util.createPath(undefined)).to.throw(TypeError)
      expect(() => util.createPath(null)).to.throw(TypeError)
      expect(() => util.createPath(NaN)).to.throw(TypeError)
      expect(() => util.createPath([])).to.throw(TypeError)
      expect(() => util.createPath({})).to.throw(TypeError)
      expect(() => util.createPath(true)).to.throw(TypeError)
      expect(() => util.createPath(new Date())).to.throw(TypeError)
      expect(() => util.createPath(() => {})).to.throw(TypeError)

      expect(() => util.createPath(2, undefined)).to.throw(TypeError)
      expect(() => util.createPath(2, null)).to.throw(TypeError)
      expect(() => util.createPath(2, NaN)).to.throw(TypeError)
      expect(() => util.createPath(2, [])).to.throw(TypeError)
      expect(() => util.createPath(2, {})).to.throw(TypeError)
      expect(() => util.createPath(2, true)).to.throw(TypeError)
      expect(() => util.createPath(2, new Date())).to.throw(TypeError)
      expect(() => util.createPath(2, () => {})).to.throw(TypeError)

      expect(() => util.createPath('2', undefined)).to.throw(TypeError)
      expect(() => util.createPath('2', null)).to.throw(TypeError)
      expect(() => util.createPath('2', NaN)).to.throw(TypeError)
      expect(() => util.createPath('2', [])).to.throw(TypeError)
      expect(() => util.createPath('2', {})).to.throw(TypeError)
      expect(() => util.createPath('2', true)).to.throw(TypeError)
      expect(() => util.createPath('2', new Date())).to.throw(TypeError)
      expect(() => util.createPath('2', () => {})).to.throw(TypeError)

      expect(() => util.createPath('.', 2, undefined)).to.throw(TypeError)
      expect(() => util.createPath('.', 2, null)).to.throw(TypeError)
      expect(() => util.createPath('.', 2, NaN)).to.throw(TypeError)
      expect(() => util.createPath('.', 2, [])).to.throw(TypeError)
      expect(() => util.createPath('.', 2, {})).to.throw(TypeError)
      expect(() => util.createPath('.', 2, true)).to.throw(TypeError)
      expect(() => util.createPath('.', 2, new Date())).to.throw(TypeError)
      expect(() => util.createPath('.', 2, () => {})).to.throw(TypeError)

      expect(() => util.createPath(3, 3, 3)).not.to.throw(Error)
      expect(() => util.createPath('3', '3', 1)).not.to.throw(Error)
      expect(() => util.createPath('.', 'xx', 1, 100, 'hello')).not.to.throw(Error)
    })
  })

  describe('#.slashPath', () => {
    it('is a function', () => {
      expect(util.slashPath).to.be.a('function')
    })

    it('should throw TypeError if input path is not a string', () => {
      expect(() => util.slashPath()).to.throw(TypeError)
      expect(() => util.slashPath(undefined)).to.throw(TypeError)
      expect(() => util.slashPath(null)).to.throw(TypeError)
      expect(() => util.slashPath(NaN)).to.throw(TypeError)
      expect(() => util.slashPath([])).to.throw(TypeError)
      expect(() => util.slashPath({})).to.throw(TypeError)
      expect(() => util.slashPath(true)).to.throw(TypeError)
      expect(() => util.slashPath(new Date())).to.throw(TypeError)
      expect(() => util.slashPath(() => {})).to.throw(TypeError)
      expect(() => util.slashPath(3)).to.throw(Error)

      expect(() => util.slashPath('3')).not.to.throw(Error)
      expect(() => util.slashPath('xx')).not.to.throw(Error)
      expect(() => util.slashPath('xx.y.z.g.h.j')).not.to.throw(Error)
    })
  })

  describe('#.dotPath', () => {
    it('is a function', () => {
      expect(util.dotPath).to.be.a('function')
    })

    it('should throw TypeError if input path is not a string', () => {
      expect(() => util.dotPath()).to.throw(TypeError)
      expect(() => util.dotPath(undefined)).to.throw(TypeError)
      expect(() => util.dotPath(null)).to.throw(TypeError)
      expect(() => util.dotPath(NaN)).to.throw(TypeError)
      expect(() => util.dotPath([])).to.throw(TypeError)
      expect(() => util.dotPath({})).to.throw(TypeError)
      expect(() => util.dotPath(true)).to.throw(TypeError)
      expect(() => util.dotPath(new Date())).to.throw(TypeError)
      expect(() => util.dotPath(() => {})).to.throw(TypeError)
      expect(() => util.dotPath(3)).to.throw(Error)

      expect(() => util.dotPath('3')).not.to.throw(Error)
      expect(() => util.dotPath('xx')).not.to.throw(Error)
      expect(() => util.dotPath('xx.y.z.g.h.j')).not.to.throw(Error)
      expect(() => util.dotPath('xx/y/z/g/h/j')).not.to.throw(Error)
    })
  })

  describe('#.pathItems', () => {
    it('is a function', () => {
      expect(util.pathItems).to.be.a('function')
    })

    it('should throw TypeError if input path is not a string', () => {
      expect(() => util.pathItems()).to.throw(TypeError)
      expect(() => util.pathItems(undefined)).to.throw(TypeError)
      expect(() => util.pathItems(null)).to.throw(TypeError)
      expect(() => util.pathItems(NaN)).to.throw(TypeError)
      expect(() => util.pathItems([])).to.throw(TypeError)
      expect(() => util.pathItems({})).to.throw(TypeError)
      expect(() => util.pathItems(true)).to.throw(TypeError)
      expect(() => util.pathItems(new Date())).to.throw(TypeError)
      expect(() => util.pathItems(() => {})).to.throw(TypeError)
      expect(() => util.pathItems(3)).to.throw(Error)

      expect(() => util.pathItems('3')).not.to.throw(Error)
      expect(() => util.pathItems('xx')).not.to.throw(Error)
      expect(() => util.pathItems('xx.y.z.g.h.j')).not.to.throw(Error)
      expect(() => util.pathItems('xx/y/z/g/h/j')).not.to.throw(Error)
    })
  })

  describe('#.buildPathValuePairs', () => {
    it('is a function', () => {
      expect(util.buildPathValuePairs).to.be.a('function')
    })

    it('should throw TypeError if input rootPath is not a string', () => {
      expect(() => util.buildPathValuePairs()).to.throw(TypeError)
      expect(() => util.buildPathValuePairs(undefined)).to.throw(TypeError)
      expect(() => util.buildPathValuePairs(null)).to.throw(TypeError)
      expect(() => util.buildPathValuePairs(NaN)).to.throw(TypeError)
      expect(() => util.buildPathValuePairs([])).to.throw(TypeError)
      expect(() => util.buildPathValuePairs({})).to.throw(TypeError)
      expect(() => util.buildPathValuePairs(true)).to.throw(TypeError)
      expect(() => util.buildPathValuePairs(new Date())).to.throw(TypeError)
      expect(() => util.buildPathValuePairs(() => {})).to.throw(TypeError)
      expect(() => util.buildPathValuePairs(3)).to.throw(Error)

      expect(() => util.buildPathValuePairs('3')).not.to.throw(Error)
      expect(() => util.buildPathValuePairs('xx')).not.to.throw(Error)
      expect(() => util.buildPathValuePairs('xx.y.z.g.h.j')).not.to.throw(Error)
      expect(() => util.buildPathValuePairs('xx/y/z/g/h/j')).not.to.throw(Error)
    })
  })

  describe('#.isGoodResponse', () => {
    it('is a function', () => {
      expect(util.isGoodResponse).to.be.a('function')
    })

    it('should throw TypeError if input status is not a number and not a string', () => {
      expect(() => util.isGoodResponse()).to.throw(TypeError)
      expect(() => util.isGoodResponse(undefined)).to.throw(TypeError)
      expect(() => util.isGoodResponse(null)).to.throw(TypeError)
      expect(() => util.isGoodResponse(NaN)).to.throw(TypeError)
      expect(() => util.isGoodResponse([])).to.throw(TypeError)
      expect(() => util.isGoodResponse({})).to.throw(TypeError)
      expect(() => util.isGoodResponse(true)).to.throw(TypeError)
      expect(() => util.isGoodResponse(new Date())).to.throw(TypeError)
      expect(() => util.isGoodResponse(() => {})).to.throw(TypeError)

      expect(() => util.isGoodResponse(3)).not.to.throw(Error)
      expect(() => util.isGoodResponse('3')).not.to.throw(Error)
      expect(() => util.isGoodResponse('xx')).not.to.throw(Error)
    })
  })

  describe('#.getAccessCtrl', () => {
    it('is a function', () => {
      expect(util.getAccessCtrl).to.be.a('function')
    })

    it('should throw TypeError if input rid is not a number and not a string', () => {
      expect(() => util.getAccessCtrl()).to.throw(TypeError)
      expect(() => util.getAccessCtrl(undefined)).to.throw(TypeError)
      expect(() => util.getAccessCtrl(null)).to.throw(TypeError)
      expect(() => util.getAccessCtrl(NaN)).to.throw(TypeError)
      expect(() => util.getAccessCtrl([])).to.throw(TypeError)
      expect(() => util.getAccessCtrl({})).to.throw(TypeError)
      expect(() => util.getAccessCtrl(true)).to.throw(TypeError)
      expect(() => util.getAccessCtrl(new Date())).to.throw(TypeError)
      expect(() => util.getAccessCtrl(() => {})).to.throw(TypeError)

      expect(() => util.getAccessCtrl(3)).not.to.throw(Error)
      expect(() => util.getAccessCtrl('3')).not.to.throw(Error)
      expect(() => util.getAccessCtrl('xx')).not.to.throw(Error)
    })

    it('should throw TypeError if input rid is valid but oid is not a number and not a string', () => {
      expect(() => util.getAccessCtrl(null, 3)).to.throw(TypeError)
      expect(() => util.getAccessCtrl(NaN, 3)).to.throw(TypeError)
      expect(() => util.getAccessCtrl([], 3)).to.throw(TypeError)
      expect(() => util.getAccessCtrl({}, 3)).to.throw(TypeError)
      expect(() => util.getAccessCtrl(true, 3)).to.throw(TypeError)
      expect(() => util.getAccessCtrl(new Date(), 3)).to.throw(TypeError)
      expect(() => util.getAccessCtrl(() => {}, 3)).to.throw(TypeError)

      expect(() => util.getAccessCtrl(3, 3)).not.to.throw(Error)
      expect(() => util.getAccessCtrl('3', 3)).not.to.throw(Error)
      expect(() => util.getAccessCtrl('xx', 3)).not.to.throw(Error)
    })

    it('should throw TypeError if input oid is valid but rid is not a number and not a string', () => {
      expect(() => util.getAccessCtrl(3, null)).to.throw(TypeError)
      expect(() => util.getAccessCtrl(3, NaN)).to.throw(TypeError)
      expect(() => util.getAccessCtrl(3, [])).to.throw(TypeError)
      expect(() => util.getAccessCtrl(3, {})).to.throw(TypeError)
      expect(() => util.getAccessCtrl(3, true)).to.throw(TypeError)
      expect(() => util.getAccessCtrl(3, new Date())).to.throw(TypeError)
      expect(() => util.getAccessCtrl(3, () => {})).to.throw(TypeError)

      expect(() => util.getAccessCtrl(3, 3)).not.to.throw(Error)
      expect(() => util.getAccessCtrl(3, '3')).not.to.throw(Error)
      expect(() => util.getAccessCtrl(3, 'xx')).not.to.throw(Error)
    })
  })

  describe('#.jsonify', () => {
    it('is a function', () => {
      expect(util.jsonify).to.be.a('function')
    })

    it('should throw TypeError if input str is not a string', () => {
      expect(() => util.jsonify()).to.throw(TypeError)
      expect(() => util.jsonify(undefined)).to.throw(TypeError)
      expect(() => util.jsonify(null)).to.throw(TypeError)
      expect(() => util.jsonify(NaN)).to.throw(TypeError)
      expect(() => util.jsonify([])).to.throw(TypeError)
      expect(() => util.jsonify({})).to.throw(TypeError)
      expect(() => util.jsonify(true)).to.throw(TypeError)
      expect(() => util.jsonify(new Date())).to.throw(TypeError)
      expect(() => util.jsonify(() => {})).to.throw(TypeError)
      expect(() => util.jsonify(3)).to.throw(Error)

      expect(() => util.jsonify('3')).not.to.throw(Error)
      expect(() => util.jsonify('xx')).not.to.throw(Error)
      expect(() => util.jsonify('xx.y.z.g.h.j')).not.to.throw(Error)
      expect(() => util.jsonify('xx/y/z/g/h/j')).not.to.throw(Error)
    })
  })
})
