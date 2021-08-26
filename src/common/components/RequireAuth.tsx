import { Profile } from "@components/Profile/Profile";
import { User } from "@models/types";
import { Route, Redirect } from "react-router-dom";

interface RequireAuthProps {
    user: User | undefined;
    classes: any;
    path: any;
}

export const RequireAuth = ({path, user, classes }: RequireAuthProps) => 
  !Boolean(user) ? 
  ( <Redirect to="/" />) : 
  (
    <>
      <Route path={`${path}`} render={() => 
        <Profile 
            classes={classes}
        />
      } />
    </>
  );