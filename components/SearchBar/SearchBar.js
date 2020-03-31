import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

const StyledSearchBarContainer = styled.View`
  position: absolute;
  width: 100%;
  top: 80px;
  padding-horizontal: 32px;
  z-index: 2;
`

const StyledSearchBar = styled.View`
  position: relative;
  width: 100%;
  height: 54px;
  background-color: #fff;
  border-radius: 6px;
  shadow-color: #000;
  shadow-offset: 0 8px;
  shadow-opacity: 0.15;
  shadow-radius: 10px;
  elevation: 24px;
`

const StyledSearchInput = styled.TextInput`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  padding-left: 48px;
  z-index: 1;
`

const StyledIconContainer = styled.View`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px;
  z-index: 1;
`

const SearchBar = ({ value, onChange, ...rest }) => {
  const [inputValue, setInputValue] = useState(value || '')

  const handleChange = (event) => {
    setInputValue(event.target)
    if (onChange) onChange()
  }

  return (
    <StyledSearchBarContainer>
      <StyledSearchBar>
        <StyledIconContainer>
          <Feather name="search" color="#999" size={20} />
        </StyledIconContainer>
        <StyledSearchInput
          value={inputValue}
          onChangeText={handleChange}
          {...rest}
        />
      </StyledSearchBar>
    </StyledSearchBarContainer>
  )
}

export default SearchBar
