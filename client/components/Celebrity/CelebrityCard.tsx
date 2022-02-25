import { Celebrity } from '../../types';
import '../../style/Celebrity/CelebrityCard.css';

export default function CelebrityCard({ celebrity }: { celebrity: Celebrity }) {
    return (
        <div className="CelebrityCard">
            <a
                href={`http://www.rottentomatoes.com/celebrity/${celebrity.name.toLowerCase().split(' ').join('_')}`}
                target="_blank"
                rel="noreferrer"
            >
                <img src={celebrity.img} alt={celebrity.name} />
            </a>
            <div>
                <h4>{celebrity.name}</h4>
                <p>{celebrity.birthday}</p>
            </div>
        </div>
    );
}
