export const bufferToBase64 = (buffer: any) => {
  return new Promise((resolve) => {
    const buff = new Buffer(buffer);
    const base64string = buff.toString('base64');
    return setTimeout(() => {
      resolve(base64string);
    }, 1000);
  });
};
