import React, { useState } from "react";
import howToUseApp from "./API/howToUse.js";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/hero2.jpg" alt="aboutusIMg" />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App?</h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of bayt us section  */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGES</h3>
              <h1 className="main-heading">
                World class support is <br /> available 24/7
              </h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img src="./images/call.jpg" alt="aboutusIMg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Aboutus;

// import React from 'react'
// const Aboutus = () => {
//     return (
//         <>
//             <section className="common-section our-services">
//                 <div className="container ">
//                     <div className="row">
//                         <div className="col-4 text-center our-services-leftside-img">
//                             <img src="./images/hero2.jpeg" alt="aboutusImg" />
//                         </div>
//                         <div className="col-8 text-center our-services-leftside-img work-complete">
//                             <h2 className='mt-4 minitext'> --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h2>
//                             <h3 className="minititle">How to use the App?</h3>
            
//                                 <h4 className="btntext">sign in</h4>
//                             <p className="main-hero-para ms-5">
//                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                             </p>
//                             <h4 className="btntext">add your bank account </h4>

//                             <p className="main-hero-para ms-5">
//                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                             </p>
//                             <h4 className="btntext">send payment request </h4>
//                             <p className="main-hero-para ms-5">
//                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//                             </p>
//                             <button className="btn-style btn-style-border">learn more</button>
//                         </div>
//                         {/* 1section right side data */}
//                         {/* <div classname="col-12 our-services-list">
//                             <h3 className="mini-title">
//                                 --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
//                             </h3>
//                             <h1 classname="main-heading">How to use the App?</h1>
//                             <div className="row our-services-info">
//                                 <div className="col-3 our-services-number">1
//                                     <div className="col-9 our-services-data">
//                                         <h2>Sign in</h2>
//                                         <p className="main-hero-para">
//                                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <br />
//                             <button className="btn-style btn-style-border">learn more</button>
//                         </div> */}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };
// export default Aboutus