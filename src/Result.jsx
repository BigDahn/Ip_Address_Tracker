import { useAddress } from "./contexts/Addresscontext"



function Result() {
  const {Output} = useAddress()
 
  return (
    <div className="  px-12 border-white text-black bg-white z-[1000]  rounded-lg  shadow-xl  ">
        <div className="grid gap-6  text-center py-6 px-13 lg:px-20  font-RubiK  lg:flex  lg:py-6 lg:items-center lg:justify-evenly md:gap-12 lg:divide-x-2 ">
                <div>
                <h3 className="text-sm font-medium text-stone-500 uppercase">IP ADDRESS</h3>
                <p className="font-semibold text-lg">{Output.ip}</p>
                </div>
                <div className="lg:pl-10" >
                <h3  className="text-sm font-medium text-stone-500 uppercase">Location</h3>
                <p className="font-semibold text-lg">{Output?.location?.country}, {Output?.location?.region}, {Output?.location?.city}</p>
                </div>
                <div className="lg:pl-10">
                <h3  className="text-sm font-medium text-stone-500 uppercase">TimeZone</h3>
                <p className="font-semibold text-lg">UTC{Output?.location?.timezone}</p>
                </div>
                <div className="pl-0 lg:pl-10">
                <h3  className="text-sm font-medium text-stone-500 uppercase">ISP</h3>
                <p className="font-semibold text-lg">{Output?.isp || "SpaceX Starlink"}</p>
                </div>
        </div>
    </div>
  )
}

export default Result