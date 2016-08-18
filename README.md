# lwmqn-util
Utility for LWMQN mqtt-shepherd server and mqtt-node client libraries.

[![Travis branch](https://img.shields.io/travis/lwmqn/lwmqn-util/master.svg?maxAge=2592000)](https://travis-ci.org/lwmqn/lwmqn-util)
[![npm](https://img.shields.io/npm/v/lwmqn-util.svg?maxAge=2592000)](https://www.npmjs.com/package/lwm2m-id)
[![npm](https://img.shields.io/npm/l/lwmqn-util.svg?maxAge=2592000)](https://www.npmjs.com/package/lwm2m-id)

<br />

## Table of Contents

1. [Overiew](#Overiew)  
2. [Installation](#Installation)  
3. [APIs](#APIs)  
<br />

<a name="Overiew"></a>  
## 1. Overview  

**lwmqn-util** is a utility for Lightweight Mqtt Machine Network Server([mqtt-shepherd](https://github.com/lwmqn/mqtt-shepherd)) and Client([mqtt-node](https://github.com/lwmqn/mqtt-node))  modules. This utility provides some common methods of getting identifiers in string or in number, getting command ids, getting response codes, and tackling the path of resource alloaction.  
  
<a name="Installation"></a>
## 2. Installation

> $ npm install lwmqn-util --save
  

<a name="APIs"></a>
## 3. APIs

* [.getOid()](#API_getOid)
* [.oidKey()](#API_oidKey)
* [.oidNum()](#API_oidNum)
* [.getRid()](#API_getRid)
* [.ridKey()](#API_ridKey)
* [.ridNum()](#API_ridNum)
* [.getRspCode()](#API_getRspCode)
* [.rspCodeKey()](#API_rspCodeKey)
* [.rspCodeNum()](#API_rspCodeNum)
* [.getCmd()](#API_getCmd)
* [.cmdKey()](#API_cmdKey)
* [.cmdNum()](#API_cmdNum)
* [.createPath()](#API_createPath)
* [.slashPath()](#API_slashPath)
* [.dotPath()](#API_dotPath)
* [.pathItems()](#API_pathItems)
* [.buildPathValuePairs()](#API_buildPathValuePairs)
* [.isGoodResponse()](#API_isGoodResponse)
* [.getAccessCtrl()](#API_getAccessCtrl)
* [.jsonify()](#API_jsonify)

********************************************
<a name="API_getOid"></a>
### .getOid(oid)
> Returns an item of the Object identifier.

**Arguments**

1. oid (*_String_ | _Number_*): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_Object_ | _Undefined_): Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

**Example**

```js
var ut = require('lwmqn-util');

ut.getOid('temperature');  // { key: 'temperature', value: 3303 }
ut.getOid(3303);           // { key: 'temperature', value: 3303 }
ut.getOid('3303');         // { key: 'temperature', value: 3303 }

ut.getOid('xxxx');         // undefined 
ut.getOid('9999');         // undefined 
ut.getOid(9999);           // undefined 
```
  
********************************************
<a name="API_oidKey"></a>
### .oidKey(oid)
> Returns the string of an Object identifier.

**Arguments**

1. oid (*_String_ | _Number_*): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_String_): Returns the id string, otherwise returns the argument `'oid'` ifself if not found.

**Example**

```js
ut.oidKey('temperature');  // 'temperature'
ut.oidKey(3303);           // 'temperature'
ut.oidKey('3303');         // 'temperature'

ut.oidKey('xxxx');         // 'xxxx' (returns the argument itself if id not found)
ut.oidKey('9999');         // '9999'
ut.oidKey(9999);           // 9999
```
  
********************************************
<a name="API_oidNum"></a>
### .oidNum(oid)
> Returns the number of an Object identifier.

**Arguments**

1. oid (*_String_ | _Number_*): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_Number_): Returns the id number, otherwise returns the argument `'oid'` ifself if not found.

**Example**

```js
ut.oidNum('temperature');  // 3303
ut.oidNum(3303);           // 3303
ut.oidNum('3303');         // 3303

ut.oidKey('xxxx');         // 'xxxx' (returns the argument itself if id not found)
ut.oidKey('9999');         // 9999
ut.oidKey(9999);           // 9999
```
  
********************************************
<a name="API_getRid"></a>
### .getRid([oid,] rid)
> Returns an item of the Resource identifier.  
> To query a **Resource id specific to an Object**, both `oid` and `rid` should be given.  
> To query an **unique Resource id**, only the single argument `rid` is needed.  

**Arguments**

1. oid (*_String_ | _Number_*, optional): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.
2. rid (*_String_ | _Number_*): `rid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_Object_ | _Undefined_): Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

**Example**

```js
// get a Resource id specific to an Object
ut.getRid('location', 'lon');             // { key: 'lon', value: 1 }
ut.getRid(6, 1);                          // { key: 'lon', value: 1 }
ut.getRid('temperature', 'sensorValue');  // { key: 'sensorValue', value: 5700 }
ut.getRid(3303, 5700);                    // { key: 'sensorValue', value: 5700 }
ut.getRid('temperature', '5700');         // { key: 'sensorValue', value: 5700 }

// get an unqiue Resource id
ut.getRid('appType');                     // { key: 'appType', value: 5750 }
ut.getRid(5750);                          // { key: 'appType', value: 5700 }
ut.getRid('5750');                        // { key: 'appType', value: 5750 }
```
  
********************************************
<a name="API_ridKey"></a>
### .ridKey([oid ,] rid)
> Returns the string of an Resource identifier.

**Arguments**

1. oid (*_String_ | _Number_*, optional): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.
2. rid (*_String_ | _Number_*): `rid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_String_): Returns the Resource id in string, otherwise returns the argument `'rid'` ifself if not found.

**Example**

```js
// get a Resource id specific to an Object
ut.ridKey('location', 'lon');             // 'lon'
ut.ridKey(6, 1);                          // 'lon'
ut.ridKey('temperature', 'sensorValue');  // 'sensorValue'
ut.ridKey(3303, 5700);                    // 'sensorValue'
ut.ridKey('temperature', '5700');         // 'sensorValue'

// get an unqiue Resource id
ut.ridKey('appType');                     // 'appType'
ut.ridKey(5750);                          // 'appType'
ut.ridKey('5750');                        // 'appType'

// returns rid itself if not found
ut.ridKey('no_such_rid');                  // 'no_such_rid'
ut.ridKey(3303, 'no_such_id');             // 'no_such_id'
```
  
********************************************
<a name="API_ridNum"></a>
### .ridNum([oid ,] rid)
> Returns the number of an Resource identifier.

**Arguments**

1. oid (*_String_ | _Number_*, optional): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.
2. rid (*_String_ | _Number_*): `rid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_Number_): Returns the Resource id in number, otherwise returns the argument `'rid'` ifself if not found.

**Example**

```js
// get a Resource id specific to an Object
ut.ridNum('location', 'lon');             // 1
ut.ridNum(6, 1);                          // 1
ut.ridNum('temperature', 'sensorValue');  // 5700
ut.ridNum(3303, 5700);                    // 5700
ut.ridNum('temperature', '5700');         // 5700

// get an unqiue Resource id
ut.ridNum('appType');                     // 5750
ut.ridNum(5750);                          // 5750
ut.ridNum('5750');                        // 5750

// returns rid itself if not found
ut.ridNum('no_such_rid');                  // 'no_such_rid'
ut.ridNum('99999');                        // 99999 (no such rid)
ut.ridNum(99999);                          // 99999 (no such rid)
ut.ridNum(3303, 7654);                     // 7654  (no such rid)
```
  
********************************************
<a name="API_getRspCode"></a>
### .getRspCode(code)
> Returns an item of the Response code.

**Arguments**

1. code (*_String_ | _Number_*): `code` can be given with a string or a number.  

**Returns:**  
  
* (_Object_ | _Undefined_): Returns an item in the form of `{ key: 'Created', value: 201 }`, otherwise returns `undefined` if not found.

**Example**

```js
ut.getRspCode('BadRequest');  // { key: 'BadRequest', value: 400 }
ut.getRspCode(400);           // { key: 'BadRequest', value: 400 }
ut.getRspCode(302);           // undefined 
```
  
********************************************
<a name="API_rspCodeKey"></a>
### .rspCodeKey(code)
> Returns the string of an Response code.

**Arguments**

1. code (*_String_ | _Number_*): `code` can be given with a string or a number.  

**Returns:**  
  
* (_String_ | _Undefined_): Returns the string of an Response code, otherwise returns `undefined` if not found.

**Example**

```js
ut.rspCodeKey('BadRequest');  // 'BadRequest'
ut.rspCodeKey(400);           // 'BadRequest'
ut.rspCodeKey(302);           // undefined 
```
  
********************************************
<a name="API_rspCodeNum"></a>
### .rspCodeNum(code)
> Returns the number of an Response code.

**Arguments**

1. code (*_String_ | _Number_*): `code` can be given with a string or a number.  

**Returns:**  
  
* (_Number_ | _Undefined_): Returns the number of an Response code, otherwise returns `undefined` if not found.

**Example**

```js
ut.rspCodeKey('BadRequest');  // 400
ut.rspCodeKey(400);           // 400
ut.rspCodeKey(302);           // undefined 
```
  
********************************************
<a name="API_getCmd"></a>
### .getCmd(cmd)
> Returns an item of the command idetifier.

**Arguments**

1. code (*_String_ | _Number_*): `cmd` can be given with a string or a number.  

**Returns:**  
  
* (_Object_ | _Undefined_): Returns an item in the form of `{ key: 'discover', value: 2 }`, otherwise returns `undefined` if not found.

**Example**

```js
ut.getCmd('read');          // { key: 'read', value: 0 }
ut.getCmd('write');         // { key: 'write', value: 1 }
ut.getCmd('discover');      // { key: 'discover', value: 2 }
ut.getCmd('writeAttrs');    // { key: 'writeAttrs', value: 3 }
ut.getCmd('execute');       // { key: 'execute', value: 4 }
ut.getCmd('observe');       // { key: 'observe', value: 5 }
ut.getCmd('notify');        // { key: 'execute', value: 6 }

ut.getCmd(0);   // { key: 'read', value: 0 }
ut.getCmd(1);   // { key: 'write', value: 1 }
ut.getCmd(2);   // { key: 'discover', value: 2 }
ut.getCmd(3);   // { key: 'writeAttrs', value: 3 }
ut.getCmd(4);   // { key: 'execute', value: 4 }
ut.getCmd(5);   // { key: 'observe', value: 5 }
ut.getCmd(6);   // { key: 'execute', value: 6 }
```
  
********************************************
<a name="API_cmdKey"></a>
### .cmdKey(cmd)
> Returns the string of an command identifier.

**Arguments**

1. code (*_String_ | _Number_*): `cmd` can be given with a string or a number.  

**Returns:**  
  
* (_String_ | _Undefined_): Returns the string of an command id, otherwise returns `undefined` if unrecognized.

**Example**

```js
ut.cmdKey('read');        // 'read'
ut.cmdKey(4);             // 'execute'
ut.cmdKey('no_such_cmd'); // undefined 
ut.cmdKey(22);            // undefined 
```
  
********************************************
<a name="API_cmdNum"></a>
### .cmdNum(cmd)
> Returns the number of an command identifier.

**Arguments**

1. code (*_String_ | _Number_*): `cmd` can be given with a string or a number.  

**Returns:**  
  
* (_Number_ | _Undefined_): Returns the number of an command id, otherwise returns `undefined` if unrecognized.

**Example**

```js
ut.cmdKey('read');        // 0
ut.cmdKey(4);             // 4
ut.cmdKey('no_such_cmd'); // undefined 
ut.cmdKey(22);            // undefined 
```
  
********************************************
<a name="API_createPath"></a>
### .createPath(cnnt, ...)
> Returns a path string in conjunction of the given connector.

**Arguments**

1. cnt (*_String_|_Number_*): The connector, can be `'.'` or `'/'`  
2. ... (*_String_, variadic*): Words to be connected  

**Returns:**  
  
* (_String_): Returns the combined result.

**Example**

```js
ut.createPath('.', 'dev', 0, 'sensor');          // 'dev.0.sensor'
ut.createPath('/', 'dev', 0, 'sensor', 'value'); // 'dev/0/sensor/value'
```
  
********************************************
<a name="API_slashPath"></a>
### .slashPath(path)
> Returns a path with '/' separator.

**Arguments**

1. path (*_String_*): The path string  

**Returns:**  
  
* (_String_): Returns the result. The first and last character will be ignored if they are `'.'` or `'/'`.  

**Example**

```js
ut.slashPath('dev.0.sensor.value');     // 'dev/0/sensor/value'
ut.slashPath('.dev.0.sensor.value');    // 'dev/0/sensor/value'
ut.slashPath('/dev.0.sensor/value/');   // 'dev/0/sensor/value'
ut.slashPath('/dev/0/sensor/value/');   // 'dev/0/sensor/value'
```
  
********************************************
<a name="API_dotPath"></a>
### .dotPath(path)
> Returns a path with '.' separator.

**Arguments**

1. path (*_String_*): The path string  

**Returns:**  
  
* (_String_): Returns the result. The first and last character will be ignored if they are `'.'` or `'/'`.  

**Example**

```js
ut.dotPath('dev.0.sensor.value');     // 'dev.0.sensor.value'
ut.dotPath('.dev.0.sensor.value');    // 'dev.0.sensor.value'
ut.dotPath('/dev.0.sensor/value/');   // 'dev.0.sensor.value'
ut.dotPath('/dev/0/sensor/value/');   // 'dev.0.sensor.value'
```
  
********************************************
<a name="API_pathItems"></a>
### .pathItems(path)
> Returns an array of words that are separated by `'.'` or `'/'`.

**Arguments**

1. path (*_String_*): The path string  

**Returns:**  
  
* (_Array_): Returns the words in an array.  

**Example**

```js
ut.pathItems('dev.0.sensor.value');     // [ 'dev', '0', 'sensor', 'value' ]
ut.pathItems('.dev.0.sensor.value');    // [ 'dev', '0', 'sensor', 'value' ]
ut.pathItems('/dev.0.sensor/value/');   // [ 'dev', '0', 'sensor', 'value' ]
ut.pathItems('/dev/0/sensor/value/');   // [ 'dev', '0', 'sensor', 'value' ]
```
  
********************************************
<a name="API_buildPathValuePairs"></a>
### .buildPathValuePairs(rootPath, obj)
> Returns an object in path-value pair.  

**Arguments**

1. rootPath (*_String_*): The path where the `obj` attachs to  
2. obj (*_Object_*): The object to be built from  

**Returns:**  
  
* (_Object_): Returns a new object that is orginized in path-vale pair.  

**Example**

```js
var myObj = {
    a: {
        a1: {
            a11: 1,
            a12: 'hi',
        },
        a2: 'foo'
    },
    b: 'hello',
    c: 3
};

var newObj = ut.buildPathValuePairs('/', myObj);
// newObj = {
//     'a.a1.a11': 1,
//     'a.a1.a12': 'hi',
//     'a.a2': 'foo',
//     'b': 'hello',
//     'c': 3
// }

var newObj = ut.buildPathValuePairs('/dev/0', myObj);
// newObj = {
//     'dev.0.a.a1.a11': 1,
//     'dev.0.a.a1.a12': 'hi',
//     'dev.0.a.a2': 'foo',
//     'dev.0.b': 'hello',
//     'dev.0.c': 3
// }
```
  
********************************************
<a name="API_isGoodResponse"></a>
### .isGoodResponse(status)
> Check if a status code is a good response. The good responses are those with status codes in either one of
> 200, 201, 202, 204, and 205.

**Arguments**

1. status (*_String_ | _Number_*): `status` can be given with a string or a number.  

**Returns:**  
  
* (_Boolean_): Returns true if status is a good response, otherwise returns false.  

**Example**

```js
ut.isGoodResponse(200);         // true
ut.isGoodResponse('Deleted');   // true
ut.isGoodResponse('NotFound');  // false
ut.isGoodResponse(409);         // false
```
  
********************************************
<a name="API_getAccessCtrl"></a>
### .getAccessCtrl()
> Get the access control flag of an Resource. Please refer to [lwm2m-id documentation](https://github.com/simenkid/lwm2m-id#getrdefoid-rid).

**Arguments**

1. oid (*_String_ | _Number_*, optional): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.
2. rid (*_String_ | _Number_*): `rid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_String_ | _Null_ | _Undefined_): Returns the access control flag which can be 'R' (read-only), 'W' (write-only), 'RW', 'E' (executable), and null (cannot access). Returns undfined if the Resource is not found.  

**Example**

```js
ut.getAccessCtrl('temperature', 'sensorValue'); // 'R'
ut.getAccessCtrl('lightCtrl', 5850);            // 'RW'
ut.getAccessCtrl('xxxx', 1234);                 // undfined
```
  
********************************************
<a name="API_jsonify"></a>
### .jsonify(str)
> Jsonify a string into a Javascript object.  

**Arguments**

1. str (*_String_*): The string to be jsonified.  

**Returns:**  
  
* (_Object_ | _String_): Returns an object if the string can be jsonified, otherwise returns the string itself.  

**Example**

```js
ut.jsonify('{"x": 3, "y": 'hi'}');  // { x: 3, y: 'hi' }
ut.jsonify('hello there');          // 'hello there'
```
