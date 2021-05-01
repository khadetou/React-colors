import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import seedColors from './colors/seedColors';
import {Route, Switch} from 'react-router-dom';
import {generatePalettes}from './colors/colorHelpers';

function App() {

  const findId = (id)=>{
    return seedColors.find((seedId)=>{
      
      return seedId.id === id;
    })
  }

  return (
    <Switch>
      <Route 
        exact path='/'
        render={()=> (<PaletteList palettes={seedColors}/>)}/>
      <Route 
        exact path="/palette/:id" 
        render={props=> (<Palette palette={generatePalettes(findId(props.match.params.id))}/>)}/>
    </Switch>

    // <div>
    //   {/* <Palette palette={generatePalettes(seedColors[4])} /> */}
    // </div>
  );
}

export default App;
