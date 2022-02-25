import axios from 'axios';

export default async function getMovie(path: string) {
    return await axios
        .get(`https://tomatos-watchlist.herokuapp.com/getMovie/${path}`)
        .then((response) => (response.status == 200 ? response.data : response.status))
        .catch(() => 'NOT FOUND');
}
