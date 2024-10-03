import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import AccountInfoScreen from './AccountInfoScreen';
import AccountsScreen from './AccountsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import UpdateValuesScreen from './UpdateValuesScreen';

const Drawer = createDrawerNavigator();
const screenOptions = {
    headerStyle: { backgroundColor: '#B22222' },
    headerTintColor: '#FFD700'
}
const AboutNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='About'
                component={AboutScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
}

const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={({ navigation }) => ({
                    title: 'Contact Us',
                    headerLeft: () => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
}

// const HomeNavigator = () => {
//     const Stack = createStackNavigator();
//     return (
//         <Stack.Navigator
//             screenOptions={screenOptions}
//         >
//             <Stack.Screen
//                 name='Home'
//                 component={HomeScreen}
//                 options={({ navigation }) => ({
//                     title: 'Home',
//                     headerLeft: () => (
//                         <Icon
//                             name='home'
//                             type='font-awesome'
//                             iconStyle={styles.stackIcon}
//                             onPress={() => navigation.toggleDrawer()}
//                         />
//                     )
//                 })}
//             />
//         </Stack.Navigator>
//     );
// }

const AccountNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Account'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Account'
                component={AccountsScreen}
                options={({ navigation }) => ({
                    title: 'Account',
                    headerLeft: () => (
                        <Icon
                            name='dollar'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen
                name='AccountInfo'
                component={AccountInfoScreen}
                options={({ route }) => ({
                    title: route.params.account.name
                })}
            />
            <Stack.Screen
                name='UpdateValues'
                component={UpdateValuesScreen}
                options={({ route }) => ({
                    title: 'Edit ' + route.params.account.name
                })}
            />
        </Stack.Navigator>
    );
}

const CustomDrawerContent = (props) => {
    return <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <MaterialCommunityIcons name="horse" size={50} style={{ marginLeft: 15 }} />
            </View>
            <View style={{ flex: 1 }}>
                <MaterialCommunityIcons name="horse" size={50} style={{ marginLeft: -10 }} />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>WF</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
    </DrawerContentScrollView>
}

const Main = () => {
    return <View
        style={{
            flex: 1,
            paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
        }}
    >
        <Drawer.Navigator
            initialRouteName='Account'
            drawerStyle={{
                backgroundColor: '#B22222',
                borderColor: '#FFD700'
            }}
            drawerContentOptions={{
                activeTintColor: '#B22222',
                activeBackgroundColor: '#FFD700'
            }}
            drawerContent={CustomDrawerContent}
        >
            <Drawer.Screen
                name='Account'
                component={AccountNavigator}
                options={{
                    title: 'Account',
                    drawerIcon: ({ color }) => (
                        <Icon
                            name='dollar'
                            type='font-awesome'
                            size={24}
                            iconStyle={{ width: 28 }}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name='About'
                component={AboutNavigator}
                options={{
                    drawerIcon: ({ color }) => (
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            size={24}
                            iconStyle={{ width: 28 }}
                            color={color}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name='Contact'
                component={ContactNavigator}
                options={{
                    title: 'Contact Us',
                    drawerIcon: ({ color }) => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            size={24}
                            iconStyle={{ width: 28 }}
                            color={color}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    </View>
}

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 20,
        color: '#FFD700',
        fontSize: 24
    },
    drawerHeader: {
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#FFD700',
        fontSize: 50,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    }
});


export default Main;