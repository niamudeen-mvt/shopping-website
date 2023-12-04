import React, { useState } from 'react'
import { Box, Container, Stack, Typography, IconButton, Badge, Drawer, Button, ListItem, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from '@mui/material'
import brandImage from "../../assets/icons/brand-logo.svg"
import { Link } from 'react-router-dom'
import searchIcon from "../../assets/icons/search-icon.svg"
import userIcon from "../../assets/icons/user-icon.svg"
import likeIcon from "../../assets/icons/like-icon.svg"
import shoppingBag from "../../assets/icons/shopping-bag-icon.svg"
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import CommonContainer from '../container'
import { useTheme } from '@emotion/react'
import CustomDrawer from '../shared/CustomDrawer'
import useBreakpoints from '../../hooks/useBreakpoints'

const navLinkList = [
  {
    id: "home",
    title: 'Home',
    url: "/"
  },
  {
    id: "about",
    title: 'About',
    url: "/about"
  },
  {
    id: "shop",
    title: 'Shop',
    url: "/shop"
  }, {
    id: "new-arrivals",
    title: 'New Arrivals',
    url: "/new-arrivals"
  }, {
    id: "best-seller",
    title: 'Best Seller',
    url: "/best-seller"
  }, {
    id: "faq's",
    title: 'Faq',
    url: "/faq"
  }, {
    id: "review",
    title: 'Review',
    url: "/review"
  },
  {
    id: "contact",
    title: 'Contact',
    url: "/contact"
  },
]


const PrimaryNavbar = (props) => {


  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { LG } = useBreakpoints()
  const isMatches = LG

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", padding: "100px 0" }}
    >
      <List>
        {navLinkList.map(({ id, title }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box >
      <CommonContainer>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} minHeight={'10vh'} maxWidth={'100%'} sx={{ padding: '10px 0' }}>
          <a href='/'>
            <img src={brandImage} alt='brand-img' />
          </a>
          {
            isMatches ?
              <>
                <Stack direction={'row'} spacing={4} >
                  {
                    navLinkList?.map(({ id, title, url }) => {
                      return (
                        <Link to={url}>
                          <Typography variant="body1" key={id} >
                            {title}
                          </Typography>
                        </Link>
                      )
                    })
                  }
                </Stack>
                <Stack direction={'row'} spacing={4} >
                  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <img src={searchIcon} alt="search-icon" />
                  </IconButton>
                  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <img src={userIcon} alt="user-icon" />
                  </IconButton>
                  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                      <img src={likeIcon} alt="like-icon" />
                    </Badge>
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={17} color="error">
                      <img src={shoppingBag} alt="shopping-bag-icon" />
                    </Badge>
                  </IconButton>
                </Stack>
              </>
              :
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: theme.palette.common.black }} />
              </IconButton>
          }

        </Box>
      </CommonContainer>
      <CustomDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawer={drawer}
        window={window}
      />
    </Box >
  )
}

export default PrimaryNavbar