import React, { useState } from 'react';
import {
    Box,
    Stack,
    Typography,
    IconButton,
    Badge,
    ListItem,
    List,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import brandImage from '../../assets/icons/brand-logo.svg';
import { Link, useLocation } from 'react-router-dom';
import searchIcon from '../../assets/icons/search-icon.svg';
import userIcon from '../../assets/icons/user-icon.svg';
import likeIcon from '../../assets/icons/like-icon.svg';
import shoppingBag from '../../assets/icons/shopping-bag-icon.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CommonContainer from '../container';
import CustomDrawer from '../shared/CustomDrawer';
import useMui from '../../hooks/useMui';
import { menuItems } from '../../utils/menu-items';

const PrimaryNavbar = (props) => {
    const routeName = useLocation()?.pathname;

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const { LG, BLACK } = useMui();
    const isMatches = LG;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{ textAlign: 'center', padding: '100px 0' }}
        >
            <List>
                {menuItems.map(({ id, title }) => (
                    <ListItem key={id} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box>
            <CommonContainer>
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    minHeight={'10vh'}
                    maxWidth={'100%'}
                    sx={{ padding: '10px 0' }}
                >
                    <a href="/">
                        <img src={brandImage} alt="brand-img" />
                    </a>
                    {isMatches ? (
                        <>
                            <Stack direction={'row'} spacing={4}>
                                {menuItems?.map(({ id, title, url }) => {
                                    return (
                                        <Link to={url}>
                                            <Typography
                                                variant="body1"
                                                key={id}
                                                fontWeight={
                                                    routeName === url
                                                        ? 700
                                                        : 400
                                                }
                                            >
                                                {title}
                                            </Typography>
                                        </Link>
                                    );
                                })}
                            </Stack>
                            <Stack direction={'row'} spacing={4}>
                                <IconButton
                                    size="large"
                                    aria-label="show 4 new mails"
                                    color="inherit"
                                >
                                    <img src={searchIcon} alt="search-icon" />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show 4 new mails"
                                    color="inherit"
                                >
                                    <img src={userIcon} alt="user-icon" />
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show 4 new mails"
                                    color="inherit"
                                >
                                    <Badge badgeContent={4} color="info">
                                        <img src={likeIcon} alt="like-icon" />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="info">
                                        <img
                                            src={shoppingBag}
                                            alt="shopping-bag-icon"
                                        />
                                    </Badge>
                                </IconButton>
                            </Stack>
                        </>
                    ) : (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon sx={{ color: BLACK }} />
                        </IconButton>
                    )}
                </Box>
            </CommonContainer>
            <CustomDrawer
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                drawer={drawer}
                window={window}
            />
        </Box>
    );
};

export default PrimaryNavbar;
