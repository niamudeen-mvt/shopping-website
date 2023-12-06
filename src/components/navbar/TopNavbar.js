import { useState } from 'react';
import CommonContainer from '../shared/container';
import { Stack, Box, IconButton, Typography } from '@mui/material';
import { flexSBStyles } from '../styling';
import CustomDrawer from '../shared/CustomDrawer';
import useMui from '../../hooks/useMui';
import CustomSelect from '../shared/CustomSelect';

import MenuIcon from "@mui/icons-material/Menu"
import FacebookIcon from '../../assets/icons/icon _social facebook_.svg';
import InstagramIcon from '../../assets/icons/icon _instagram_white_.svg';
import TwitterIcon from '../../assets/icons/icon _twitter_.svg';
import MusicNoteIcon from '../../assets/icons/icon _logo tiktok_.svg';



const TopNavbar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const { MD, BLACK, WHITE } = useMui();
    const isMatches = MD;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const iconStyles = {
        color: WHITE,
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ padding: '100px 0' }}>
            <Box>
                <Stack
                    direction="row"
                    spacing={1}
                    textAlign="center"
                    justifyContent="center"
                    mb={4}
                >
                    <Typography color="error">SHOP15</Typography>
                    <Typography>For 15 Percent Off Your order!</Typography>
                </Stack>
                <Stack
                    direction="row"
                    spacing={1}
                    textAlign="center"
                    justifyContent="center"
                >
                    <CustomSelect
                        defaultValue={1}
                        type="dark"
                        options={[{ value: 1, label: 'English' }]}
                    />
                    <CustomSelect
                        defaultValue={2}
                        type="dark"
                        options={[{ value: 1, label: 'USD' }]}
                    />
                </Stack>
            </Box>
        </Box>
    );

    return (
        <Box sx={{ bgcolor: BLACK }}>
            <CommonContainer>
                <Box sx={flexSBStyles} minHeight={'44px'}>
                    <Stack direction="row" spacing={3} sx={{ flexGrow: 1 }}>
                        {/* <FacebookIcon sx={iconStyles} />
                        <TwitterIcon sx={iconStyles} />
                        <InstagramIcon sx={iconStyles} />
                        <MusicNoteIcon sx={iconStyles} /> */}
                        <img src={FacebookIcon} alt='fb' />
                        <img src={TwitterIcon} alt='fb' />
                        <img src={InstagramIcon} alt='fb' />
                        <img src={MusicNoteIcon} alt='fb' />
                    </Stack>
                    {isMatches ? (
                        <>
                            <Stack
                                direction={'row'}
                                spacing={1}
                                sx={{ flexGrow: 1 }}
                            >
                                <Typography
                                    variant="caption"
                                    fontWeight={700}
                                    color="error"
                                >
                                    SHOP15
                                </Typography>
                                <Typography variant="caption" color={WHITE}>
                                    For 15 Percent Off Your order!
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <CustomSelect
                                    defaultValue={1}
                                    options={[{ value: 1, label: 'English' }]}
                                />
                                <CustomSelect
                                    defaultValue={2}
                                    options={[{ value: 1, label: 'USD' }]}
                                />
                            </Stack>
                        </>
                    ) : (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                        >
                            <MenuIcon sx={iconStyles} />
                        </IconButton>
                    )}
                </Box>
            </CommonContainer >
            <CustomDrawer
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
                window={window}
                drawer={drawer}
            />
        </Box >
    );
};

export default TopNavbar;
