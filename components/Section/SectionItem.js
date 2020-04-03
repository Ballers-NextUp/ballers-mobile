import React from 'react'
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

const StyledSectionItem = styled.TouchableHighlight`
  padding: 20px;
  ${({ first }) =>
    !first &&
    `
      border-top-width: 1px;
      border-top-color: #eee;
    `}
`

const StyledSectionItemContainer = styled.View`
  position: relative;
  flex-direction: row;
`

const StyledSectionItemContent = styled.View`
  margin-left: 16px;
`

const StyledSectionItemContentText = styled.Text`
  font-size: 16px;
  color: ${({ color }) => color || '#666'};
`

const StyledSectionRightIcon = styled.View`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  align-items: center;
  justify-content: center;
`

const SectionItem = ({
  text,
  textColor,
  iconName,
  children,
  first,
  hideRightIcon,
  ...rest
}) => {
  return (
    <StyledSectionItem underlayColor="#eee" first={first} {...rest}>
      <StyledSectionItemContainer>
        {children || (
          <>
            <Feather name={iconName} size={20} color="#666" />
            <StyledSectionItemContent>
              <StyledSectionItemContentText color={textColor}>
                {text}
              </StyledSectionItemContentText>
            </StyledSectionItemContent>
          </>
        )}
        {!hideRightIcon && (
          <StyledSectionRightIcon>
            <Feather name="chevron-right" size={20} color="#999" />
          </StyledSectionRightIcon>
        )}
      </StyledSectionItemContainer>
    </StyledSectionItem>
  )
}

export default SectionItem
