import { Pressable, StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-elements";
import { useState } from "react";
import { ACCOUNTS } from "../shared/accounts";
import { ScrollView } from "react-native-gesture-handler";
import { PROMOTIONS } from '../shared/promotions';
import { POLICIES } from '../shared/policies';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const FeaturedItem = ({ item }) => {
    if (item) {
        return <Card
            containerStyle={{ paddingLeft: 0, paddingRight: 0 }}
        >
            <Card.Title>{item.name}</Card.Title>
            <Card.Image source={item.image} />
            <Text
                style={{ margin: 20 }}
            >{item.description}</Text>
        </Card>
    }
    return <View />
}

const AccountsScreen = ({ navigation }) => {
    const [accounts, setAccounts] = useState(ACCOUNTS);

    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [policies, setPolicies] = useState(POLICIES);
    const featPromotion = promotions.find((item) => item.featured);
    const featPolicy = policies.find((item) => item.featured);

    var today = new Date();

    // Create our number formatter.
    const currencyFormat = (num) => {
        return '$' + Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: '15%',
            }}
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            {accounts.map((account) => {
                let day2 = account.name == 'Checking' ? today.getDate() - Math.floor((Math.random() * 10) + 1)
                    : (today.getDate() - 10) - Math.floor((Math.random() * 10) + 1);
                return <Card key={account.id} containerStyle={styles.accountItem} >
                    <Pressable onPress={() => navigation.navigate('AccountInfo', { account })} >
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }} >
                            <Card.Title style={styles.accountTitle} >
                                {account.name}
                            </Card.Title>
                            <Card.Title style={{ marginLeft: 5, lineHeight: 25, color: 'black', fontSize: 12 }}>{account.code}</Card.Title>
                        </View>
                        <View style={styles.accountSubtitle}>
                            <Card.FeaturedSubtitle style={styles.accountSubtitle}>
                                Recent Activity &nbsp;
                            </Card.FeaturedSubtitle>
                            <View style={styles.line} />
                            <Text style={{ fontSize: 14, color: 'grey', textAlign: 'left' }}>
                                &nbsp;
                                {months[today.getMonth()] + ' '
                                    + day2 + ', '
                                    + today.getFullYear()
                                }
                            </Text>
                        </View>
                        <View style={styles.accountSubtitle}>
                            <Card.FeaturedSubtitle style={styles.accountSubtitle}>
                                {account.history.type} &nbsp;
                            </Card.FeaturedSubtitle>
                            <View style={styles.line} />
                            <Card.FeaturedSubtitle style={styles.accountSubtitle}>
                                &nbsp;{currencyFormat(account.history.value)}
                            </Card.FeaturedSubtitle>
                        </View>
                    </Pressable>
                </Card>
            }
            )
            }
            <FeaturedItem
                item={featPromotion}
                style={{
                    height: '200px',
                }}
            />
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    btn: {
        borderColor: '#B22222',
        color: '#B22222',
        maxWidth: 50,
        flexDirection: 'row',
        alignItems: 'bottom'
    },
    accountTitle: {
        textAlign: 'left',
        fontSize: 22
    },
    accountValue: {
        color: 'black',
        fontSize: 15
    },
    accountSubtitle: {
        fontSize: 15,
        color: 'grey',
        flexDirection: 'row'
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'black',
        marginTop: 10,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    text: {
        fontSize: 12,
        color: 'grey',
        marginLeft: 10
    },
    accountItem: {
        borderRadius: 15
    }
})

export default AccountsScreen;