/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Dropdown as DropdownRN} from 'react-native-element-dropdown';
import {DropdownStyleSheet} from './styles';
import {View} from 'react-native';

export type TData = {
  label: string;
  value: string;
};

export interface IDropdown {
  data: Array<TData>;
  value: string | null;
  setValue: any;
}

export const Dropdown = ({data, value, setValue}: IDropdown) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={DropdownStyleSheet.container}>
      <DropdownRN
        style={[DropdownStyleSheet.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={DropdownStyleSheet.placeholderStyle}
        selectedTextStyle={DropdownStyleSheet.selectedTextStyle}
        inputSearchStyle={DropdownStyleSheet.inputSearchStyle}
        iconStyle={DropdownStyleSheet.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: any) => {
          setValue(item?.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};
