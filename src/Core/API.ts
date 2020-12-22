export const IMG_API = `https://api.unsplash.com`;

export const getHTTP = async <T>(url: string): Promise<T> => {
    const response = await fetch(`${IMG_API}${url}`, {
        headers: new Headers({
            Authorization: 'Client-ID s9wD7hODYsWP9q6RDighZ95f4nXmFhlmww4-pV5fC6k'
        })
    });
    if (!response.ok) {
        throw new Error('Something went wrong');
    }
    const res = await response.json();
    return res;
};
