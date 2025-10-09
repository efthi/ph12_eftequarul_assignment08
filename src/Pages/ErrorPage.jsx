import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import errorimage from '../../public/assets/error-404.png';


const ErrorPage = () => {
  const error = useRouteError()
  console.error("Route error:", error);

  return (
    <>
      <Navbar />
      <div className='mx-auto flex justify-center'>
        <img src={errorimage} alt="" />
      </div>
      <div className='text-center m-5'>{error.message}</div>
      <Footer />
    </>
  )
}

export default ErrorPage

// import React from 'react';
// import { useRouteError } from 'react-router'; 


// const ErrorPage = () => {
//   const error = useRouteError();
//   console.error("Route error:", error);

//   // null-safe message
//   const status = error?.status || "";
//   const title = error?.statusText || error?.message || "Page not found";

//   return (
//     <>
 
//       <main style={{ padding: 24, textAlign: "center" }}>
//         <h1>Oops {status}</h1>
//         <p>{title}</p>

//         {/*  debug  */}
//         <details style={{ marginTop: 12, whiteSpace: "pre-wrap", textAlign: "left", display: "inline-block" }}>
//           <summary>Debug info</summary>
//           {JSON.stringify(error, null, 2)}
//         </details>
//       </main>

//     </>
//   );
// };

// export default ErrorPage;
