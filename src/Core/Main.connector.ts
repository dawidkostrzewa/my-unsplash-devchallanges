import { getHTTP } from './API';
import { IImageResponse } from './Interfaces';

export const fetchUnsplashPhotos = () => {
    return getHTTP<IImageResponse[]>(`/photos?per_page=200&order_by=popular`);
};
