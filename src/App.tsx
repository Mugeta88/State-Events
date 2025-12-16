import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <CharacterCounter minWords={25} maxWords={100} targetReadingTime={1} />
    </div>
  );
}

export default App;