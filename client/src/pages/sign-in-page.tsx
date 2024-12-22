import { Link } from 'react-router';
import Button from '../components/button';

export default function SignInPage() {
  return (
    <section className="mt-8 p-10">
      <div className="mb-10">
        <h2 className="font-bold text-[32px] mb-2 text-m-grey-d">Sign in</h2>
        <p className="text-m-grey">
          Add your details below to get back into the app
        </p>
      </div>
      <form className="flex flex-col space-y-6">
        <div className="space-y-1">
          <label htmlFor="email" className="block text-xs text-m-grey-d">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. alexios@email.com"
            className="w-full p-4 border outline-none ring-0 focus:border-m-purple border-borders rounded-lg"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="block text-xs text-m-grey-d">
            Create password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="At least 8 characters"
            className="w-full p-4 border outline-none ring-0 focus:border-m-purple border-borders rounded-lg"
          />
        </div>
        <Button>Sign in</Button>
        <p className="text-m-grey text-center">
          Don't have an account?{' '}
          <Link to={'/register'} className="text-m-purple hover:underline">
            Create account
          </Link>
        </p>
      </form>
    </section>
  );
}
