'use strict';

var lwm2mid = require('lwm2m-id');
var ut = {
    getCmd: lwm2mid.getCmd,
    getOid: lwm2mid.getOid,
    getRid: lwm2mid.getRid,
    getRspCode: lwm2mid.getRspCode,
    getSpecificResrcChar: lwm2mid.getRdef
};

/*************************************************************************************************/
/*** Identifier Getters                                                                        ***/
/*************************************************************************************************/
ut.cmdNum = function (id) {
    var cmdNum = ut.getCmd(id);
    return cmdNum ? cmdNum.value : undefined;
};

ut.cmdKey = function (id) {
    var cmdKey = ut.getCmd(id);
    return cmdKey ? cmdKey.key : undefined;
};

ut.oidKey = function (oid) {
    var oidItem = lwm2mid.getOid(oid);
    return oidItem ? oidItem.key : oid;     // if undefined, return itself
};

ut.oidNum = function (oid) {
    var oidItem = lwm2mid.getOid(oid);

    oidItem = oidItem ? oidItem.value : parseInt(oid);   // if undefined, return parseInt(itself)
    return isNaN(oidItem) ? oid : oidItem;
};

ut.ridKey = function (oid, rid) {
    var ridItem;

    if (typeof rid === 'undefined')
        ridItem = lwm2mid.getRid(oid);  // here, oid is rid
    else
        ridItem = lwm2mid.getRid(oid, rid);

    return ridItem ? ridItem.key : rid;     // if undefined, return itself
};

ut.ridNum = function (oid, rid) {
    var ridItem = lwm2mid.getRid(oid, rid);

    if (typeof rid === 'undefined')
        rid = oid;

    ridItem = ridItem ? ridItem.value : parseInt(rid);   // if undefined, return parseInt(itself)
    return isNaN(ridItem) ? rid : ridItem;
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
    var args = Array.prototype.slice.call(arguments),
        connector = args[0],
        path = '';

    args.forEach(function (arg, i) {
        if (i !== 0)
            path = path + arg + connector;
    });

    return path.slice(0, path.length - 1);
};

ut.slashPath = function (path) {
    path = path.replace(/\./g, '/');           // tranform dot notation into slash notation

    if (path[0] === '/')                       // if the first char of topic is '/', take it off
        path = path.slice(1);

    if (path[path.length-1] === '/')           // if the last char of topic is '/', take it off
        path = path.slice(0, path.length - 1);

    return path;
};

ut.dotPath = function (path) {
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
    try {
        obj = JSON.parse(str);
    } catch (e) {
        return;
    }
    return obj;
};  // undefined/result

module.exports = ut;
