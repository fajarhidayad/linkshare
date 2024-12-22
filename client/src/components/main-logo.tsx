import LogoDevlinksSmall from '../assets/logo-devlinks-small';

export default function MainLogo() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <LogoDevlinksSmall />
      <h1 className="font-bold text-2xl text-m-grey-d leading-[150%]">
        devlinks
      </h1>
    </div>
  );
}
