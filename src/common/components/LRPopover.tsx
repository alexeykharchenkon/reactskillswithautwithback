import { Register } from "@components/Auth/Register";
import { Login } from "@components/Auth/Login";
import { Popover } from "@material-ui/core";

interface LRPopoverProps {
    handleClose: () => void;
    anchorEl: HTMLButtonElement | null;
    isLogin: boolean;
    authFunc: any;
    classes: any;
}

export const LRPopover = ({handleClose, anchorEl, isLogin, authFunc, classes}: LRPopoverProps) => {
    return (
        <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
           {isLogin && <Login 
                authFunc={authFunc} 
                handleClose={handleClose}
                classes={classes}

            />}
           {!isLogin && <Register 
                authFunc={authFunc} 
                handleClose={handleClose} 
                classes={classes}
            />}
        </Popover>
    );
}