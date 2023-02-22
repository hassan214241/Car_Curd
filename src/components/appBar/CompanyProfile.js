import { View, Image, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import AppBar from './AppBar'
import { LOGOIMG } from '../../constant/Icons'
import { Text } from '../text/Text'
import { theme } from '../../theming'
import { SETUP_CUSTOM_DATA } from '../../constant/CustomData/CustomData'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Touchable } from '../Touchable/Touchable'


export default function CompanyProfile(props) {
    const { cardId } = props
    
  const CustomCard = ({ singleCard }) => {
    return (
      <>
        <Touchable>
          <View style={singleCard.id === cardId ? Styles.cardDiv : Styles.cardDivStatus} key={singleCard?.id}>
            <FontAwesome name={singleCard?.icon} size={25} color={singleCard.id === cardId ? theme.colors?.white : theme.colors?.lightGrey} />
            <Text style={singleCard.id === cardId ? Styles.cardTxt : Styles.cardTxtStatus}>
              {singleCard?.text}
            </Text>
          </View>
        </Touchable>
      </>
    )
  }

    return (
        <>
            <AppBar />
            <View style={Styles.mainContainerTop}>
                <View>
                    <Image source={LOGOIMG} style={Styles.logoImgStyle} />
                </View>

                <View>
                    <Text style={Styles.mainHeading}>
                        {"Setup Your Account"}
                    </Text>
                    <Text style={Styles.secHeading}>
                        {'"THE FASTEST WAY TO REACH YOUR FITNESS GOAL GUARANTEED!"'}
                    </Text>
                </View>
                <View
                    style={Styles.cardContainer}
                >
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        horizontal={true}
                        data={SETUP_CUSTOM_DATA?.cards}
                        renderItem={({ item }) => <CustomCard singleCard={item} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </>
    )
}


const Styles = StyleSheet.create({
    mainContainerTop: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        paddingTop: 30,
        paddingBottom: 20,
    },
    logoImgStyle: {
        height: 180,
        width: 150,
    },
    mainHeading: {
        fontSize: 28,
        color: theme.colors.white,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 5
    },
    secHeading: {
        fontSize: 12,
        color: theme.colors.white,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 5
    },
    cardContainer: {
        alignContent: 'center',
        width: '100%',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardDiv: {
        borderColor: theme.colors.white,
        borderWidth: 2,
        height: 75,
        width: 80,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 1,
        marginTop: 10,
    },
    cardDivStatus: {
        backgroundColor: theme.colors.white,
        height: 75,
        width: 80,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 1,
        marginTop: 10,
    },
    cardTxt: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: '500',
        color: theme.colors.white,
        marginTop: 4
    },
    cardTxtStatus: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 4,
        color: theme.colors.lightGrey
    },
})