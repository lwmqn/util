/* eslint-env mocha */
const { expect } = require('chai')
const util = require('../index.js') // lwm2m-util module

describe('APIs Functional Check', () => {
  describe('#.getOid', () => {
    it('returns a correct oid item', () => {
      expect(util.getOid('temperature')).to.be.eql({ key: 'temperature', value: 3303 })
      expect(util.getOid(3303)).to.be.eql({ key: 'temperature', value: 3303 })
      expect(util.getOid('3303')).to.be.eql({ key: 'temperature', value: 3303 })
    })

    it('returns undefined if oid not found', () => {
      expect(util.getOid('xxxx')).to.equal(undefined)
      expect(util.getOid('9999')).to.equal(undefined)
      expect(util.getOid(9999)).to.equal(undefined)
    })
  })

  describe('#.oidKey', () => {
    it('returns a correct oid key', () => {
      expect(util.oidKey('temperature')).to.be.eql('temperature')
      expect(util.oidKey(3303)).to.be.eql('temperature')
      expect(util.oidKey('3303')).to.be.eql('temperature')
    })

    it('returns itself if oid not found', () => {
      expect(util.oidKey('xxxx')).to.be.eql('xxxx')
      expect(util.oidKey('9999')).to.be.eql('9999')
      expect(util.oidKey(9999)).to.be.eql('9999')
    })
  })

  describe('#.oidNum', () => {
    it('returns a correct oid key', () => {
      expect(util.oidNum('temperature')).to.be.eql(3303)
      expect(util.oidNum(3303)).to.be.eql(3303)
      expect(util.oidNum('3303')).to.be.eql(3303)
    })

    it('returns itself if oid not found', () => {
      expect(util.oidNum('xxxx')).to.be.eql('xxxx')
      expect(util.oidNum('9999')).to.be.eql(9999)
      expect(util.oidNum(9999)).to.be.eql(9999)
    })
  })

  describe('#.getRid(rid)', () => {
    it('returns a correct rid item with input of rid alone', () => {
      expect(util.getRid('appType')).to.be.eql({ key: 'appType', value: 5750 })
      expect(util.getRid(5750)).to.be.eql({ key: 'appType', value: 5750 })
      expect(util.getRid('5750')).to.be.eql({ key: 'appType', value: 5750 })
    })

    it('returns undefined if rid not found with input of rid alone', () => {
      expect(util.getRid('xxxx')).to.equal(undefined)
      expect(util.getRid('9999')).to.equal(undefined)
      expect(util.getRid(9999)).to.equal(undefined)
    })
  })

  describe('#.getRid(oid, rid)', () => {
    it('returns a correct rid item with input of oid plus rid', () => {
      expect(util.getRid('location', 'lon')).to.be.eql({ key: 'lon', value: 1 })
      expect(util.getRid(6, 1)).to.be.eql({ key: 'lon', value: 1 })
      expect(util.getRid(6, 'lon')).to.be.eql({ key: 'lon', value: 1 })
      expect(util.getRid('location', 1)).to.be.eql({ key: 'lon', value: 1 })
    })

    it('returns undefined if rid not found with input of oid plus rid', () => {
      expect(util.getRid('locationx', 'lon')).to.equal(undefined)
      expect(util.getRid(61111, 1)).to.equal(undefined)
      expect(util.getRid(6, 'lonx')).to.equal(undefined)
      expect(util.getRid('location', 11111)).to.equal(undefined)
    })
  })

  describe('#.ridKey(rid)', () => {
    it('returns a correct rid item with input of rid alone', () => {
      expect(util.ridKey('appType')).to.be.eql('appType')
      expect(util.ridKey(5750)).to.be.eql('appType')
      expect(util.ridKey('5750')).to.be.eql('appType')
    })

    it('returns itself if rid not found with input of rid alone', () => {
      expect(util.ridKey('xxxx')).to.be.eql('xxxx')
      expect(util.ridKey('9999')).to.be.eql('9999')
      expect(util.ridKey(9999)).to.be.eql('9999')
    })
  })

  describe('#.ridKey(oid, rid)', () => {
    it('returns a correct rid key with input of oid plus rid', () => {
      expect(util.ridKey('location', 'lon')).to.be.eql('lon')
      expect(util.ridKey(6, 1)).to.be.eql('lon')
      expect(util.ridKey(6, 'lon')).to.be.eql('lon')
      expect(util.ridKey('location', 1)).to.be.eql('lon')
    })

    it('returns ridKey itself if rid not found with input of rid alone', () => {
      expect(util.ridKey('lonx')).to.be.eql('lonx')
    })

    it('returns ridKey itself if oid not found with input of oid plus rid', () => {
      expect(util.ridKey('locationx', 'lon')).to.be.eql('lon')
    })

    it('returns ridKey itself if oid or rid not found with input of oid plus rid', () => {
      expect(util.ridKey(61111, 1)).to.be.eql('1')
      expect(util.ridKey(6, 'lonx')).to.be.eql('lonx')
      expect(util.ridKey('location', 11111)).to.be.eql('11111')
    })
  })

  describe('#.ridNum(rid)', () => {
    it('returns a correct rid number with input of rid alone', () => {
      expect(util.ridNum('appType')).to.be.eql(5750)
      expect(util.ridNum(5750)).to.be.eql(5750)
      expect(util.ridNum('5750')).to.be.eql(5750)
    })

    it('returns itself if rid not found with input of rid alone', () => {
      expect(util.ridNum('xxxx')).to.be.eql('xxxx')
      expect(util.ridNum('9999')).to.be.eql(9999)
      expect(util.ridNum(9999)).to.be.eql(9999)
    })
  })

  describe('#.ridNum(oid, rid)', () => {
    it('returns a correct rid item with input of oid plus rid', () => {
      expect(util.ridNum('location', 'lon')).to.be.eql(1)
      expect(util.ridNum(6, 1)).to.be.eql(1)
      expect(util.ridNum(6, 'lon')).to.be.eql(1)
      expect(util.ridNum('location', 1)).to.be.eql(1)
    })

    it('returns ridNum itself if rid not found with input of rid alone', () => {
      expect(util.ridNum('lonx')).to.be.eql('lonx')
      expect(util.ridNum(123456)).to.be.eql(123456)
      expect(util.ridNum('123456')).to.be.eql(123456)
    })

    it('returns ridNum itself if oid not found with input of oid plus rid', () => {
      expect(util.ridNum('locationx', 'lon')).to.be.eql('lon')
      expect(util.ridNum('locationx', 123456)).to.be.eql(123456)
      expect(util.ridNum('locationx', '123456')).to.be.eql(123456)
    })

    it('returns ridNum itself if oid or rid not found with input of oid plus rid', () => {
      expect(util.ridNum(61111, 1)).to.be.eql(1)
      expect(util.ridNum(61111, '1')).to.be.eql(1)
      expect(util.ridNum(6, 'lonx')).to.be.eql('lonx')
      expect(util.ridNum('location', 11111)).to.be.eql(11111)
    })
  })

  describe('#.getRspCode', () => {
    it('returns a correct response code number item', () => {
      expect(util.getRspCode(200)).to.be.eql({ key: 'OK', value: 200 })
      expect(util.getRspCode(201)).to.be.eql({ key: 'Created', value: 201 })
      expect(util.getRspCode(202)).to.be.eql({ key: 'Deleted', value: 202 })
      expect(util.getRspCode(204)).to.be.eql({ key: 'Changed', value: 204 })
      expect(util.getRspCode(205)).to.be.eql({ key: 'Content', value: 205 })
      expect(util.getRspCode(400)).to.be.eql({ key: 'BadRequest', value: 400 })
      expect(util.getRspCode(401)).to.be.eql({ key: 'Unauthorized', value: 401 })
      expect(util.getRspCode(404)).to.be.eql({ key: 'NotFound', value: 404 })
      expect(util.getRspCode(405)).to.be.eql({ key: 'MethodNotAllowed', value: 405 })
      expect(util.getRspCode(408)).to.be.eql({ key: 'Timeout', value: 408 })
      expect(util.getRspCode(409)).to.be.eql({ key: 'Conflict', value: 409 })
      expect(util.getRspCode(500)).to.be.eql({ key: 'InternalServerError', value: 500 })

      expect(util.getRspCode('OK')).to.be.eql({ key: 'OK', value: 200 })
      expect(util.getRspCode('Created')).to.be.eql({ key: 'Created', value: 201 })
      expect(util.getRspCode('Deleted')).to.be.eql({ key: 'Deleted', value: 202 })
      expect(util.getRspCode('Changed')).to.be.eql({ key: 'Changed', value: 204 })
      expect(util.getRspCode('Content')).to.be.eql({ key: 'Content', value: 205 })
      expect(util.getRspCode('BadRequest')).to.be.eql({ key: 'BadRequest', value: 400 })
      expect(util.getRspCode('Unauthorized')).to.be.eql({ key: 'Unauthorized', value: 401 })
      expect(util.getRspCode('NotFound')).to.be.eql({ key: 'NotFound', value: 404 })
      expect(util.getRspCode('MethodNotAllowed')).to.be.eql({ key: 'MethodNotAllowed', value: 405 })
      expect(util.getRspCode('Timeout')).to.be.eql({ key: 'Timeout', value: 408 })
      expect(util.getRspCode('Conflict')).to.be.eql({ key: 'Conflict', value: 409 })
      expect(util.getRspCode('InternalServerError')).to.be.eql({ key: 'InternalServerError', value: 500 })
    })

    it('returns undefined if input is an invalid response code', () => {
      expect(util.getRspCode('xxx')).to.equal(undefined)
      expect(util.getRspCode(123)).to.equal(undefined)
    })
  })

  describe('#.rspCodeKey', () => {
    it('returns a correct response code number item', () => {
      expect(util.rspCodeKey(200)).to.be.eql('OK')
      expect(util.rspCodeKey(201)).to.be.eql('Created')
      expect(util.rspCodeKey(202)).to.be.eql('Deleted')
      expect(util.rspCodeKey(204)).to.be.eql('Changed')
      expect(util.rspCodeKey(205)).to.be.eql('Content')
      expect(util.rspCodeKey(400)).to.be.eql('BadRequest')
      expect(util.rspCodeKey(401)).to.be.eql('Unauthorized')
      expect(util.rspCodeKey(404)).to.be.eql('NotFound')
      expect(util.rspCodeKey(405)).to.be.eql('MethodNotAllowed')
      expect(util.rspCodeKey(408)).to.be.eql('Timeout')
      expect(util.rspCodeKey(409)).to.be.eql('Conflict')
      expect(util.rspCodeKey(500)).to.be.eql('InternalServerError')

      expect(util.rspCodeKey('OK')).to.be.eql('OK')
      expect(util.rspCodeKey('Created')).to.be.eql('Created')
      expect(util.rspCodeKey('Deleted')).to.be.eql('Deleted')
      expect(util.rspCodeKey('Changed')).to.be.eql('Changed')
      expect(util.rspCodeKey('Content')).to.be.eql('Content')
      expect(util.rspCodeKey('BadRequest')).to.be.eql('BadRequest')
      expect(util.rspCodeKey('Unauthorized')).to.be.eql('Unauthorized')
      expect(util.rspCodeKey('NotFound')).to.be.eql('NotFound')
      expect(util.rspCodeKey('MethodNotAllowed')).to.be.eql('MethodNotAllowed')
      expect(util.rspCodeKey('Timeout')).to.be.eql('Timeout')
      expect(util.rspCodeKey('Conflict')).to.be.eql('Conflict')
      expect(util.rspCodeKey('InternalServerError')).to.be.eql('InternalServerError')
    })

    it('returns undefined if input is an invalid response code', () => {
      expect(util.rspCodeKey('xxx')).to.equal(undefined)
      expect(util.rspCodeKey(123)).to.equal(undefined)
    })
  })

  describe('#.rspCodeNum', () => {
    it('returns a correct response code number item', () => {
      expect(util.rspCodeNum(200)).to.be.eql(200)
      expect(util.rspCodeNum(201)).to.be.eql(201)
      expect(util.rspCodeNum(202)).to.be.eql(202)
      expect(util.rspCodeNum(204)).to.be.eql(204)
      expect(util.rspCodeNum(205)).to.be.eql(205)

      expect(util.rspCodeNum('OK')).to.be.eql(200)
      expect(util.rspCodeNum('Created')).to.be.eql(201)
      expect(util.rspCodeNum('Deleted')).to.be.eql(202)
      expect(util.rspCodeNum('Changed')).to.be.eql(204)
      expect(util.rspCodeNum('Content')).to.be.eql(205)

      expect(util.rspCodeNum(400)).to.be.eql(400)
      expect(util.rspCodeNum(401)).to.be.eql(401)
      expect(util.rspCodeNum(404)).to.be.eql(404)
      expect(util.rspCodeNum(405)).to.be.eql(405)
      expect(util.rspCodeNum(408)).to.be.eql(408)
      expect(util.rspCodeNum(409)).to.be.eql(409)
      expect(util.rspCodeNum(500)).to.be.eql(500)

      expect(util.rspCodeNum('BadRequest')).to.be.eql(400)
      expect(util.rspCodeNum('Unauthorized')).to.be.eql(401)
      expect(util.rspCodeNum('NotFound')).to.be.eql(404)
      expect(util.rspCodeNum('MethodNotAllowed')).to.be.eql(405)
      expect(util.rspCodeNum('Timeout')).to.be.eql(408)
      expect(util.rspCodeNum('Conflict')).to.be.eql(409)
      expect(util.rspCodeNum('InternalServerError')).to.be.eql(500)
    })

    it('returns undefined if input is an invalid response code', () => {
      expect(util.rspCodeNum('xxx')).to.equal(undefined)
      expect(util.rspCodeNum(123)).to.equal(undefined)
    })
  })

  describe('#.getCmd', () => {
    it('returns a correct command item', () => {
      expect(util.getCmd('read')).to.be.eql({ key: 'read', value: 0 })
      expect(util.getCmd('write')).to.be.eql({ key: 'write', value: 1 })
      expect(util.getCmd('discover')).to.be.eql({ key: 'discover', value: 2 })
      expect(util.getCmd('writeAttrs')).to.be.eql({ key: 'writeAttrs', value: 3 })
      expect(util.getCmd('execute')).to.be.eql({ key: 'execute', value: 4 })
      expect(util.getCmd('observe')).to.be.eql({ key: 'observe', value: 5 })
      expect(util.getCmd('notify')).to.be.eql({ key: 'notify', value: 6 })
      expect(util.getCmd('ping')).to.be.eql({ key: 'ping', value: 7 })
      expect(util.getCmd('unknown')).to.be.eql({ key: 'unknown', value: 255 })

      expect(util.getCmd(0)).to.be.eql({ key: 'read', value: 0 })
      expect(util.getCmd(1)).to.be.eql({ key: 'write', value: 1 })
      expect(util.getCmd(2)).to.be.eql({ key: 'discover', value: 2 })
      expect(util.getCmd(3)).to.be.eql({ key: 'writeAttrs', value: 3 })
      expect(util.getCmd(4)).to.be.eql({ key: 'execute', value: 4 })
      expect(util.getCmd(5)).to.be.eql({ key: 'observe', value: 5 })
      expect(util.getCmd(6)).to.be.eql({ key: 'notify', value: 6 })
      expect(util.getCmd(7)).to.be.eql({ key: 'ping', value: 7 })
      expect(util.getCmd(255)).to.be.eql({ key: 'unknown', value: 255 })
    })

    it('returns undefined if command number is invalid', () => {
      expect(util.getCmd('readxx')).to.equal(undefined)
      expect(util.getCmd(123)).to.equal(undefined)
    })
  })

  describe('#.cmdKey', () => {
    it('returns a correct command number', () => {
      expect(util.cmdKey('read')).to.be.eql('read')
      expect(util.cmdKey('write')).to.be.eql('write')
      expect(util.cmdKey('discover')).to.be.eql('discover')
      expect(util.cmdKey('writeAttrs')).to.be.eql('writeAttrs')
      expect(util.cmdKey('execute')).to.be.eql('execute')
      expect(util.cmdKey('observe')).to.be.eql('observe')
      expect(util.cmdKey('notify')).to.be.eql('notify')
      expect(util.cmdKey('ping')).to.be.eql('ping')
      expect(util.cmdKey('unknown')).to.be.eql('unknown')

      expect(util.cmdKey(0)).to.be.eql('read')
      expect(util.cmdKey(1)).to.be.eql('write')
      expect(util.cmdKey(2)).to.be.eql('discover')
      expect(util.cmdKey(3)).to.be.eql('writeAttrs')
      expect(util.cmdKey(4)).to.be.eql('execute')
      expect(util.cmdKey(5)).to.be.eql('observe')
      expect(util.cmdKey(6)).to.be.eql('notify')
      expect(util.cmdKey(7)).to.be.eql('ping')
      expect(util.cmdKey(255)).to.be.eql('unknown')
    })

    it('returns undefined if command number is invalid', () => {
      expect(util.cmdKey('readxx')).to.equal(undefined)
      expect(util.cmdKey(123)).to.equal(undefined)
    })
  })

  describe('#.cmdNum', () => {
    it('returns a correct command number', () => {
      expect(util.cmdNum('read')).to.be.eql(0)
      expect(util.cmdNum('write')).to.be.eql(1)
      expect(util.cmdNum('discover')).to.be.eql(2)
      expect(util.cmdNum('writeAttrs')).to.be.eql(3)
      expect(util.cmdNum('execute')).to.be.eql(4)
      expect(util.cmdNum('observe')).to.be.eql(5)
      expect(util.cmdNum('notify')).to.be.eql(6)
      expect(util.cmdNum('ping')).to.be.eql(7)
      expect(util.cmdNum('unknown')).to.be.eql(255)

      expect(util.cmdNum(0)).to.be.eql(0)
      expect(util.cmdNum(1)).to.be.eql(1)
      expect(util.cmdNum(2)).to.be.eql(2)
      expect(util.cmdNum(3)).to.be.eql(3)
      expect(util.cmdNum(4)).to.be.eql(4)
      expect(util.cmdNum(5)).to.be.eql(5)
      expect(util.cmdNum(6)).to.be.eql(6)
      expect(util.cmdNum(7)).to.be.eql(7)
      expect(util.cmdNum(255)).to.be.eql(255)
    })

    it('returns undefined if command number is invalid', () => {
      expect(util.cmdNum('readxx')).to.equal(undefined)
      expect(util.cmdNum(123)).to.equal(undefined)
    })
  })

  describe('#.createPath', () => {
    it('returns a correct created path', () => {
      const expectedString1 = 'dev/0/sensor/value'
      // const expectedString2 = 'dev.0.sensor.value'

      expect(util.createPath('/', 'dev', 0, 'sensor', 'value')).to.be.eql(expectedString1)
      expect(util.createPath('/', 'dev', 0, 'sensor', 'value')).to.be.eql(expectedString1)
    })
  })

  describe('#.slashPath', () => {
    it('returns a correct slash path', () => {
      const expectedString = 'dev/0/sensor/value'

      expect(util.slashPath('dev.0.sensor.value')).to.be.eql(expectedString)
      expect(util.slashPath('.dev.0.sensor.value')).to.be.eql(expectedString)
      expect(util.slashPath('.dev.0.sensor.value.')).to.be.eql(expectedString)
      expect(util.slashPath('/dev.0.sensor/value/')).to.be.eql(expectedString)
      expect(util.slashPath('/dev/0/sensor/value/')).to.be.eql(expectedString)
      expect(util.slashPath('.dev/0/sensor/value.')).to.be.eql(expectedString)
    })
  })

  describe('#.dotPath', () => {
    it('returns a correct dot path', () => {
      const expectedString = 'dev.0.sensor.value'

      expect(util.dotPath('dev.0.sensor.value')).to.be.eql(expectedString)
      expect(util.dotPath('.dev.0.sensor.value')).to.be.eql(expectedString)
      expect(util.dotPath('.dev.0.sensor.value.')).to.be.eql(expectedString)
      expect(util.dotPath('/dev.0.sensor/value/')).to.be.eql(expectedString)
      expect(util.dotPath('/dev/0/sensor/value/')).to.be.eql(expectedString)
      expect(util.dotPath('.dev/0/sensor/value.')).to.be.eql(expectedString)
    })
  })

  describe('#.pathItems', () => {
    it('returns a correct array of a / path', () => {
      const expectedArr = ['dev', '0', 'sensor', 'value']

      expect(util.pathItems('dev')).to.be.eql(['dev'])
      expect(util.pathItems('dev.0.sensor.value')).to.be.eql(expectedArr)
      expect(util.pathItems('.dev.0.sensor.value')).to.be.eql(expectedArr)
      expect(util.pathItems('.dev.0.sensor.value.')).to.be.eql(expectedArr)
      expect(util.pathItems('/dev.0.sensor/value/')).to.be.eql(expectedArr)
      expect(util.pathItems('/dev/0/sensor/value/')).to.be.eql(expectedArr)
      expect(util.pathItems('.dev/0/sensor/value.')).to.be.eql(expectedArr)
    })
  })

  describe('#.buildPathValuePairs', () => {
    const myObj = {
      a: {
        a1: {
          a11: 1,
          a12: 'hi'
        },
        a2: 'foo'
      },
      b: 'hello',
      c: 3
    }

    it('returns a correct path-value pairs of an object with root /', () => {
      const expectedObj = {
        'a.a1.a11': 1,
        'a.a1.a12': 'hi',
        'a.a2': 'foo',
        b: 'hello',
        c: 3
      }
      expect(util.buildPathValuePairs('/', myObj)).to.be.eql(expectedObj)
      expect(util.buildPathValuePairs('.', myObj)).to.be.eql(expectedObj)
      expect(util.buildPathValuePairs('', myObj)).to.be.eql(expectedObj)
    })

    it('returns a correct path-value pairs of an object with root /dev/0', () => {
      const expectedObj = {
        'dev.0.a.a1.a11': 1,
        'dev.0.a.a1.a12': 'hi',
        'dev.0.a.a2': 'foo',
        'dev.0.b': 'hello',
        'dev.0.c': 3
      }
      expect(util.buildPathValuePairs('/dev/0/', myObj)).to.be.eql(expectedObj)
      expect(util.buildPathValuePairs('/dev/0', myObj)).to.be.eql(expectedObj)
      expect(util.buildPathValuePairs('dev/0/', myObj)).to.be.eql(expectedObj)
      expect(util.buildPathValuePairs('dev/0', myObj)).to.be.eql(expectedObj)
      expect(util.buildPathValuePairs('.dev.0.', myObj)).to.be.eql(expectedObj)
      expect(util.buildPathValuePairs('.dev.0', myObj)).to.be.eql(expectedObj)
      expect(util.buildPathValuePairs('dev.0.', myObj)).to.be.eql(expectedObj)
      expect(util.buildPathValuePairs('dev.0', myObj)).to.be.eql(expectedObj)
    })
  })

  describe('#.isGoodResponse', () => {
    it('should be true if input is a good status code', () => {
      expect(util.isGoodResponse(200)).to.equal(true)
      expect(util.isGoodResponse(201)).to.equal(true)
      expect(util.isGoodResponse(202)).to.equal(true)
      expect(util.isGoodResponse(204)).to.equal(true)
      expect(util.isGoodResponse(205)).to.equal(true)

      expect(util.isGoodResponse('OK')).to.equal(true)
      expect(util.isGoodResponse('Created')).to.equal(true)
      expect(util.isGoodResponse('Deleted')).to.equal(true)
      expect(util.isGoodResponse('Changed')).to.equal(true)
      expect(util.isGoodResponse('Content')).to.equal(true)
    })

    it('should be false if input is a bad status code', () => {
      expect(util.isGoodResponse(400)).to.equal(false)
      expect(util.isGoodResponse(401)).to.equal(false)
      expect(util.isGoodResponse(404)).to.equal(false)
      expect(util.isGoodResponse(405)).to.equal(false)
      expect(util.isGoodResponse(408)).to.equal(false)
      expect(util.isGoodResponse(409)).to.equal(false)
      expect(util.isGoodResponse(500)).to.equal(false)

      expect(util.isGoodResponse('BadRequest')).to.equal(false)
      expect(util.isGoodResponse('Unauthorized')).to.equal(false)
      expect(util.isGoodResponse('NotFound')).to.equal(false)
      expect(util.isGoodResponse('MethodNotAllowed')).to.equal(false)
      expect(util.isGoodResponse('Timeout')).to.equal(false)
      expect(util.isGoodResponse('Conflict')).to.equal(false)
      expect(util.isGoodResponse('InternalServerError')).to.equal(false)
    })

    it('should be false if input is an unknown status code', () => {
      expect(util.isGoodResponse(108)).to.equal(false)
      expect(util.isGoodResponse('xx')).to.equal(false)
    })
  })

  describe('#.getAccessCtrl', () => {
    it('should get right value', () => {
      expect(util.getAccessCtrl('temperature', 'sensorValue')).to.be.eql('R')
      expect(util.getAccessCtrl('lightCtrl', 5850)).to.be.eql('RW')
    })

    it('should get undefined if target not found', () => {
      expect(util.getAccessCtrl('temperature', 1234)).to.equal(undefined)
      expect(util.getAccessCtrl('xxxx', 1234)).to.equal(undefined)
    })
  })

  describe('#.jsonify', () => {
    it('is a string hello', () => {
      expect(util.jsonify('hello')).to.be.eql('hello')
    })

    it('is a string which cannot be parsed', () => {
      expect(util.jsonify('{: { "OK": 200, "Created": 201, "Deleted": 202, "Changed": 204, "Content": 205 }}')).to.be.eql('{: { "OK": 200, "Created": 201, "Deleted": 202, "Changed": 204, "Content": 205 }}')
    })

    it('is ab object', () => {
      expect(util.jsonify('{"rspCode": { "OK": 200, "Created": 201, "Deleted": 202, "Changed": 204, "Content": 205 }}')).to.be.eql({
        rspCode: {
          OK: 200, Created: 201, Deleted: 202, Changed: 204, Content: 205
        }
      })
    })
  })
})
