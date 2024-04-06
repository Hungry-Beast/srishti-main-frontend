import React from "react";

const LoaderComponent = () => {
  return (
    <div className="Loaderbody Loadercontainer">
      <div id="loader">
        <div id="title" className="flex">
          <p className="loading-text font-potra" style={{marginTop: 50}}>LOADING</p>
          <div className="therefore" style={{marginTop: 40}}>∴</div>
          <p className="loading-number">%</p>
        </div>
       
        <div id="loading-bar-border">
          <div className="loading-bar"></div>
        </div>
        <div id="warning px-2">
          <p>
            <div className="exclamation font-potra">
              &nbsp; CAUTION, Do not turn off.
            </div>
          </p>
          <div id="line-cascates"></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderComponent;
