import imgbbUploader from 'imgbb-uploader';
import { bufferToBase64 } from '../helpers';
import { IMGBB_API_KEY } from '../../../config';

class ImgbbProxy {
  constructor(private buffer: any, private fileName: string) {}

  get fileNameBuild() {
    const [name, extension] = this.fileName.split('.');
    const now = new Date().getTime();
    return `${name}_${now}.${extension}`;
  }

  async upload() {
    const base64string = await bufferToBase64(this.buffer);
    const options = {
      apiKey: IMGBB_API_KEY,
      name: this.fileNameBuild,
      base64string,
    };

    const response = await imgbbUploader(options);
    if (!response?.url) {
      throw new Error('Error uploading image');
    }
    return response.url;
  }
}

export interface IImgbbProxy {
  buffer: any;
  fileName: string;
}
export const imgbbProxy = ({ buffer, fileName }: IImgbbProxy) => {
  return new ImgbbProxy(buffer, fileName).upload();
};
