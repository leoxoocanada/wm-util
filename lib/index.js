'use strict';

// base64转blob
const base64ToBlob = (base64, mimeType) => {
    const byteChars = atob(base64.split(',')[1]);
    const byteNumbers = new Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) {
        byteNumbers[i] = byteChars.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
};

/**
 * 下载文件
 * @param content 文件内容
 * @param filename 文件名
 * @param options 下载选项
 * @param options.isBase64 是否是base64
 * @param options.mimeType 文件类型
 */
const downloadFile = (content, filename, options) => {
    const { mimeType, isBase64 } = options;
    const blob = isBase64 ? base64ToBlob(content, mimeType) : new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
};

exports.downloadFile = downloadFile;
