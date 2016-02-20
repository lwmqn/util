# lwmqn-util
Utility for LWMQN MQTT-Shepherd and MQTT-Node

<br />
## Table of Contents

1. [Overiew](#Overiew)  
2. [Installation](#Installation)  
3. [APIs](#APIs)  
<br />

<a name="Overiew"></a>  
## 1. Overview  

**lwmqn-util** is a utility for Lightweight Mqtt Machine Network (LWMQN) Server and Client modules. This utility provides some common methods of getting identifiers in string or in number, getting command ids, getting response codes, and tackling the path of resource alloaction.  
  
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

* oid (*String|Number*): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_Object_ | _Undefined_) Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

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
<br />

<a name="API_oidKey"></a>
### .oidKey(oid)
> Returns the string of an Object identifier.

**Arguments**

* oid (*String|Number*): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_String_) Returns the id string, otherwise returns the argument `'oid'` ifself if not found.

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
<br />

<a name="API_oidNum"></a>
### .oidNum(oid)
> Returns the number of an Object identifier.

**Arguments**

* oid (*String|Number*): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_Number_) Returns the id number, otherwise returns the argument `'oid'` ifself if not found.

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
<br />

<a name="API_getRid"></a>
### .getRid([oid,] rid)
> Returns an item of the Resource identifier.  
> To query a **Resource id specific to an Object**, both `oid` and `rid` should be given.  
> To query an **unique Resource id**, only the single argument `rid` is needed.  

**Arguments**

- oid (*String|Number*, optional): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.
- rid (*String|Number*): `rid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_Object_ | _Undefined_) Returns an item of `{ key: 'sampleId', value: 1234 }`, otherwise returns `undefined` if not found.

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
<br />

<a name="API_ridKey"></a>
### .ridKey([oid ,] rid)
> Returns the string of an Resource identifier.

**Arguments**

- oid (*String|Number*, optional): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.
- rid (*String|Number*): `rid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_String_) Returns the Resource id in string, otherwise returns the argument `'rid'` ifself if not found.

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
<br />

<a name="API_ridNum"></a>
### .ridNum([oid ,] rid)
> Returns the number of an Resource identifier.

**Arguments**

- oid (*String|Number*, optional): `oid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.
- rid (*String|Number*): `rid` can be given with a string or a number. Notice that a numbered string will be recognized as a number, e.g. '128' is equal to 128.

**Returns:**  
  
* (_Number_) Returns the Resource id in number, otherwise returns the argument `'rid'` ifself if not found.

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
<br />

<a name="API_getRspCode"></a>
### .getRspCode(code)
> Returns an item of the Response code.

**Arguments**

* code (*String|Number*): `code` can be given with a string or a number.  

**Returns:**  
  
* (_Object_ | _Undefined_) Returns an item of `{ key: 'Created', value: 201 }`, otherwise returns `undefined` if not found.

**Example**

```js
var ut = require('lwmqn-util');

ut.getRspCode('BadRequest');  // { key: 'BadRequest', value: 400 }
ut.getRspCode(400);           // { key: 'BadRequest', value: 400 }
ut.getRspCode(302);           // undefined 
```
********************************************
<br />

<a name="API_rspCodeKey"></a>
### .rspCodeKey(code)
> Returns the string of an Response code.

**Arguments**

* code (*String|Number*): `code` can be given with a string or a number.  

**Returns:**  
  
* (_String_ | _Undefined_) Returns the string of an Response code, otherwise returns `undefined` if not found.

**Example**

```js
var ut = require('lwmqn-util');

ut.rspCodeKey('BadRequest');  // 'BadRequest'
ut.rspCodeKey(400);           // 'BadRequest'
ut.rspCodeKey(302);           // undefined 
```
********************************************
<br />