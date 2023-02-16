import { Provider } from "react-redux";
import "./App.css";
import BookingPage from "./pages/Booking Page/BookingPage";
import { store } from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<BookingPage />
		</Provider>
	);
}

export default App;
