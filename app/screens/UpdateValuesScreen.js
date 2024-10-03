import { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";



const UpdateValuesScreen = (props) => {
    const [number, onChangeNumber] = useState('');

    const updateAccount = () => {
        if (number >= 10) {
            props.route.params.account.available = number;
            let account = props.route.params.account;

            return (
                Alert.alert(
                    'Checking Status',
                    `balance = $${props.route.params.account.available}`,
                    [
                        {
                            text: 'Ok',
                            onPress: () => props.navigation.navigate('AccountInfo', { account }),
                            style: 'cancel',
                        },
                    ],
                    {
                        cancelable: true,
                    }
                )
            )
        }
        return (
            Alert.alert(
                'Error',
                `value MUST be greater than or equal to 10`,
                {
                    cancelable: true,
                }
            )
        )
    }

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                placeholder="Enter a number (ex: 50000.00)"
                keyboardType="numeric"
                value={number}
                onSubmitEditing={updateAccount}
            />
            <TouchableOpacity
                style={styles.submitButton}
                onPress={updateAccount}>
                <Text style={styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        marginTop: 20
    },
    submitButton: {
        backgroundColor: '#B22222',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: '#FFD700'
    }
});

export default UpdateValuesScreen;