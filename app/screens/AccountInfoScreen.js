import RenderAccount from '../features/campsites/RenderAccount';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { HISTORY } from '../shared/history';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const AccountInfoScreen = ({ route, navigation }) => {
    const [history, setHistory] = useState(HISTORY);
    const { account } = route.params;
    var today = new Date();

    // Create our number formatter.
    const currencyFormat = (num) => {
        return '$' + Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    const renderAccountInfo = ({ item: record }) => {
        let color = record.withdrawal ? 'red' : 'green';
        let day = today.getDate() - Math.floor((Math.random() * 10) + 1);

        return <View
            style={styles.accountItem}
        >
            {record.historyId === account.id &&
                <View>
                    <Text style={{ fontSize: 15 }}>{record.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, fontSize: 14, color: 'grey', textAlign: 'left' }}>
                            {months[today.getMonth()] + ' '
                                + day + ', '
                                + today.getFullYear()
                            }
                        </Text>
                        <Text style={{ flex: 1, fontSize: 14, color: color, textAlign: 'right' }}>
                            {color === 'red' && '-'}
                            {account.available > record.value ?
                                currencyFormat(record.value)
                                : currencyFormat(Number((account.available * ((Math.random() * 10) + 1.0) / account.available).toFixed(2)))
                            }
                        </Text>
                    </View>
                    <View style={styles.line} />
                </View>
            }
        </View>
    }

    return <FlatList
        data={history}
        renderItem={renderAccountInfo}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
            flex: 1,
            paddingHorizontal: '15%',
            paddingVertical: 20
        }}
        style={{
            width: '100%',
            height: '100%',
        }}
        ListHeaderComponent={
            <>
                <RenderAccount account={account} navigation={navigation} />
                <Text style={styles.accountTitle}>Recent Activity</Text>
            </>
        }
    />;
}
const styles = StyleSheet.create({
    accountTitle: {
        textAlign: 'center',
        backgroundColor: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#43484D',
        padding: 10,
        paddingTop: 30,
        marginTop: 10
    },
    accountItem: {
        paddingVertical: 2,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    line: {
        flex: 1,
        height: 1,
        marginTop: 10,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
})

export default AccountInfoScreen;