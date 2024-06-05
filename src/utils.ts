// base64转blob
export const base64ToBlob = (base64: string, mimeType: string): Blob => {
  const byteChars = atob(base64.split(',')[1]);
  const byteNumbers = new Array(byteChars.length);
  for (let i = 0; i < byteChars.length; i++) {
      byteNumbers[i] = byteChars.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  return new Blob([byteArray], { type: mimeType });
}