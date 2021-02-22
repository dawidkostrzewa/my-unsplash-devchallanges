// export const IMG_API = `https://api.unsplash.com`;
export const IMG_API = process.env.REACT_APP_API_URL;

export const getHTTP = async <T>(url: string): Promise<T> => {
    const response = await fetch(`${IMG_API}${url}`, {});
    if (!response.ok) {
        const err = await response.json();
        console.log(err);
        throw new Error(err);
    }
    const res = await response.json();
    return res;
};

export const postHTTP = async <T>(url: string, data: any): Promise<T> => {
    const response = await fetch(`${IMG_API}${url}`, {
        method: 'POST',
        body: data
    });
    if (!response.ok) {
        const err = await response.json();
        console.log(err);
        throw new Error(err);
    }

    const res = await response.json();
    return res;
};
