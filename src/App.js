// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home'
// import ComingSoon from './pages/ComingSoon'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={ <Home /> } /> { Home }
//         <Route path="/coming-soon" element={ <ComingSoon /> } /> { ComingSoon }
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Update the import path based on your structure
import ComingSoon from './pages/ComingSoon'; // Update the import path based on your structure
import AudiobookPortal from './components/AudiobookPortal'; // Placeholder for your portals
import LibraryPortal from './components/LibraryPortal'; // Placeholder for your portals
import WorkshopPortal from './components/WorkshopPortal'; // Placeholder for your portals
import CreativeWritingPortal from './components/CreativeWritingPortal'; // Placeholder for your portals
import Header from './common/Header'; // Import your header
import Footer from './common/Footer'; // Import your footer

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/audiobook-portal" element={<AudiobookPortal />} />
        <Route path="/library-portal" element={<LibraryPortal />} />
        <Route path="/workshop-portal" element={<WorkshopPortal />} />
        <Route path="/creative-writing" element={<CreativeWritingPortal />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
