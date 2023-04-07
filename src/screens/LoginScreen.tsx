import { AuthLayout } from '../components/AuthLayout';
import { Login } from '../containers/Login';

export function LoginScreen() {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
}
