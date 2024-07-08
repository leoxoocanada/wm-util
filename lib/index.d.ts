/**
 * 下载文件
 * @param content 文件内容
 * @param filename 文件名
 * @param options 下载选项
 * @param options.isBase64 是否是base64
 * @param options.mimeType 文件类型
 */
export declare const downloadFile: (content: string, filename: string, options: {
    mimeType: string;
    isBase64: boolean;
}) => void;
