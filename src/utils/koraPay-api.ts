import { BASE_URL, X_Partner_Code } from '../constants'

export const KoraAPI = {

    serverUrl: BASE_URL,

    post: async (url: string, body = {}, headers = {}) => {
        return fetch(KoraAPI.serverUrl + url, { // serverUrl/url
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Partner-Code': `${X_Partner_Code}`,
                "Access-Control-Allow-Origin": '*',
                ...headers
            },
            body: JSON.stringify(body)
        }).then((response) => {
            return response.json()
                .then(data => {
                    const result = {
                        status: response.status,
                        data: data
                    };
                    return result;
                });
        }).catch((err) => {
            return Promise.reject(err);
        });
    },
    get: async (url: string, headers = {}) => {
        return await fetch(KoraAPI.serverUrl + url, {
            // return fetch(KoraAPI.mockServerUrl + url, { // serverUrl/url
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Partner-Code': 'kora-fe',
                "Access-Control-Allow-Origin": '*',
                ...headers
            },
        }).then((response) => {
            // console.log(store,store.dispatch({ type: 'UPDATE_VALUE', payload: 20 }))
            return response.json()
                .then(data => {
                    const result = {
                        status: response.status,
                        data: data
                    };
                    return result;
                });
        })
            .catch((err) => {
                return Promise.reject({
                    status: 500,
                    data: err
                });
            });
    },
    put: async (url: string, headers = {}) => {
        return await fetch(KoraAPI.serverUrl + url, {
            method: 'put',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Partner-Code': 'partner-panel-fe',
                "Access-Control-Allow-Origin": '*',
                ...headers
            },
        }).then((response) => {
            return response.json()
                .then(data => {
                    const result = {
                        status: response.status,
                        data: data
                    };
                    return result;
                });
        })
            .catch((err) => {
                return Promise.reject(err);
            });
    },
    poll: async (url: string, headers = {}, startAfter = 0, pollInterval = 2000) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const intervalId = setInterval(() => {
                    fetch(KoraAPI.serverUrl + url, {
                        method: 'get',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'X-Partner-Code': 'partner-panel-fe',
                            ...headers
                        },
                    }).then((data) => data.json())
                        .then((response) => {
                            if (response.status === 'CANCELLED') {
                                resolve({
                                    data: {
                                        status: 200,
                                        message: 'success'
                                    }
                                });
                                clearInterval(intervalId);
                            }
                        })
                        .catch(() => {
                            clearInterval(intervalId);
                            return resolve({
                                data: {
                                    status: 500,
                                    message: 'Something went wrong.'
                                }
                            });
                        });
                }, pollInterval);
                setTimeout(() => {
                    clearInterval(intervalId);
                    return resolve({
                        data: {
                            status: 501,
                            message: 'Transaction timed out.'
                        }
                    });
                }, 59000);
            }, startAfter);
        })
    }
}