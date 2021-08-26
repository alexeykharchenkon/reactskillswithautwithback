import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    app: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: '#cbc26d',
        height: '100vh',
        width: '100%',
        padding: '5px'
    },
    profile_component: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    profile_component_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    table_component: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '5px',
        padding: '5px',
        background: '#fff59d',
        border: '2px solid #ff7961',
    },
    table_component_container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    table_component_buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    table_component_table: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-beetwen',
        marginBottom: '10px',
    },
    table_component_table_head: {
        background: '#cbc26d',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        background: '#fff59d',
        padding: '10px',
        border: '1px solid #ff7961',
        width: '400px',
    },
    form_body: {
        display: 'flex',
        flexDirection: 'column',
        width: '200px',
        alignItems: 'center',
        '& input' : {
            borderRadius: '5%',
            border: '1px solid #ff7961',
            height: '25px',
            width: '200px',
            marginBottom: '10px'
        },
    },
    navbar_container: {
        marginBottom: '60px',
    },
    toolbar: {
        backgroundColor: '#cbc26d',
    },
    login_container: {
        padding: '10px'
    }
  });