import { HashRouter as Router, Routes, Route,} from 'react-router-dom';

import Homepage from './homepage/homepage'
import Errorpage from './errorpage/errorpage';
import Music from './music/music'
import Designs from './designs/designs';
import Contents from './contents/contents';
import Projects from './projects/projects';

import Privacy from './privacy/privacy';


const App = () => (

    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} /> {/* (/) means Default route */}
            <Route path="/home" element={<Homepage />} />
            <Route path="/music" element={<Music />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/contents" element={<Contents />} />
            <Route path="/projects" element={<Projects />} />


            <Route path="/privacy" element={<Privacy />} />


            <Route path="*" element={<Errorpage />} /> {/* (*) means any other pages that are no in this pages list */}

        </Routes>
    </Router>

    );    
export default App;
                