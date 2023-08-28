import axios from "axios";

// eslint-disable-next-line no-unused-vars
async function request(url, method, params = {}, headers = {}) {
    const response = await axios({
        baseURL: 'http://localhost:3000/',
        method: method,
        url: url,
        headers: {
            'content-type': 'application/json',
            ...headers
        },
        data: params,
    })

    return response.data
}

export {request}
