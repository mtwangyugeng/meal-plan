
export const fetchTimeOut = function (url, options, timeout = 1000) {
    return Promise.race([
        fetch(url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Fetch: Request Timeout')), timeout)
        )
    ]);
}