import { useWindowSize } from '@custom-react-hooks/use-window-size';
import { useState } from 'react';
import { useEffect } from 'react';
import Result from './Result';

import { useAddress } from './contexts/Addresscontext';



// to indicate the different screen size
const largeScreen = '/images/pattern-bg-desktop.png';
const smallScreen = '/images/pattern-bg-mobile.png';

function Hero() {
    const{getLocation,position,error} = useAddress()
    const [img, setImg] = useState(largeScreen);
    const { width } = useWindowSize(); // to get the width of the screen

    const [value, setValue] = useState(' ');

    useEffect(() => {
        if (width <= 900) {
            setImg(smallScreen);
        } else {
            setImg(largeScreen);
        }
    }, [width]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!value) return;

        getLocation({value});
    }
    
  

    return (
        <div>
           
           <img src={img} alt="main" className="absolute w-full" />

<div className="relative flex flex-col items-center justify-center py-6 font-RubiK">
    <h3 className="py-3 text-2xl font-semibold text-white">
        IP ADDRESS TRACKER
    </h3>
    <div className="flex flex-col items-center gap-3 lg:gap-12">
        <form className="flex flex-col items-center gap-2">
           <div className='flex '>
           <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                required
                value={value}
                placeholder="Search for any IP address or domain"
                className="h-14 min-w-[250px] rounded-bl-md rounded-tl-md px-2 outline-none md:h-10 md:min-w-[400px] md:px-5"
            />
            <button
                className="flex h-14 w-14 items-center justify-center rounded-br-md rounded-tr-md bg-black md:h-10 md:w-10"
                onClick={(e) => handleSubmit(e)}
            >
                <img src="/images/icon-arrow.svg" alt="arrow" />
            </button>
           </div>
            {error && <p className='rounded-md bg-red-100 p-2 text-xs text-red-700'>{error}</p>}
        </form>
       
       {position && !error &&  <Result/>}
    </div>
    
</div>

           </div>
          
           
        
    );
}

export default Hero;
