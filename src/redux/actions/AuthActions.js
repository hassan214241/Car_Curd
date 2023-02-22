import axios from 'axios';
import {endPoint} from '../../config/EndPoint';
import {LOGIN, LOGOUT, ACTIVE_USER} from '../types/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {
  getToken,
  storeToken,
  storeName,
} from '../../constant/localStorage/LocalStorage';
// Login Function
export const doLogin =
  (email, password, remember, setLoading, setErr) => async dispatch => {
    try {
      setLoading(true);
      let data = {
        email: email,
        password: password,
      };
      let user = await AsyncStorage.getItem('user');
      //   let user = await JSON.parse(AsyncStorage.getItem('user'));

      console.log('user -=-=', user);
      let users = JSON.parse(user);
      console.log('parse users===', users);

      if (users.Email == email && users.Passworrd == password) {
        dispatch({
          type: LOGIN,
          payload: users,
        });
      } else {
        alert('invalid email and password!');
      }

      //   dispatch({
      //     type: LOGIN,
      //     payload: user,
      //   });
    } catch (error) {
      console.log('Error: ', error.data);
      alert(JSON.stringify('Please Try again Later...'));
    } finally {
      setLoading(false);
    }
  };
export const doSignup = (data, setLoading, setSuccess) => async dispatch => {
  try {
    setLoading(true);
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('user', jsonValue);
  } catch (error) {
    console.log('Error at Signup: ', error);
    alert(JSON.stringify('Please Try again Later...'));
  } finally {
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setTimeout(() => {
      setSuccess(true);
    }, 1500);
  }
};

export const doLogout = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('user');

    dispatch({
      type: LOGOUT,
      payload: null,
    });
  } catch (error) {
    Alert.alert('Please Try again later...');
  }
};

export const doGetLoggedInUser = setLoading => async dispatch => {
  try {
    setLoading(true);
    let {user_id} = await getToken();
    let user = await AsyncStorage.getItem('user');
    if (user) {
      dispatch({
        type: ACTIVE_USER,
        payload: user,
      });
    }
    return user;
  } catch (error) {
    console.log('Get Logged In:', error);
  } finally {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
};
