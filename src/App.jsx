
import { useAddress } from './contexts/Addresscontext';
import Hero from './Hero';
import Loader from './Loader';

import Map from './Map';


function App() {
    
const {isLoading} = useAddress();

    return (
        <div className="h-[100dvh]  grid grid-rows-[200px_auto] md:grid-rows-[170px_auto] lg:grid-rows-[198px_auto]">
            <Hero />
            <Map/>
            {isLoading && <Loader />}
        </div>
    );
}

export default App;
