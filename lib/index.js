'use strict';

Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = void 0;
var utils_1 = require("./utils");
/**
 * 下载文件
 * @param content 文件内容
 * @param filename 文件名
 * @param options 下载选项
 * @param options.isBase64 是否是base64
 * @param options.mimeType 文件类型
 */
var downloadFile = function (content, filename, options) {
    var _a = options || {
        mimeType: 'text/plain',
        isBase64: false
    }, mimeType = _a.mimeType, isBase64 = _a.isBase64;
    var blob = isBase64 ? (0, utils_1.base64ToBlob)(content, mimeType) : new Blob([content], { type: mimeType });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download';
    a.click();
    URL.revokeObjectURL(url);
};
exports.downloadFile = downloadFile;
