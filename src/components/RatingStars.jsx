import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const RatingStars = ({ note }) => {
    const totalStars = 5; 
    const fullStars = Math.floor(note);
    const halfStar = note % 1 !== 0;
    const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="stars ms-1">
            {[...Array(fullStars)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar}/>
            ))}
            {halfStar && <FontAwesomeIcon icon={faStarHalfAlt}/>}
            {[...Array(emptyStars)].map((_, i) => (
                <FontAwesomeIcon key={`empty-${i}`} icon={faStar}/>
            ))}
        </div>
    );
};

export default RatingStars;
