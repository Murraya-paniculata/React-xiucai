import axios from 'axios';

const getData = function () {
    return new Promise((resolve, reject) => {
        axios.get('api.json').then((res) => {
            resolve(res);
        }, error => {
            if (error.response) {
                reject(error.response.data)
            } else {
                reject(error)
            }
        })
    })
}

export default getData;
