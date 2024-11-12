import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

export default function UserForm() {
  const [inputName, setInputName] = useState('');
  const { setName } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputName);
    window.history.pushState({}, '', '/quiz');
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <div className="my-8 flex flex-col items-center justify-center">
        <h1 className='font-semibold font-pixeloid'>What's your name?</h1>
        <p className='font-pixeloid-mono text-sm'>Before you start, please tell us your name.</p>
        <form onSubmit={handleSubmit} className='max-w-sm border rounded-md my-2 px-4 py-2'>
            <div className='flex flex-col items-start'>
                <label htmlFor="name" className='font-pixeloid text-sm'>Name</label>
                <input className='font-pixeloid-mono text-sm px-2 py-0.5 outline-none border border-neutral-400 my-0.5 rounded-md text-neutral-600' name="name" id="name" type="text" value={inputName} onChange={e => setInputName(e.target.value)} />
            </div>
            <button className='mt-4 border w-full h-8 bg-blue-400 text-neutral-200 font-pixeloid rounded-md font-bold hover:bg-blue-600 transition-all' type="submit">Start Quiz</button>
        </form>
    </div>
  );
}