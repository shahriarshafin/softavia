import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Features />
		</div>
	);
}

export default App;
