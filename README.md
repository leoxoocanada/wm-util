# wm-util
wm前端工具集

## 安装

```
pnpm add wm-util
```

## API

### downloadFile

下载文件

```js
downloadFile: (content: string, filename?: string, options?: {
    mimeType?: string;
    isBase64?: boolean;
}) => void;
```