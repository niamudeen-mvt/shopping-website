import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';

// xs, : 0px
// sm, : 600px
// md, : 900px
// lg, : 1200px
// xl, : 1536px

const useMui = () => {
    const theme = useTheme();

    const LG = useMediaQuery(theme.breakpoints.up('lg'));
    const MD = useMediaQuery(theme.breakpoints.up('md'));
    const SM = useMediaQuery(theme.breakpoints.up('sm'));

    const WHITE = theme.palette.success.main;
    const BLACK = theme.palette.info.main;
    const ORANGE = theme.palette.warning.main;

    return { LG, MD, SM, WHITE, BLACK, ORANGE };
};

export default useMui;
