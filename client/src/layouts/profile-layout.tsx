import { Link, Outlet, useNavigate } from 'react-router';
import MainLogo from '../components/main-logo';
import Button from '../components/button';
import IlusstrationPhoneMockup from '../assets/illustration-phone-mockup';

export default function ProfileLayout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="px-6">
        <div className="flex justify-between items-center py-4 px-6">
          <MainLogo />
          <div className="flex space-x-4">
            <Link to="/links" className="text-m-grey-d mr-6">
              Links
            </Link>
            <Link to="/profile" className="text-m-grey-d mr-6">
              Profile Details
            </Link>
          </div>
          <Button onClick={() => navigate('/preview')}>Preview</Button>
        </div>
      </nav>
      <main className="flex-1 grid grid-cols-5 gap-6 p-6">
        <section className="col-span-2 relative">
          <div className="top-0 sticky flex justify-center">
            <IlusstrationPhoneMockup />
          </div>
        </section>
        <section className="col-span-3 p-10">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
