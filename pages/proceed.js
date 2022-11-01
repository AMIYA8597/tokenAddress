import * as ReactDOM from "react-dom";
const home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = e.target.approve.value;
    const submit = e.target.submit.value;

    console.log("Token : " + token, "\n");
    console.log("Submit : " + submit, "\n");
  };

  // function form() {
  //   const{register, handleSubmit, error } = useForm({
  //     resolver: yupResolver(token),
  //   }); 
  // }
  // const submitForm =(data) =>{};

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label for="token address">Name:</label>
          <input type="text" id="Name" name="approve"></input>
          <button type="proceed" className="proceed-btn">
            approve
          </button>
        </div>
        <div>
          <label for="token address">Name:</label>
          <input type="text" id="Name" name="submit"></input>
          <button type="proceed" className="proceed-btn">
            submit
          </button>
        </div>
      
    </form>
  );
};

export default home;

//  import React from "react";

// function App1() {
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     const Lock=e.target.lock1.value;
//     const Time=e.target.time1.value;
//     console.log("Amount to lock : " +Lock,"\n","Liquidity unlock time : " +Time);
//   }
//         return (
//             <div className="app">
//             <form onSubmit={handleSubmit}>
//               <div className="input-group">
//                 <label htmlFor="Lock">Amount to lock</label>
//                 <input type="text" id="Amount to lock" name="lock1"/>
//               </div>
//               <div className="input-group">
//                 <label htmlFor="time">Liquidity unlock time</label>
//                 <input type="text" id="Liquidity unlock time" name="time1"/>
//               </div>
//               <button type="submit" className="submit-btn">
//                 Submit
//               </button>
//               <button type="approave" className="approave-btn">

//                 Approave
//               </button>
//             </form>
//           </div>
//         );
//         }

// export default App1;

// import React from 'react'

// const proceed = () => {
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         const token=e.target.tokeninfo.value;

//         console.log("Token : " +token,"\n");
//       }
//   return (
//     <form onSubmit={handleSubmit}>
//     <div>

//             <label for="approve">amount to unlock:</label>
//       <input type="text" id="approve" name="approve"></input>
//       <button type="proceed" className="proceed-btn">
//                 Proceed
//               </button>

//       <label for="submit">liquidity:</label>
//       <input type="text" id="submit" name="submit"></input>

//       {/* <button type="button">proceed</button> */}
//       {/* <div className="button">proceed</div> */}
//       <button type="proceed" className="proceed-btn">
//                 Proceed
//               </button>

//     </div>
//     <form/>

//   );
// }

//  export default proceed
