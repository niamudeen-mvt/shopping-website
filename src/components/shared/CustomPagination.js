import React from 'react'
import { Pagination, Stack } from '@mui/material'

const CustomPagination = () => {
  return (
    <Stack spacing={2} marginTop={8} className="flex_center">
      <Pagination count={3} hidePrevButton />
    </Stack>
  )
}

export default CustomPagination