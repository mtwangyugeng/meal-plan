export const fetchTimeOut = function (url, options, timeout = 15000) {
    return Promise.race([
        fetch( /**'https://recipebook22.herokuapp.com' + */ url, options),
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Fetch: Request Timeout')), timeout)
        )
    ]);
}