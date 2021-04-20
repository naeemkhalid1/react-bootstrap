import { render } from '@testing-library/react';
import React from 'react';
import './pagination.css';
const Pagination=({postsPerPage,totalPosts,paginate,})=>{
    const pageNumbers=[];
        for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++)
    {
        pageNumbers.push(i);
    }
    return(
            
        <div>
             <nav>
               <ul className="pagnation">
                    {pageNumbers.map(number=>(
                        <li key={number} className="pageNumber">
                           <a onClick={()=>paginate(number)}  href='#' className="link"> {number}</a>
                           {/* {console.log("number",number)} */}
                        </li>
                    ))}
                 </ul>
                 </nav>
           
        </div>
    );
    }
    // console.log("function",tempvar);
    // var temp=Math.ceil(totalPosts/postsPerPage);
   
   
 

export default Pagination;