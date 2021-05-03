import Palette from './components/Palette';
import PaletteList from './components/PaletteList';
import SingleColorPalette from './components/SingleColorPalette';
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
        render={(props)=> (<Palette palette={generatePalettes(findId(props.match.params.id))}/>)}/>

        <Route exact path="/palette/:paletteId/:colorId"
        render={(props)=>(<SingleColorPalette colorId={props.match.params.colorId} palette={generatePalettes(findId(props.match.params.paletteId))}/>)}/>
    </Switch>

    // <div>
    //   {/* <Palette palette={generatePalettes(seedColors[4])} /> */}
    // </div>
  );
}

export default App;
