import React, { useContext, useState } from "react";
import globalContext from "../context/GlobalState";
import placeholder from "../assets/images/placeholder-1-600x379.png";

function ItemCard({ item }) {
  const { addToFav, favourite } = useContext(globalContext);

  const validateAndGetYear = (date) => {
    return typeof date == "string" ? date.slice(0, 4) : date;
  };
  // const checkMediaInList =(sourceItem)=>{
  // return  favourite.some(item=> sourceItem.id==item.id)
  // }
  let checkAvailable = favourite.find((srcitem) => srcitem.id === item.id);
  let val = checkAvailable ? true : false;
  return (
    <div className="w-full relative max-w-2xl md:max-w-[18rem] text-white flex flex-col rounded-2xl overflow-hidden">
      <div>
        <img
          className=" aspect-video object-cover w-full "
          src={
            `https://image.tmdb.org/t/p/original/${item.backdrop_path}` ||
            placeholder
          }
          alt=""
        />
      </div>
      <div className="absolute bottom-2 left-4  inset-x-0 ">
        <p className="text-xl">{item.original_title || item.name}</p>

        <p className="text-md font-semibold">
          {validateAndGetYear(item.first_air_date) ||
            validateAndGetYear(item.release_date)}
        </p>
      </div>

      <button   disabled={val}  className={` absolute w-fit py-2 px-4 rounded-md cursor-pointer disabled:cursor-not-allowed  ${val? ' bg-slate-400' : 'bg-blue-700'} ` }  onClick={()=>addToFav(item)} >add to favourites</button>
    </div>
  );
}

// {typeof item.first_air_date =='string'?getYear(item.first_air_date):item.first_air_date||typeof item.release_date =='string'?getYear(item.release_date):item.release_date}

export default ItemCard;
