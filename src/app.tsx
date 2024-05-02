import Header from "./components/header/header";
import Home from "./pages/home";

function App() {
    return (
        <div className="main-wrapper">
            <Header />
            <div className="content-wrapper">
                <Home />
            </div>
        </div>
    );
}

export default App;
