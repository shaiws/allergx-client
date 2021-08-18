import React, { useState } from 'react';
import { FlatList, Divider, View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
function CheckBoxList(props) {
  const [checked, setChecked] = useState(false);
  return (
    <FlatList
      data={props.list}
      keyExtractor={(item, index) => index.toString()}
      renderItem={(item) => {
        return (
          <View style={{ flexDirection: 'row' }}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text>{item.item.name}</Text>

          </View>
        )
      }}
    />
  );
}

export default CheckBoxList;
