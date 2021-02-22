import { getHTTP, postHTTP } from './API';
import { IImageResponse, ILocalImageResponse, IPaginableResponse } from './Interfaces';

export const fetchUnsplashPhotos = () => {
    return getHTTP<IImageResponse[]>(`/photos?per_page=200&order_by=popular`);
};

export const fetchAllCloudinaryPhotos = () => {
    return getHTTP<IPaginableResponse<ILocalImageResponse>>('/photos');
};

export const uploadPhoto = (data: FormData) => {
    return postHTTP('/photos', data);
};
