
const handleErrors = async(response) => {
    if (!response.ok) {
        let errorResponse;
        try {
          errorResponse = await response.json();
        } catch (e) {
          throw Error(response.statusText);
        }
        throw Error(errorResponse?.error);
      }
      return response;
}

const parseJson = (response) => {
    try {
        return response.json();
    } catch (e) {
        console.error("Cannot parse:", response);
        return Promise.reject("Can not parse");
    }
}

const fetchGet = (url, track,headers) => {
    return fetch(url, {
        method: 'GET',
        headers: headers || {},
        isProtected: true,
        showLoader: true,
        track
    })
}

const fetchPost = (url, body, track) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        isProtected: true,
        showLoader: true,
        body: JSON.stringify(body),
        track
    }).then(handleErrors).then(parseJson)
}

const fetchPut = (url, body, track) => {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        isProtected: true,
        showLoader: true,
        body: JSON.stringify(body),
        track
    }).then(handleErrors).then(parseJson)
}
const fetchDelete = (url, body, track) => {
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        isProtected: true,
        showLoader: true,
        body: body ? JSON.stringify(body) : "",
        track
    }).then(handleErrors)
}
export { handleErrors, parseJson, fetchGet, fetchPost, fetchPut,fetchDelete };