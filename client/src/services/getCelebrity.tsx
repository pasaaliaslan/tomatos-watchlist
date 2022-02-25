import axios from 'axios';

export default async function getCelebrity(name: string) {
    return await axios
        .get(`http://0.0.0.0:8000/getCelebrity/${name}`)
        .then((response) => (response.status == 200 ? response.data : response.status))
        .catch(() => 'NOT FOUND');
}
