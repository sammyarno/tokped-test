import { GlobalListParams } from '../interfaces/ResReqModel';

export const extractUrl = (url: string): GlobalListParams => {
  const result: GlobalListParams = {
    limit: 0,
    offset: 0
  };

  const temp = url.split('?')[1];

  if (temp.length !== 0) {
    const temp2 = temp.split('&');

    if (temp2.length !== 0) {
      const temp3 = temp2[0].split('=');
      result.offset = parseInt(temp3[1]);

      const temp4 = temp2[1].split('=');
      result.limit = parseInt(temp4[1]);
    }
  }

  return result;
};
