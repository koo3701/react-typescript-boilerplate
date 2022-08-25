import { Interpolation, Theme } from '@emotion/react';
import { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';

const styles: { [key: string]: Interpolation<Theme> } = {
  p: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  red: {
    color: '#FF0000',
  },
  green: {
    color: '#00FF00',
  },
  blue: {
    color: '#0000FF',
  },
};

const colors = ['red', 'green', 'blue'] as const;

function App() {
  const [color, setColor] = useState<typeof colors[number]>('red');
  const [open, setOpen] = useState(false);

  return (
    <div className='text-center'>
      <p css={[styles.p, styles[color]]}>react-typescript-boilerplate</p>
      <Dropdown isOpen={open} toggle={() => setOpen(!open)}>
        <DropdownToggle caret>{color}</DropdownToggle>
        <DropdownMenu>
          {colors.map((color) => (
            <DropdownItem onClick={() => setColor(color)}>{color}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default App;
