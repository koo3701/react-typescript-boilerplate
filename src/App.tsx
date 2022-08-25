import { Interpolation, Theme } from '@emotion/react';

const styles: { [key: string]: Interpolation<Theme> } = {
  wrap: {
    textAlign: 'center',
  },
  p: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF0000',
  },
};

function App() {
  return (
    <div css={styles.wrap}>
      <p css={styles.p}>react-typescript-boilerplate</p>
    </div>
  );
}

export default App;
