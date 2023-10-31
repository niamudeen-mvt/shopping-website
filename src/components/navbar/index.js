import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Container, Stack, Toolbar, Box, Badge } from '@mui/material'
import { menuItems } from "../../utils/menu-items"
import brandLogo from "../../assets/icons/brand-logo.svg"
import searchIcon from "../../assets/icons/search-icon.svg"
import userIcon from "../../assets/icons/user-icon.svg"

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

const Header = () => {

  const routeName = useLocation()

  return (
    <Box>
      <Container className='container'>
        {/* ================= navbar ================== */}
        <Toolbar className='navbar' >
          <Box sx={{ flexGrow: 1 }}>
            <a className='brand_logo'>
              <img src={brandLogo} alt='brand-logo' />
            </a>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Stack direction='row' spacing={5}>
              {
                menuItems?.length ?
                  menuItems?.map(e => {
                    return (
                      <NavLink to={e?.url} className={routeName === e?.url ? 'nav_link cursor active' : 'nav_link cursor'}>
                        {e?.title}
                      </NavLink>
                    )
                  }) : null
              }
            </Stack>
          </Box>

          <Stack direction='row' spacing={3}>
            <div>
              <img src={searchIcon} alt="search-icon" />
            </div>
            <div>
              <img src={userIcon} alt="user-icon" />
            </div>
            <Badge badgeContent='4' color='secondary'>
              <FavoriteBorderOutlinedIcon color='secondary' />
            </Badge>
            <Badge badgeContent='4' color='secondary'>
              <LocalMallOutlinedIcon color='secondary' />
            </Badge>
          </Stack>
        </Toolbar>
      </Container>
    </Box >
  )
}

export default Header