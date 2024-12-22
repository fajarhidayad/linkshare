import { Link, useNavigate } from 'react-router';
import Button from '../components/button';

export default function PreviewPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      <div className="absolute top-0 z-0 w-full rounded-b-[32px] bg-m-purple h-[357px]"></div>
      <nav className="p-6 relative z-50 mb-20">
        <section className="bg-white rounded-xl px-6 py-4 flex justify-between items-center">
          <Button onClick={() => navigate('/links')}>Back to Editor</Button>
          <Button>Share Link</Button>
        </section>
      </nav>

      <main className="">
        <section className="flex flex-col shadow-md rounded-3xl px-14 py-12 relative z-100 bg-white max-w-[349px] mx-auto">
          <div className="flex flex-col items-center mb-14">
            <div className="size-28 mb-6 bg-slate-300 border-4 border-m-purple rounded-full flex items-center justify-center">
              <p className="text-m-purple font-semibold">Image</p>
            </div>
            <h2 className="text-3xl font-bold text-m-grey-d leading-6 mb-2">
              Thomas Edison
            </h2>
            <p className="text-m-grey">thomas@email.com</p>
          </div>
          <div className="flex flex-col space-y-5">
            <Link
              to={'/'}
              className="flex bg-m-grey-d text-white p-4 items-center rounded-lg"
            >
              GitHub
            </Link>
            <Link
              to={'/'}
              className="flex bg-m-red text-white p-4 items-center rounded-lg"
            >
              Youtube
            </Link>
            <Link
              to={'/'}
              className="flex bg-[#2D68FF] text-white p-4 items-center rounded-lg"
            >
              LinkedIn
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
