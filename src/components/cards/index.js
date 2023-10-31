import { Card, CardActions, CardContent, Stack, Typography, Box } from "@mui/material"

const Rating = () => {
  const value = 2
  return (
    <>
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
    </>
  )
}

export const NewArrivalCard = () => {
  return (
    <Card>
      <CardContent>
        <Box>
          <img alt="card-image" />
        </Box>
        <Rating />
        <Typography variant="body1"></Typography>
        <Stack>
          <Typography variant="body2"></Typography>
          <Typography variant="body2"></Typography>
        </Stack>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  )
}