export default function ProfilePage() {
  return (
    <>
      <section className="mb-10">
        <h1 className="text-3xl font-bold leading-[1.5] mb-2">
          Profile Details
        </h1>
        <p className="text-m-grey">
          Add your details to create a personal touch to your profile.
        </p>
      </section>
      <form onSubmit={(e) => e.preventDefault()} className="p-5">
        <div className="p-5 grid grid-cols-3 gap-6 mb-6">
          <p className="text-m-grey flex-shrink-0 place-content-center">
            Profile picture
          </p>
          <div className="flex flex-shrink-0 items-center justify-center size-[200px] bg-m-purple-light text-m-purple rounded-xl">
            <p className="font-semibold">Upload Image</p>
          </div>
          <p className="text-m-grey place-content-center">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
        </div>
        <div className="p-5 space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <label
              className="flex-shrink-0 place-content-center"
              htmlFor="firstName"
            >
              First name*
            </label>
            <input
              type="text"
              id="firstName"
              className="col-span-2 border border-borders rounded-lg py-3 px-4"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <label
              className="flex-shrink-0 place-content-center"
              htmlFor="lastName"
            >
              Last name*
            </label>
            <input
              type="text"
              id="lastName"
              className="col-span-2 border border-borders rounded-lg py-3 px-4"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <label
              className="flex-shrink-0 place-content-center"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="col-span-2 border border-borders rounded-lg py-3 px-4"
            />
          </div>
        </div>
      </form>
    </>
  );
}
