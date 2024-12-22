import { Outlet } from 'react-router';
import MainLogo from '../components/main-logo';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-m-grey-light flex flex-col justify-center items-center">
      <main className="max-w-md w-full py-10">
        <MainLogo />
        <Outlet />
      </main>
    </div>
  );
}
