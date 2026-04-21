import React,{useState, useEffect} from "react";

const Parsent = () => {
    const [width, setWidth]= useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setWidth(85)
        }, 100)
    },[])
  return (
    <>
      <div>
        <div className="bg-[#f5f6fa] w-[88%] h-3 rounded-2xl absolute"></div>
        <div className="bg-orange-600 w-[85%] h-3 rounded-2xl relative -mt-3 transition-all duration-2000" style={{width: `${width}%`}}></div>
      </div>
      <div>
        <div className="w-full h-[1px] bg-black mt-5"></div>
      </div>
      <div className="w-20 h-2 bg-orange-600 mt-5 rounded-2xl"></div>
    </>
  );
};

export default parsent;
