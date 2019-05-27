'use strict';
var lwm2mid = require('lwm2m-id');

lwm2mid.Cmd = new lwm2mid._Enum({
    "read": 0,
    "write": 1,
    "discover": 2,
    "writeAttrs": 3,
    "execute": 4,
    "observe": 5,
    "notify": 6,
    "ping": 7,
    "identify": 8,
    "unknown": 255
});

var ut = {
    getCmd: null,           // define below
    getOid: null,           // define below
    getRid: null,           // define below
    getRspCode: null,       // define below
    getSpecificResrcChar: lwm2mid.getRdef
};

/*************************************************************************************************/
/*** Polyfill                                                                                ***/
/*************************************************************************************************/
// polyfill for ES5
if (typeof Object.assign != 'function') {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source != null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}

/*************************************************************************************************/
/*** Identifier Getters                                                                        ***/
/*************************************************************************************************/
ut.getCmd = function (id) {
    var cmdItem = lwm2mid.getCmd(id);
    return cmdItem ? { key: cmdItem.key, value: cmdItem.value } : undefined;
};

ut.cmdNum = function (id) {
    var cmdNum = ut.getCmd(id);
    return cmdNum ? cmdNum.value : undefined;
};

ut.cmdKey = function (id) {
    var cmdKey = ut.getCmd(id);
    return cmdKey ? cmdKey.key : undefined;
};

ut.getOid = function (oid) {
    var oidItem = lwm2mid.getOid(oid);
    return oidItem ? { key: oidItem.key, value: oidItem.value } : undefined;
};

ut.oidKey = function (oid) {
    var oidItem = lwm2mid.getOid(oid);
    return oidItem ? oidItem.key : oid.toString();     // if undefined, return itself
};

ut.oidNum = function (oid) {
    var oidItem = lwm2mid.getOid(oid);

    if (oidItem) {
      return oidItem.value
    } else {
      if (oid.toString().match(/^[0-9]+$/)) {
          var oidNumber = parseInt(oid)
          if (!isNaN(oidNumber))
              oid = oidNumber;
      }
      return oid
    }
};

ut.getRid = function (oid, rid) {
    var ridItem = lwm2mid.getRid(oid, rid);
    return ridItem ? { key: ridItem.key, value: ridItem.value } : undefined;
};

ut.ridKey = function (oid, rid) {
    var ridItem;

    if (typeof rid === 'undefined') {
        rid = oid;
        ridItem = lwm2mid.getRid(rid);      // here, oid is rid
    } else {
        ridItem = lwm2mid.getRid(oid, rid);
    }

    return ridItem ? ridItem.key : rid.toString();     // if undefined, return itself
};

ut.ridNum = function (oid, rid) {
    var ridItem = lwm2mid.getRid(oid, rid);

    if (typeof rid === 'undefined')
        rid = oid;

    if (ridItem) {
      return ridItem.value
    } else {
      if (rid.toString().match(/^[0-9]+$/)) {
          var ridNumber = parseInt(rid)
          if (!isNaN(ridNumber))
              rid = ridNumber;
      }
      return rid
    }
};

ut.getRspCode = function (code) {
    var rspItem = lwm2mid.getRspCode(code);
    return rspItem ? { key: rspItem.key, value: rspItem.value } : undefined;
};

ut.rspCodeKey = function (code) {
    var k = ut.getRspCode(code);
    return k ? k.key : undefined;
};

ut.rspCodeNum = function (code) {
    var n = ut.getRspCode(code);
    return n ? n.value : undefined;
};

/*************************************************************************************************/
/*** Tackling Path                                                                             ***/
/*************************************************************************************************/
ut.createPath = function () {
    if (arguments.length === 0)
        throw new TypeError('Each argument should be a string or a number.');

    var args = Array.prototype.slice.call(arguments),
        connector = args[0],
        path = '';

    args.forEach(function (arg, i) {
        if (!isValidArgType(arg))
            throw new TypeError('Each argument should be a string or a number.');

        if (i !== 0)
            path = path + arg + connector;
    });

    return path.slice(0, path.length - 1);
};

ut.slashPath = function (path) {
    if (typeof path !== 'string')
        throw new TypeError('Input path should be a string.');

    path = path.replace(/\./g, '/');           // tranform dot notation into slash notation

    if (path[0] === '/')                       // if the first char of topic is '/', take it off
        path = path.slice(1);

    if (path[path.length-1] === '/')           // if the last char of topic is '/', take it off
        path = path.slice(0, path.length - 1);

    return path;
};

ut.dotPath = function (path) {
    if (typeof path !== 'string')
        throw new TypeError('Input path should be a string.');

    path = path.replace(/\//g, '.');           // tranform slash notation into dot notation

    if (path[0] === '.')                       // if the first char of topic is '.', take it off
        path = path.slice(1);

    if (path[path.length-1] === '.')           // if the last char of topic is '.', take it off
        path = path.slice(0, path.length - 1);

    return path;
};

ut.pathItems = function (path) {
    return ut.slashPath(path).split('/');
};

ut.buildPathValuePairs = function (rootPath, obj) {
    var result = {};
    rootPath = ut.dotPath(rootPath);

    if (obj && typeof obj === 'object') {
        if (rootPath !== undefined && rootPath !== '' && rootPath !== '.' && rootPath !== '/')
            rootPath = rootPath + '.';

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var n = obj[key];
                // Tricky: objList is an array, don't buid its full path, or updating new list will fail
                if (n && typeof n === 'object' && key !== 'objList')
                    result = Object.assign(result, ut.buildPathValuePairs(rootPath + key, n));
                else
                    result[rootPath + key] = n;
            }
        }
    } else {
        result[rootPath] = obj;
    }
    return result;
};

ut.isGoodResponse = function (status) {
    var statusCode = ut.getRspCode(status),
        goodCodes = [ 200, 201, 202, 204, 205 ],
        included = false;

    if (typeof statusCode === 'undefined')
        return false;

    goodCodes.forEach(function (v) {
        if (v === statusCode.value)
            included = true;
    });

    return included;
};

ut.getAccessCtrl = function (oid, rid) {
    var chr = lwm2mid.getRdef(oid, rid);
    return chr ? chr.access : undefined;
};  // undefined / resrc characteristic

ut.jsonify = function (str) {
    var obj;


    if (typeof str !== 'string')
        throw new TypeError('Input str should be a string.');

    try {
        obj = JSON.parse(str);
    } catch (e) {
        return str;
    }
    return obj;
};  // undefined/result

function isValidArgType(param) {
    var isValid = true;

    if (typeof param !== 'number' && typeof param !== 'string') {
        isValid = false;
    } else if (typeof param === 'number') {
        isValid = !isNaN(param);
    }

    return isValid;
}

module.exports = ut;
