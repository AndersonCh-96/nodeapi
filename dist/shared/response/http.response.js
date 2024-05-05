"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = exports.HTTPSTATUS = void 0;
var HTTPSTATUS;
(function (HTTPSTATUS) {
    HTTPSTATUS[HTTPSTATUS["OK"] = 200] = "OK";
    HTTPSTATUS[HTTPSTATUS["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTPSTATUS[HTTPSTATUS["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HTTPSTATUS[HTTPSTATUS["FORBIDEN"] = 403] = "FORBIDEN";
    HTTPSTATUS[HTTPSTATUS["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HTTPSTATUS || (exports.HTTPSTATUS = HTTPSTATUS = {}));
class HttpResponse {
}
exports.HttpResponse = HttpResponse;
