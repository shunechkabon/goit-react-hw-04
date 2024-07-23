import s from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => { 
    const { urls, alt_description } = image;

    return (
        <div onClick={onClick} className={s.card}>
            <img src={urls.small} alt={alt_description} />
        </div>
    );
};

export default ImageCard;