import { base64ToBlob } from "./utils";

/**
 * 下载文件
 * @param content 文件内容
 * @param filename 文件名
 * @param options 下载选项
 * @param options.isBase64 是否是base64
 * @param options.mimeType 文件类型
 */
export const downloadFile = (content: string, filename?: string, options?: { mimeType?: string; isBase64?: boolean }): void => {
  const { mimeType, isBase64 } = options || {
    mimeType: 'text/plain',
    isBase64: false
  };
  const blob = isBase64 ? base64ToBlob(content, mimeType) : new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'download';
  a.click();
  URL.revokeObjectURL(url);
}