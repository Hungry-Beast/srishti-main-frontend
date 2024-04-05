const myHeaders = new Headers();
const user = JSON.parse(localStorage.getItem('user'))
console.log(user)
myHeaders.append("Authorization", "Bearer " + user?.authToken);



export const functionWrapper = {
    put: (url, payload) => {

        const raw = JSON.stringify(payload);

        const requestOptions = {
            method: "PUT",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        return fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    },


    get: (url) => {

        // const user = JSON.parse(localSTorage.getItem('user'))


        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"

        };
        return fetch(url, requestOptions)
            .then((response) => response.json())
            .then((result) => result)
            .catch((error) => error);
    },

    post: (url, payload) => {



        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: payload,
            redirect: "follow"
        };

        return fetch(url, requestOptions)
            ;
    }
}