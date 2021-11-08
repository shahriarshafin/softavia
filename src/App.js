import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter/Newsletter';
import Pricing from './components/Pricing/Pricing';

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Features />
			<Pricing />
			<Newsletter />
		</div>
	);
}

export default App;
