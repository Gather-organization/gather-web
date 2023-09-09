import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { ButtonLink } from 'shared/components';
import { useRoles } from 'shared/hooks';
import { RootState, authActions } from 'shared/store';
import DropDownMenu from './Components/DropDownMenu';

import {
  HeaderColumn1,
  HeaderColumn2,
  HeaderColumn3,
  HeaderStyled,
  HeaderTitle,
} from './styled';

export const Header = () => {
  const { userRoles } = useRoles();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector<RootState>((state) => state.auth.isAuthenticated);

  const logoutHandler = () => dispatch(authActions.signOut());

  return (
    <HeaderStyled>
      <HeaderColumn1>
        <DropDownMenu userRoles={userRoles} />
      </HeaderColumn1>

      <HeaderColumn2>
        <HeaderTitle as={Link} to={'/'}>
          Gather
        </HeaderTitle>
      </HeaderColumn2>

      <HeaderColumn3>
        <DropDownMenu userRoles={userRoles} />

        {auth ? (
          <ButtonLink onClick={() => logoutHandler()}>Sair</ButtonLink>
        ) : (
          <ButtonLink onClick={() => navigate('/login')}>Login</ButtonLink>
        )}
      </HeaderColumn3>
    </HeaderStyled>
  );
};
