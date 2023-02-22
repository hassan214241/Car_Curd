import { View } from 'react-native'
import React from 'react'
import { Screen } from '../../components/screen/Screen'
import { styles } from './DashboardStyle'
import { Text } from '../../components/text/Text'
import { Touchable } from '../../components/Touchable/Touchable'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_CAR } from '../../redux/types/Types'
import Store from '../../config/Store'
import { useNavigation } from '@react-navigation/native'
import AppBar from '../../components/appBar/AppBar'
export default function Dashboard() {

  const cars = useSelector(state => state.CardReducer.cars)
  const deleteHandler = (id)=> {
    Store.dispatch({ type: DELETE_CAR, payload: id })
  }
  const navigation = useNavigation()
  const editHandler = (item)=> {
    navigation.navigate('AddCar', {
      id: item.id,
      name: item.name,
      model: item.model,
      engine: item.engine,
      type: item.type
    })
  }
  return (
    <View style={styles.container}>
      <Screen
        scroll
        safeArea
        contentContainerStyle={styles.screen}
      >
        <AppBar />
        <Text size={22} color={'black'} weight={'medium'}>Welcome to Dashboard</Text>

        <View style={styles.cardConatiner}>
          {
            cars.map((item) => {
              return(
                <View style={styles.card} key={item.id}>
                  <Text color='black' size={20} weight={'regular'}>{item.name}</Text>
                  <Text color='black' size={14} weight={'regular'}>{item.engine}, {item.model}</Text>
                  <Text color='black' size={14} weight={'regular'}>{item.type}</Text>
                  <View style={styles.btnContainer}>
                    <Touchable style={styles.registerBtn} onPress={()=> editHandler(item)}>
                      <Text style={styles.registerBtnText}>Edit</Text>
                    </Touchable>
                    <Touchable style={styles.registerBtn} onPress={()=> deleteHandler(item.id)}>
                      <Text style={styles.registerBtnText}>Delete</Text>
                    </Touchable>
                  </View>
                </View>
              )
            })
          }
        </View>

      </Screen>
    </View>
  )
}