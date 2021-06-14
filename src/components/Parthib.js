import React from "react";



const Parthib = () => {

    const year = new Date().getFullYear();

    return(
        
        <div align="center">
        <p>
          &copy; {year} Parthib Sarkar
          <a rel="noreferrer"href="https://github.com/lucy2512/Disney-Plus-clone" target="_blank"> | GitHub</a>
          <a rel="noreferrer" href="https://www.linkedin.com/in/parthib-sarkar-05855b1a1/" target="_blank"> | LinkedIn</a>
        </p>
      </div>
         );
};

export default Parthib;