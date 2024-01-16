"use client"

import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SearchIcon from '@mui/icons-material/Search';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import WidgetsIcon from '@mui/icons-material/Widgets';
import GridViewIcon from '@mui/icons-material/GridView';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SettingsIcon from '@mui/icons-material/Settings';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import Style from '../style/Layout.module.css'

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Layout({ children }) {
    const router = useRouter();
    const pathname = usePathname()
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [isDarkMode, setDarkMode] = useState(false);
    const [isCollapselibrary, setIsCollapseLibrary] = useState(false);

    // functon for open sidenavbar 
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    // function for toggle on sidenavbar 
    const handleDrawerClose = () => {
        setOpen(false);
    };

    // function for view all sub tabs of specs section 
    const handleCollapseLibrary = () => {
        setIsCollapseLibrary(!isCollapselibrary);
    };

    // function for toogle button of changing light to dark mode 
    const hangleChangeDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    // function for redirect to seprate details component 
    const handleTabClick = (tabName) => {
        router.push(`/${tabName.toLowerCase()}`);
    };

    // function for calling invoking two function at onclick at specs section
    const handleWrapper = (text) => {
        handleCollapseLibrary();
        handleTabClick(text);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar open={open} className={Style.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Seach box added  */}
                    <div className={Style.SearchParent}>
                        <input
                            type="text"
                            placeholder="Search"
                            className={Style.SearchInput}
                        />
                        <SearchIcon className={Style.SearchIcon} />
                    </div>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        {/* Toogle buttoon for dark mode  */}
                        <div>
                            <FormControlLabel
                                control={<Switch checked={isDarkMode} onChange={hangleChangeDarkMode} />}
                            />
                        </div>

                        {/* Notification icon  */}
                        <IconButton
                            size="large"
                            color="inherit"
                        >
                            <NotificationsIcon />
                        </IconButton>

                        {/* user icon and name of user  */}
                        <IconButton sx={{ p: 0, marginLeft: 1 }}>
                            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtmuKwjrnxncWjaeLRqc52s4QxuhjAd-c6Jdgon2N6A&s" />
                        </IconButton>
                        <Typography variant="body1" sx={{ marginLeft: 1, marginTop: 1 }}>
                            Aria Bennett
                        </Typography>

                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}  >
                {/* project logo and icon  */}
                <DrawerHeader className={Style.headerLogo}>
                    <div className={Style.logoImg}>
                        <img src="/logo.svg" alt="Your Image Alt Text" />
                    </div>
                    <IconButton onClick={handleDrawerClose}>
                        <WidgetsIcon className={Style.LogoColor} />
                    </IconButton>
                </DrawerHeader>
                <Divider />

                {/* list icon arrary created and apply map */}
                <List className={Style.ListParent}>
                    {['Dashboard', 'Library', 'Checklist', 'Marriott', 'Setting']
                        .map((text, index) => (
                            <ListItem key={text} className={Style.ListItem} onClick={() => handleTabClick(text)}>
                                <ListItemButton className={Style.ListItemButton}
                                    sx={{ justifyContent: open ? 'initial' : 'center' }}>
                                    <ListItemIcon className={Style.ListItemIcon}
                                        sx={{ mr: open ? 3 : 'auto' }}>
                                        {index === 0 && <GridViewIcon />}
                                        {index === 1 && <LocalLibraryIcon />}
                                        {index === 2 && <FactCheckIcon />}
                                        {index === 3 && <LocationCityIcon />}
                                        {index === 4 && <SettingsIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}

                    {/* Spec main section tab  */}
                    <ListItem className={Style.ListItem} onClick={() => handleWrapper("Specs")}>
                        <ListItemButton className={Style.ListItemButton}
                            sx={{ justifyContent: open ? 'initial' : 'center' }} >
                            <ListItemIcon className={Style.ListItemIcon}
                                sx={{ mr: open ? 3 : 'auto', }}>
                                <LocalBarIcon />
                            </ListItemIcon>
                            <ListItemText primary="Specs" sx={{ opacity: open ? 1 : 0 }} />
                            {open ? (isCollapselibrary ? <ExpandLess /> : <ExpandMore />) : 'Specs'}
                        </ListItemButton>
                    </ListItem>

                    {/* Inner tabs of specs section  */}
                    <Collapse in={isCollapselibrary} timeout="auto">
                        {['Cocktails', 'Spirits', 'Wine', 'Beer', 'Low',].map((text, index) => (
                            <ListItem key={text} className={Style.ListItem} onClick={() => handleTabClick("Specs/" + text)}>
                                <ListItemButton className={Style.ListItemButton}
                                    sx={{ justifyContent: open ? 'initial' : 'center' }}
                                >
                                    <ListItemIcon className={Style.ListItemIcon}
                                        sx={{ mr: open ? 3 : 'auto' }}
                                    >
                                        {index === 0 && <SubdirectoryArrowRightIcon />}
                                        {index === 1 && <SubdirectoryArrowRightIcon />}
                                        {index === 2 && <SubdirectoryArrowRightIcon />}
                                        {index === 3 && <SubdirectoryArrowRightIcon />}
                                        {index === 4 && <SubdirectoryArrowRightIcon />}
                                        {index === 5 && <SubdirectoryArrowRightIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Collapse>
                </List>

            </Drawer>
          <main className={Style.MainParent}>
                    {children}
                </main>
        </Box>

    );
}
