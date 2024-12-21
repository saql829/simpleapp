import { useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let charSet = alphabets;
    if (numberAllowed) charSet += numbers;
    if (charAllowed) charSet += specialChars;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      newPassword += charSet[randomIndex];
    }

    setPassword(newPassword);
  };

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
        />
        <button
          className='outline-none bg-green-500 text-white px-3 py-0.5 shrink-0'
          onClick={() => navigator.clipboard.writeText(password)}
        >
          Copy
        </button>
      </div>
      <div className='flex justify-between items-center mb-3'>
        <label className='text-white'>Password Length</label>
        <input
          type='number'
          min={1}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className='w-16 px-2 py-1 text-black rounded'
        />
      </div>
      <div className='flex justify-between items-center mb-3'>
        <label className='text-white'>Include Numbers</label>
        <input
          type='checkbox'
          checked={numberAllowed}
          onChange={(e) => setNumberAllowed(e.target.checked)}
          className='scale-125'
        />
      </div>
      <div className='flex justify-between items-center mb-3'>
        <label className='text-white'>Include Special Characters</label>
        <input
          type='checkbox'
          checked={charAllowed}
          onChange={(e) => setCharAllowed(e.target.checked)}
          className='scale-125'
        />
      </div>
      <button
        onClick={generatePassword}
        className='bg-blue-500 text-white px-4 py-2 rounded w-full mt-4'
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
