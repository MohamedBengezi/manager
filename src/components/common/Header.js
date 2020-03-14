//Import Libraries
import React from 'react';
import { Text, View } from 'react-native';

//Create component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
    );
};

//Styling
const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    }
};
//Let other components use the new component
export { Header };
/*
Notes:

FlexBox:
- justifyContent: moves elements vertically
    - 'flex-end' will push element to the bottom
    - 'center' will push elements to the center
    - 'flex-start' will keep elements at the top

- alignItems: moves elements horizontally
    - 'flex-end' will push element to the left
    - 'center' will push elements to the center
    - 'flex-start' will keep elements to the right
*/
