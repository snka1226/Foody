import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
// import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../image/Logo.png'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const direction = ['home', 'order', 'chart', 'menu']
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 5, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div">
                        Захиалга
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variants="permanent" open={open}
                sx={{
                    '& .MuiDrawer-paper': {
                        color: "white",
                        backgroundColor: "#000723"
                    },
                }}
            >
                <DrawerHeader sx={{ margin: 3 }}>
                    <img src={logo}></img>
                    <IconButton onClick={handleDrawerClose}>
                        {/* arrow  heseg*/}
                        {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{ color: '#fff' }} /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Захиалга', 'График', 'Меню',].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* {index % 2 === 0 ? <InboxIcon sx={{ color: '#fff' }} /> : <MailIcon sx={{ color: '#fff' }} />} */}
                                    {index === 1 ? <EqualizerIcon sx={{ color: '#fff' }} /> : index === 2 ? <RestaurantMenuIcon sx={{ color: '#fff' }} /> : <BorderColorIcon sx={{ color: '#fff' }} /> }
                                    {/* {index === 1 ? <img src={order} alt=''></img> : index === 2 ? <img src={chart} alt=''></img> : <img src={menu} alt=''></img>} */}
                                </ListItemIcon>
                                <Link to={'/' + direction[index]}>
                                    <ListItemText primary={text} sx={{ textDecoration: 'none', color: '#fff' }} />
                                </Link>

                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>
                    hey
                </Typography>
                <Typography paragraph>
                    hii
                </Typography>
            </Main>
        </Box>
    );
}

// export default Home;
