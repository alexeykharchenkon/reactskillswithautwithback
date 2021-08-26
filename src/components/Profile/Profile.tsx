import { Container, Typography } from '@material-ui/core';
import { useStore } from '@stores/rootStore';
import { observer } from 'mobx-react-lite';

interface ProfileProps {
    classes: any;
}

export const Profile = observer(({classes} : ProfileProps) => {
  const { authStore } = useStore();
  const user = authStore.user;

  return (
    <Container className={classes.profile_component}>
      <Container className={classes.profile_component_container}>
        <Typography variant="h4" align="center">Hello {user?.name}</Typography>
      </Container>
    </Container>
  );
});