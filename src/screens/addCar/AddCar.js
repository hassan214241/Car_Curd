import { View } from 'react-native'
import React from 'react'
import { styles } from './AddCarStyle'
import { Text } from '../../components/text/Text'
import { Screen } from '../../components/screen/Screen'
import { useState } from 'react'
import { TextInput } from '../../components/textInput/TextInput'
import { theme } from '../../theming'
import { Touchable } from '../../components/Touchable/Touchable'
import Store from '../../config/Store'
import { ADD_CAR } from '../../redux/types/Types'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import AppBar from '../../components/appBar/AppBar'

export default function AddCar({ route }) {
    const param = route?.params;

    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()
    const [values, setValues] = useState({
        name: '',
        model: null,
        engine: '',
        type: '',
        inputErr: '',
        inputId: 0,
    });

    const handleChange = (prop) => (text) => {
        setValues({ ...values, [prop]: text });
    };

    const addHandler = () => {
        if (values.name === "" || values.name === undefined) {
            setValues({ ...values, inputErr: "Required", inputId: 1 });
        } else if (values.model === "" || values.model === undefined) {
            setValues({ ...values, inputErr: "Required", inputId: 2 });
        } else if (values.engine === "" || values.engine === undefined) {
            setValues({ ...values, inputErr: "Required", inputId: 3 });
        } else if (values.type === "" || values.type === undefined) {
            setValues({ ...values, inputErr: "Required", inputId: 4 });
        } else {
            setLoading(true)
            setValues({ ...values, inputErr: "", inputId: 0 });
            const data = {
                id: Math.floor(Math.random() * 100),
                name: values.name,
                model: values.model,
                engine: values.engine,
                type: values.type,
            }
            Store.dispatch({ type: ADD_CAR, payload: data })
            setTimeout(() => {
                setLoading(false)
                navigation.navigate("Dashboard")
            }, 1500)
        }
    }

    useEffect(() => {
        if (param) {
            setValues({
                ...values,
                name: param?.name,
                model: param?.model,
                engine: param?.engine,
                type: param?.type,
            });
        }
    }, [param])

    const updateHandler = () => {
        if (values.name === "" || values.name === undefined) {
            setValues({ ...values, inputErr: "Required", inputId: 1 });
        } else if (values.model === "" || values.model === undefined) {
            setValues({ ...values, inputErr: "Required", inputId: 2 });
        } else if (values.engine === "" || values.engine === undefined) {
            setValues({ ...values, inputErr: "Required", inputId: 3 });
        } else if (values.type === "" || values.type === undefined) {
            setValues({ ...values, inputErr: "Required", inputId: 4 });
        } else {
            setLoading(true)
            setValues({ inputErr: "", inputId: 0 });
            const data = {
                id: param.id,
                name: values.name,
                model: values.model,
                engine: values.engine,
                type: values.type,
            }
            Store.dispatch({ type: ADD_CAR, payload: data })
            setTimeout(() => {
                setLoading(false)
                navigation.navigate("Dashboard")
            }, 1500)
        }
    }

    return (
        <View style={styles.container}>
            <Screen
                scroll
                safeArea
                contentContainerStyle={styles.screen}
            >
                <AppBar />
                <Text size={22} color={'black'} weight={'medium'}>Add New Car</Text>
                <View style={{ alignItems: 'flex-start', width: '100%', marginTop: 10 }}>
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor={theme.colors.lightGrey}
                        autoCapitalize="none"
                        autoCorrect={false}
                        containerStyle={styles.textInput}
                        style={[
                            styles.textInputText,
                        ]}
                        textContentType="username"
                        returnKeyType="next"
                        value={values.name}
                        onChangeText={handleChange('name')}
                    />
                    {values.inputErr !== "" && (values.inputId === 1) && <Text size={12} color={'error'} weight={'normal'}> {values.inputErr}</Text>}
                    <TextInput
                        placeholder="Model"
                        placeholderTextColor={theme.colors.lightGrey}
                        autoCapitalize="none"
                        autoCorrect={false}
                        containerStyle={styles.textInput}
                        style={[
                            styles.textInputText,
                        ]}
                        textContentType="username"
                        returnKeyType="next"
                        value={values.model}
                        onChangeText={handleChange('model')}
                    // onBlur={() => generateUserId()}
                    />
                    {values.inputErr !== "" && (values.inputId === 2) && <Text size={12} color={'error'} weight={'normal'}> {values.inputErr}</Text>}
                    <TextInput
                        placeholder="Engine"
                        placeholderTextColor={theme.colors.lightGrey}
                        autoCapitalize="none"
                        autoCorrect={false}
                        containerStyle={[styles.textInput]}
                        style={[
                            styles.textInputText,
                        ]}
                        value={values.engine}
                        onChangeText={handleChange('engine')}
                    />
                    {values.inputErr !== "" && (values.inputId === 3) && <Text size={12} color={'error'} weight={'normal'}> {values.inputErr}</Text>}
                    <TextInput
                        placeholder={'Car type'}
                        placeholderTextColor={theme.colors.lightGrey}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={false}
                        containerStyle={styles.textInput}
                        style={[
                            styles.textInputText,
                        ]}
                        returnKeyType="done"
                        enablesReturnKeyAutomatically={true}
                        value={values.type}
                        onChangeText={handleChange('type')}
                    />
                    {values.inputErr !== "" && (values.inputId === 4) && <Text size={12} color={'error'} weight={'normal'}> {values.inputErr}</Text>}
                </View>
                {
                    param ?

                        <Touchable style={styles.loginBtn} onPress={() => updateHandler()}>
                            <Text style={styles.loginBtnText}>{loading ? 'Loading...' : 'Update'}</Text>
                        </Touchable>
                        :
                        <Touchable style={styles.loginBtn} onPress={() => addHandler()}>
                            <Text style={styles.loginBtnText}>{loading ? 'Loading...' : 'Save'}</Text>
                        </Touchable>
                }
            </Screen>
        </View>
    )
}