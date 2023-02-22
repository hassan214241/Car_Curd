import AsyncStorage  from '@react-native-async-storage/async-storage';

const storeToken = async (value) => {
    if (value) {
      await AsyncStorage.setItem('user_id', value)
    }
  }

  const storeName = async (value) => {
    if (value) {
      await AsyncStorage.setItem('user_name', value)
    }
  }
  
  const getToken = async () => {
    let user_id = await AsyncStorage.getItem('user_id')
    return { user_id }
  }
  
  const removeToken = async () => {
    await AsyncStorage.removeItem('user_id')
  }
  
  export { storeToken, getToken, removeToken, storeName }