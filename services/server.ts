import axios from "axios";

const server = axios.create();

server.interceptors.request.use(
    (config) => {
        // Add any request modifications here, like headers or logging
        config.baseURL = 'https://defzone.net/api/';
        // Append locale to the URL if it exists
        const url = config?.url?.concat(`?locale=vi-VN`);
        config.url = url;
        return config;
    }
);

server.interceptors.response.use(
    (response) => {
        // Handle successful responses
        return response.data;
    },
    (error) => {
        // Handle errors
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Error response:', error.response.data);
            console.error('Status code:', error.response.status);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error message:', error.message);
        }
        throw error; // Re-throw the error for further handling
    }
);

export default server;