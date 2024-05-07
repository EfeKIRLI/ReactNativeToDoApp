import React from 'react'
import { useEffect, useRef, useState } from "react";
import style from '../SearchBar/style';
import { Pressable, TextInput,Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const SearchBar = () => {
  // const textInputRef = useRef(null)
  const [search, setSearch] = useState('');


//   const handleFocus = () => {
//     textInputRef.current.focus()
// }

// const handleSearch = (searchValue) => { 
//     setSearch(searchValue);
//     onSearch(searchValue);
// }
  return (
    <Pressable style={style.searchInputContainer} 
    // onPress={() => handleFocus()} 
    >
    <FontAwesome name={'search'} size={15} color={'#DFBD43'} />
    <TextInput 
    placeholder="Search"
    style={style.searchInput}
    value={search}
    onChangeText={setSearch}
    // ref={textInputRef} 
    
    />
</Pressable>
  )
  console.log(search)
}

export default SearchBar


{/* <Pressable style={style.searchInputContainer} onPress={() => handleFocus()} >
<FontAwesome name={'search'} size={15} color={'#DFBD43'} />
<TextInput 
placeholder="Search"
ref={textInputRef} 
style={style.searchInput}
value={search}
onChangeText={(val) => handleSearch(val)}
/>
</Pressable> */}

