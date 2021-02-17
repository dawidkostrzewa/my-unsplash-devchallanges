export interface IImageResponse {
    alt_description: string;
    id: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
    };
}

export interface ILocalImageResponse {
    filename: string;
    format: string;
    tags: Array<string>;
    url: string;
}

export interface IPaginableResponse<T> {
    total_count: number;
    resources: Array<T>;
}

export interface IPopupState {
    isShown: boolean;
    popupContent: JSX.Element;
}

export interface IPopupSliceState {
    popup: IPopupState;
}

export interface IGallerySliceState {
    gallery: {
        photos: Array<ILocalImageResponse>;
        isLoading: boolean;
    };
}
