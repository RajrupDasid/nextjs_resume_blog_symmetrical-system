import axios, { AxiosResponse, AxiosError } from 'axios';

// Define the function to send a POST request
const apk = process.env.NEXT_PUBLIC_API_KEY;
const apl = process.env.NEXT_PUBLIC_API_PARAMS;

async function search<T>(
    url: string,
    data: any,
): Promise<T> {
    try {
        const url = process.env.NEXT_PUBLIC_API_URL;
        const response: AxiosResponse<T> = await axios.get(`${url}/api/search/`, {
            headers:{
                Authorization: `${apl} ${apk}`,
            }
        });

        // Check for the status code, you can add more error handling here if needed
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Request failed with status ${response.status}`);
        }
    } catch (error) {
        // Handle request errors (e.g., network issues, or non-2xx status codes)
        throw error;
    }
}
