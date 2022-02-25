import axios from 'axios';

export default async function getMovie(path: string) {
    return await axios
        .get(`http://0.0.0.0:8000/getMovie/${path}`)
        .then((response) => (response.status == 200 ? response.data : response.status))
        .catch(() => 'NOT FOUND');
}
