import React, { useState } from 'react'

export const Search = () => {
  /**************************************************************************** */
  /********************************{Form Data}********************************* */
  /**************************************************************************** */
  const [searchQuery, setSearchQuery] = useState("");
  
  /********************************{Search Filter}********************************* */
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  // searchFilter = {genre, country, year, rating}  Example scenrio
  const [searchFilter, setSearchFilter] = useState("");
  
  return<div>Search Screen</div>;
}