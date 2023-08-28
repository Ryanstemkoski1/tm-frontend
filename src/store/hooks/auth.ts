import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../';
import { logout, AuthState } from '../reducers/auth';

interface AuthProps extends AuthState {
  logout: () => void;
  isLoggedIn: boolean;
}

export const useAuth = (): AuthProps => {
  const allState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return {
    ...allState,
    isLoggedIn: !!allState.token,
    logout: () => dispatch(logout()),
  };
};
