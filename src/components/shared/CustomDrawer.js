import { Drawer } from '@mui/material'
import React from 'react'

const CustomDrawer = ({ mobileOpen, handleDrawerToggle, window, drawer }) => {
  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Drawer
      anchor={"top"}
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: '100%',
        },
      }}
    >
      {drawer}
    </Drawer>
  )
}

export default CustomDrawer