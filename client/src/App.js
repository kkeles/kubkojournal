import './App.css';
import FoodEntry from './components/FoodEntry';
import WalkEntry from './components/WalkEntry.jsx';
import FoodStatus from './components/FoodStatus.jsx';
import WalkStatus from './components/WalkStatus.jsx';
import Landing from './components/Landing.jsx';

export default function App() {
	return (
		<div className="App">
			<Landing />
			<div className="Stats">
				<WalkStatus />
				<FoodStatus />
			</div>
			<div className="Entries">
				<WalkEntry />
				<FoodEntry />
			</div>
		</div>
	);
}
