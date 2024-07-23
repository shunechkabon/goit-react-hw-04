import s from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick }) => { 
    return (
        <button onClick={onClick} className={s.button}>Load More</button>
    );
};

export default LoadMoreButton;