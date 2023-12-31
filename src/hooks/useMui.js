import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

const useMui = () => {
    const theme = useTheme();

    const LG = useMediaQuery(theme.breakpoints.up('lg'));
    const MD = useMediaQuery(theme.breakpoints.up('md'));
    const SM = useMediaQuery(theme.breakpoints.up('sm'));

    const WHITE = theme.palette.success.main;
    const BLACK = theme.palette.info.main;
    const ORANGE = theme.palette.warning.main;
    const PARAGRAPH = theme.custom.paragraph

    return { LG, MD, SM, WHITE, BLACK, ORANGE, PARAGRAPH };
};

export default useMui;


