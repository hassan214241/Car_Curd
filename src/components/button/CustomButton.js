import { Button } from 'react-native'
import React from 'react'
import { COLORS } from "../../assests/colors/Colors";

const CustomButton = ({
    title,
    press,
    btnColor,
}) => {
    return (
        <Button
            title={title ? title : "Press me"}
            // onPress={press ? press : () => Alert.alert('Simple Button pressed')}
            color={btnColor ? btnColor : COLORS.white}
        />
    )
}

export default CustomButton