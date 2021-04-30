import Palette from './components/Palette';
import seedColors from './colors/seedColors';
import {generatePalettes}from './colors/colorHelpers';

function App() {
  return (
    <div>
      <Palette palette={generatePalettes(seedColors[4])} />
    </div>
  );
}

export default App;
