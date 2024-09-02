import React from 'react'

function Card(props){
    return(
        <div class="card bg-base-100 w-96 shadow-xl ">
        <figure>
          <img
            src={props.img}
            alt="Shoes" />
        </figure>
        <div class="card-body ml-3 mt-2 ">
        
            <h2>Brand: {props.brand}</h2>
         
          <h2 class="card-title"> Name: {props.name}</h2>
          <p> Description: {props.description}</p><br />
          <div class="card-actions justify-end">
            <p> Price: {props.price}</p><br />
            <button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Buy Now</button>

          </div>
        </div>
      </div>
    )
}

export default Card