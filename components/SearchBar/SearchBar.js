import React, { useState } from 'react'
import styled from 'styled-components/native'

const StyledSearchBar = styled.View`
  position: absolute;
  width: 100%;
  top: 80px;
  padding-horizontal: 32px;
  z-index: 2;
`

const StyledSearchInput = styled.TextInput`
  width: 100%;
  height: 54px;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;
  shadow-color: #000;
  shadow-offset: 0 8px;
  shadow-opacity: 0.15;
  shadow-radius: 10px;
  elevation: 24px;
`

const SearchBar = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value || '')

  const handleChange = (event) => {
    setInputValue(event.target)
    if (onChange) onChange()
  }

  return (
    <StyledSearchBar>
      <StyledSearchInput value={inputValue} onChangeText={handleChange} />
    </StyledSearchBar>
  )
}

export default SearchBar
