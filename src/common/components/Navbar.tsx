import { AppBar, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useState } from "react";
import { LRPopover } from "./LRPopover";
import { NavLink } from "react-router-dom";
import { User } from "@models/types";
import { USER_LOGOUT } from "@actions/index";

interface NavBarProps {
    user: User | undefined;
    authFunc: (action: string, user: User) => void;
    classes: any;
}

export const Navbar = ({user, authFunc, classes} : NavBarProps) => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
    const handleProfileMenuOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorElMenu(e.currentTarget);
    const handleMenuClose = () => setAnchorElMenu(null);
    const isMenuOpen = Boolean(anchorElMenu);

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, login: boolean) => {
        setAnchorEl(e.currentTarget);
        setIsLogin(login);
    }
    const handleClose = () => setAnchorEl(null);

    const handleCloseAll = () => {
        handleClose();
        handleMenuClose();
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorElMenu}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={(e: any) => handleClick(e, true)}>Login</MenuItem>
            <MenuItem onClick={(e: any) => handleClick(e, false)}>Register</MenuItem>
            <MenuItem onClick={()=> authFunc(USER_LOGOUT, {id:'', name: '', password: ''})}>Logout</MenuItem>
        </Menu>
    );

    return(
        <Container className={classes.navbar_container}>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <NavLink to="/" style={{textDecoration: 'none', color: '#000', marginRight: '15px'}}>
                        <Typography variant="h6">Main</Typography>
                    </NavLink> 
                    <NavLink to="/profile" style={{textDecoration: 'none', color: '#000'}}>
                        <Typography variant="h6">Profile Page</Typography>
                    </NavLink> 
                    <div style={{flexGrow: 1}}/>
                    {Boolean(user) && <div style={{display: 'flex', color: '#000'}}>Hello {user?.name}</div>}
                    <div style={{display: 'flex'}}>
                        <IconButton
                            edge="end"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
            <LRPopover 
                handleClose={handleCloseAll}
                anchorEl={anchorEl}
                isLogin={isLogin}
                authFunc={authFunc}
                classes={classes}
            />
        </Container>
    );
}