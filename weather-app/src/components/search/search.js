import React, { useState } from 'react'
import {AsyncPaginate} from "react-select-async-paginate";
import { GEO_API_URL } from '../api';
import { geoApiOptions } from '../api';

const Search = ({onSearchChange}) => {
    const[Search,setSearch]= useState(null);

    const loadOptions= async (inputValue) =>{
        return fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
        geoApiOptions
                )  
         
        
        .then((response)=> response.json())
        .then((response)=> {
            return{
                options:response.data.map((city)=>{
                    return{
                        value: `${city.latitude}${city.logitude}`,
                        label: `${city.name}${city.countryCode}`,
                    }
                })
            }
        })
        .catch((err)=> console.error(err))
        // try {
        //         const response = await fetch(GEO_API_URL, geoApiOptions);
        //         const result = await response.text();
        //         console.log(result);
        //     } catch (error) {
        //         console.error(error);
        //     }
        
    };
    
    const handleOnChange= (searchData)=> {
        setSearch(searchData);
        onSearchChange(searchData);
    } 

    return (
    <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={Search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
    />
   
  )
    }
export default Search;