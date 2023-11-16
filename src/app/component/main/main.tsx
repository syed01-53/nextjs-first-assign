import Image from "next/image";

const Main = () => {
    return (
      <div className="grid grid-cols-1    text-green-900" >
       <div className="row-span-1 text-2xl ">
        <h1>Certified Web 3.0 and Metaverse Developer:<br/> A Nationwide Program in Karachi, Lahore,<br/> Islamabad, and Peshawar</h1>
       </div>
       <div className="row-span-1  ">
             <div >
                {/* <Image src='./panavers.png' width={300} height={200}/> */}
          {['panavers'].map((path)=>{
            return(
                    <div key={path} className="flex justify-center items-center ">
                          <Image src={ `/${path}.png`} alt="logo photo"  height={200} width={523}/>
                    </div>
            );
          })}

           
             </div>

           
       </div>
       <div className="row-span-1 ">
        <p className="w-85 text-xl  flex justify-center items-center ">
        The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
        </p>
              
             </div>
      </div>
    );
  };
  
  export default Main;
