import React from 'react';
import { Pagination, Stack } from '@mui/material';
import { flexCenterStyles } from '../styling';

const CustomPagination = () => {
    return (
        <Stack spacing={2} marginTop={8} sx={flexCenterStyles}>
            <Pagination count={3} hidePrevButton />
        </Stack>
    );
};

export default CustomPagination;
