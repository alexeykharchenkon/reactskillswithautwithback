import { observer } from 'mobx-react-lite';
import { useStore } from '@stores/rootStore';
import { useStyles } from '@styles/main';
import { Container } from '@material-ui/core';
import { Route, Switch } from "react-router-dom";
import { TableComponent } from '@components/TableComponent/TableComponent';
import { Navbar } from '@common/components/Navbar';
import { RequireAuth } from '@common/components/RequireAuth';

export const App = observer(() => {
  const { authStore } = useStore();
  const classes = useStyles();

  return (
    <Container className={classes.app}>
      <Navbar
        user={authStore.user}
        authFunc={authStore.authFunc}
        classes={classes}
      />
      <Switch>
        <Route exact path='/' render={() => 
           <TableComponent classes={classes} />
        } />
        <Route path='/profile' render={({ match: { path }}: any) => 
          <RequireAuth
            user={authStore.user}
            classes={classes}
            path={path}
          />
        } />
      </Switch>
    </Container>      
  );
});
