import React from 'react'
import { Box, Container, Stack, Typography, IconButton, Badge, Drawer, Button, ListItem, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import brandImage from "../../assets/icons/brand-logo.svg"
import { Link } from 'react-router-dom'
import searchIcon from "../../assets/icons/search-icon.svg"
import userIcon from "../../assets/icons/user-icon.svg"
import likeIcon from "../../assets/icons/like-icon.svg"
import shoppingBag from "../../assets/icons/shopping-bag-icon.svg"
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

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





const PrimaryNavbar = () => {
  const navigationStyles = {
    '@media (max-width: 1360px)': {
      display: 'none'
    }
  }
  const menuStyles = {
    '@media (max-width: 1360px)': {
      display: 'block'
    },
    display: 'none'
  }

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLinkList.map(({ title }, index) => (
          <ListItem key={title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {<HomeIcon />}
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box >
      <Container maxWidth="xl">
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} minHeight={'10vh'} maxWidth={'100%'} sx={{ padding: '10px 0' }}>
          <a href='/'>
            <img src={brandImage} alt='brand-img' />
          </a>
          <Stack direction={'row'} spacing={4} sx={navigationStyles}>
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
          <Stack direction={'row'} spacing={4} sx={navigationStyles}>
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
          <div sx={menuStyles}>
            {['top'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button Button onClick={toggleDrawer(anchor, true)} > {<MenuIcon sx={menuStyles} />}</Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </Box>
      </Container >
    </Box >
  )
}

export default PrimaryNavbar