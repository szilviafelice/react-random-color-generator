import { useState } from 'react';
import useGenerateRandomColor from './useGenerateRandomColor';

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState('');
  const { color, generateColor } = useGenerateRandomColor();

  return (
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
      <div
        style={{
          margin: '10px',
          padding: '5px',
        }}
      >
        <button
          onClick={() => {
            generateColor();
            setBackgroundColor(`#${color}`);
          }}
        >
          Generate
        </button>
        <h1>Random color generator:</h1>
        <strong>
          Generated Color:
          <br />
          <br />
          {color}
        </strong>
      </div>
    </div>
  );
}
