import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { View } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import moment from 'moment'

const StyledTextInput = styled.TextInput`
  padding: 8px 4px;
  font-size: 16px;
  border-bottom-width: ${(props) => props.border.width};
  border-style: solid
  border-bottom-color: ${(props) => props.border.color};
`

const StyledDatepickerButton = styled.TouchableOpacity`
  padding: 8px 4px;
  text-align: left;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`

const StyledDatepickerButtonText = styled.Text`
  font-size: 16px;
`

const Input = ({
  value,
  name,
  onChange,
  onBlur,
  onFocus,
  hasDatePicker,
  datePickerMode,
  multiline,
  ...rest
}) => {
  const [inputValue, onChangeText] = useState(value)
  const [datePickerVisibility, setDatePickerVisibility] = useState(false)
  const [border, setBorder] = useState({ color: '#ddd', width: '1px' })

  const handleFocus = () => {
    setBorder({ width: '2px', color: '#4285f4' })
    if (onFocus) onFocus()
  }

  const handleBlur = () => {
    setBorder({ width: '1px', color: '#ddd' })
    if (onBlur) onBlur()
  }

  const handleChange = (text) => {
    onChangeText(text)
    if (onChange) onChange(name, text)
  }

  const hideDatepicker = () => {
    setDatePickerVisibility(false)
  }

  const showDatepicker = () => {
    setDatePickerVisibility(true)
  }

  const handleDate = (datetime) => {
    onChangeText(datetime)
    hideDatepicker()
  }

  const formatDateValue = (date) => {
    const momentDate = moment(new Date(date))
    const modes = {
      date: momentDate.format('L'),
      time: momentDate.format('LT'),
      datetime: momentDate.format('LLL'),
    }

    return modes[datePickerMode]
  }

  useEffect(() => {
    onChangeText(value)
  }, [value])

  return (
    <View>
      {!hasDatePicker ? (
        <StyledTextInput
          value={
            hasDatePicker &&
            inputValue instanceof Date &&
            formatDateValue(inputValue)
          }
          onFocus={handleFocus}
          onBlur={handleBlur}
          border={border}
          onChangeText={handleChange}
          editable={!hasDatePicker}
          multiline={multiline}
          {...rest}
        />
      ) : (
        <>
          <StyledDatepickerButton onPress={showDatepicker}>
            <StyledDatepickerButtonText border={border}>
              {formatDateValue(inputValue)}
            </StyledDatepickerButtonText>
          </StyledDatepickerButton>
          <DateTimePickerModal
            mode={datePickerMode}
            date={new Date(inputValue)}
            onConfirm={handleDate}
            onCancel={hideDatepicker}
            isVisible={datePickerVisibility}
            isDarkModeEnabled
          />
        </>
      )}
    </View>
  )
}

export default Input
