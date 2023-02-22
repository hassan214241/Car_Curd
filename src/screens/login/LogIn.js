import { ActivityIndicator, Image, ImageBackground, ScrollView, StatusBar, View } from 'react-native'
import React from 'react'
import { Screen } from '../../components/screen/Screen'
import { Text } from '../../components/text/Text'
import { TextInput } from '../../components/textInput/TextInput'
import { Touchable } from '../../components/Touchable/Touchable'
import { styles } from './LoginStyle'
import { LOGIN_BG, LOGO } from '../../constant/Icons'
import { theme } from '../../theming'
import CustomCheckbox from '../../components/checkbox/CustomCheckbox'
import Icon from 'react-native-vector-icons/FontAwesome';
import { UseLogin } from './UseLogin'


const LogIn = ({ navigation }) => {
  const [{
    values,
    loading,
    remeber,
    err,
    setErr,
    setRemember,
    handleChange,
    loginHandler,
  }] = UseLogin()
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <ImageBackground source={LOGIN_BG} resizeMode="cover" style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.screen}
        >
          <View style={styles.loginBox}>
            <Image source={LOGO} resizeMode='cover' style={styles.logo} />
            
            {err && <View style={styles.errView}>
              <Text color='error' size={12} weight={'regular'} >Email or Password is Invalid!</Text>
              <Touchable onPress={()=> setErr(false)}>
                <Icon name="close" size={16} color="#495057" />
              </Touchable>
            </View>}
            <View style={{ alignItems: 'flex-start', width: '100%' }}>
              <Text color='primary' size={16} weight={'bold'} >Login To Your Account</Text>
              <TextInput
                placeholder="Email Or User ID"
                placeholderTextColor={theme.colors.lightGrey}
                autoCapitalize="none"
                autoCorrect={false}
                value={values.email}
                onChangeText={handleChange('email')}
                containerStyle={styles.textInput}
                style={[
                  styles.textInputText,
                ]}
                textContentType="username"
                autoComplete="email"
                returnKeyType="next"
                after={
                  <Icon name="envelope" size={22} color="#495057" />
                }
              />
              {values.inputErr !== "" && (values.inputId === 1 || values.inputId === 3) && <Text size={12} color={'error'} weight={'normal'}> {values.inputErr}</Text>}
              <TextInput
                placeholder="***********"
                placeholderTextColor={theme.colors.lightGrey}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                value={values.password}
                onChangeText={handleChange('password')}
                containerStyle={styles.textInput}
                style={[
                  styles.textInputText,
                ]}
                textContentType="password"
                autoComplete="password"
                returnKeyType="done"
                returnKeyLabel="Login"
                enablesReturnKeyAutomatically={true}
                after={
                  <Icon name="lock" size={26} color="#495057" />
                }
              />
              {values.inputErr !== "" && (values.inputId === 2) && <Text size={12} color={'error'} weight={'normal'}> {values.inputErr}</Text>}
              <View style={styles.forgotPass}>
                <CustomCheckbox check={remeber} setCheck={setRemember} label={'Remember'} />
                <Touchable>
                  <Text size={15} weight={'medium'} color="lightGrey">Forgot Password?</Text>
                </Touchable>
              </View>
            </View>
            <Touchable style={styles.loginBtn} onPress={() => loginHandler()}>
              {
                loading ?
                  <ActivityIndicator size="small" color="#fff" />
                  :
                  <Text style={styles.loginBtnText}>Login</Text>
                }
            </Touchable>

            <Text color='primary' size={16} weight='medium' style={styles.orText}>OR</Text>

            <Touchable style={styles.registerBtn} onPress={() => navigation.navigate('signup')}>
              <Text style={styles.registerBtnText}>Register</Text>
            </Touchable>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  )
}

export default LogIn