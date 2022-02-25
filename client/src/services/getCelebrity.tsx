import axios from 'axios';

export default async function getCelebrity(name: string) {
    return await axios
        .get(`https://tomatos-watchlist.herokuapp.com/getCelebrity/${name}`)
        .then((response) => (response.status == 200 ? response.data : response.status))
        .catch(() => 'NOT FOUND');
}
