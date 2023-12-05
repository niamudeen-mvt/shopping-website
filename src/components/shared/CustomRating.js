import Rating from '@mui/material/Rating';
import useMui from '../../hooks/useMui';

const CustomRating = ({ count, color, size = 'small' }) => {
    const { BLACK, ORANGE } = useMui();
    return (
        <Rating
            name="read-only"
            value={count}
            readOnly
            size={size}
            sx={{ color: color === 'BLACK' ? BLACK : ORANGE }}
        />
    );
};

export default CustomRating;
