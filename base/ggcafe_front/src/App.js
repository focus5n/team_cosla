// Libraries
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from '../node_modules/react-router-dom/index';

// Header, Footer
import Footer from './components/Footer';
import Header from './components/Header';

// Components
import ExpertsList from './components/ExpertsList';
import CreateExperts from './components/CreateExperts';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="App-Container">
          <Routes>
            {/* <Route path="/" exact element={<Home />}></Route> */}
            <Route path="/experts" element={<ExpertsList />}>
              {/* <Route path=":id" element={<Expert />} /> */}
            </Route>
            <Route path="/write-experts" element={<CreateExperts />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
