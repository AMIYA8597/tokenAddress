// import Web3 from "web3";
import React from "react";
// import { abi } from '../abi.json';
import { useState } from "react";
// const web3 = require ('web3')


import { ethers } from "ethers";


function App() {
 const [tokenAddress,setTokenAddress] = useState();
 console.log(tokenAddress);
  const handleSubmit=(e)=>{
    e.preventDefault();
    const token=e.target.tokeninfo.value;
  
    console.log("Token : " +token,"\n");
  }
  const handleChange=async()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    try{
      
      // const tokenContract = new Web3.eth.Contract(abi, );
      // const symbol = await tokenContract.methods.symbol().call();
      // const name = await tokenContract.methods.name().call();
      // if(symbol ){
      //   console.log('valid');
      // }
      // else
      // {
      //   console.log('not valid');
      // }
    }
    catch(err){
      console.log(err);

    }
  }
  
        
        return (
            <div className="Homepage">
            <h1>
                Hello Homepage
            </h1>
            <form onSubmit={handleSubmit} >
              <div className="input-group">
                <label htmlFor="token">tokeninfo</label>
                <input type="text" value = {tokenAddress} id="tokeninfo" onChange={(e)=>setTokenAddress(e.target.value)}  />
                
              </div>
              <button type="proceed" className="proceed-btn" >
                Proceed
              </button>
            </form>
            
          </div>
          
        );
        }
        
    

export default App;




// import * as ReactDOM from 'react-dom';
// const home = () => {
// const handleSubmit=(e)=>{
//     e.preventDefault();
//     const token=e.target.tokeninfo.value;
  
//     console.log("Token : " +token,"\n");
//   }
//     return (
//         <form onSubmit={handleSubmit}>
//       <div>
//         <label for="token address">Name:</label>
//         <input type="text" id="Name" name="tokeninfo"></input>
//         <button type="proceed" className="proceed-btn">
//                 home
//               </button>

//       </div>
//       </form>
//     )
//   }
  
//   export default home