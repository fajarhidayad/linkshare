import { useState } from 'react';
import IllustrationEmpty from '../assets/illustration-empty';
import Button from '../components/button';

export default function LinksPage() {
  const [links, setLinks] = useState<string[]>(['a']);

  function addLink() {
    setLinks([...links, '']);
  }

  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-bold leading-[1.5] mb-2">
          Customize your links
        </h1>
        <p className="text-m-grey">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>

      <Button onClick={addLink} className="block w-full">
        Add new link
      </Button>

      <form onSubmit={(e) => e.preventDefault()} className="mt-6">
        {links.length === 0 ? (
          <div className="flex flex-col items-center py-14 px-24 text-center">
            <IllustrationEmpty />
            <h2 className="text-3xl font-bold text-m-grey-d mb-6 mt-10">
              Let's get you started
            </h2>
            <p className="text-m-grey">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        ) : (
          <ul className="mt-6">
            {links.map((link, index) => (
              <li key={index} className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-m-grey font-semibold mb-2">
                    Link #{index + 1}
                  </label>
                  <button className="text-m-grey">Remove</button>
                </div>
                <div className="mb-3">
                  <label className="text-xs text-m-grey-d block mb-1">
                    Platform
                  </label>
                  <select className="w-full border border-borders rounded-lg py-3 px-4">
                    <option value="github" defaultChecked>
                      GitHub
                    </option>
                    <option value="Instagram">Instagram</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-m-grey-d block mb-1">
                    Link
                  </label>
                  <input
                    type="url"
                    className="w-full border border-borders rounded-lg py-3 px-4"
                    placeholder="https://example.com/your-username"
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
        <Button className="ml-auto block">Save</Button>
      </form>
    </>
  );
}
