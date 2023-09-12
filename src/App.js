import { useState } from 'react';
import useGenerateRandomColor from './useGenerateRandomColor';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('');
  const { color, generateColor } = useGenerateRandomColor();

  return (
    <>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: '#' + color,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Random color generator:</h1>

        <br />
        <br />
        <br />

        <div
          style={{
            margin: '10px',
            padding: '5px',
          }}
        >
          Generated Color: {color}
        </div>
      </div>
      <button
        onClick={() => {
          generateColor();
          setBackgroundColor(`#${color}`);
        }}
      >
        Generate
      </button>
    </>
  );
}
