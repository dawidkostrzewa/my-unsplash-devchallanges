// export const IMG_API = `https://api.unsplash.com`;
export const IMG_API = `http://localhost:8000`;

export const getHTTP = async <T>(url: string): Promise<T> => {
    const response = await fetch(`${IMG_API}${url}`, {
        // headers: new Headers({
        //     Authorization: 'Client-ID s9wD7hODYsWP9q6RDighZ95f4nXmFhlmww4-pV5fC6k'
        // })
    });
    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    const res = await response.json();
    return res;
};

//TODO: typ
export const postHTTP = async <T>(url: string, data: any): Promise<T> => {
    console.log(data);
    const response = await fetch(`${IMG_API}${url}`, {
        method: 'POST',
        // headers: new Headers({
        //     Authorization: 'Client-ID s9wD7hODYsWP9q6RDighZ95f4nXmFhlmww4-pV5fC6k'
        // })
        body: data
    });
    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    const res = await response.json();
    return res;
};
