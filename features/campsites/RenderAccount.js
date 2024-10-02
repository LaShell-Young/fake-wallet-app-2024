import { View } from 'react-native';
import { Card } from 'react-native-elements';
import { StyleSheet, Text } from 'react-native';

const RenderAccount = ({ navigation, account }) => {
    // Create our number formatter.
    const currencyFormat = (num) => {
        return '$' + Number(num).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    if (account) {
        return (
            <Card key={account.id} containerStyle={styles.cardContainer} >
                <View style={{ flexDirection: 'row', alignItems: 'flex-start' }} >
                    <Card.Title style={styles.accountTitle} >
                        {account.name}
                    </Card.Title>
                    <Card.Title style={{ marginLeft: 5, lineHeight: 18, color: 'black', fontSize: 12 }}>{account.code}</Card.Title>
                </View>
                <View style={styles.accountSubtitle}>
                    <Card.FeaturedSubtitle style={styles.accountSubtitle}>
                        Available** &nbsp;
                    </Card.FeaturedSubtitle>
                    <View style={styles.line} />
                    <Card.FeaturedSubtitle style={styles.accountValue}>
                        &nbsp;{currencyFormat(account.available)}
                    </Card.FeaturedSubtitle>
                </View>
                <View style={styles.accountSubtitle}>
                    <Card.FeaturedSubtitle style={styles.accountSubtitle}>
                        Current &nbsp;
                    </Card.FeaturedSubtitle>
                    <View style={styles.line} />
                    <Card.FeaturedSubtitle style={styles.accountSubtitle}>
                        &nbsp;{currencyFormat(Number(account.available) + (Number(account.available) * .05))}
                    </Card.FeaturedSubtitle>
                </View>
                <Text style={styles.text} >** Balance may include overdraft funds</Text>
                <Text onPress={() => navigation.navigate('UpdateValues', { account })} style={{ textAlign: 'right', fontSize: 15, color: 'blue' }}>Details</Text>
            </Card>
        );
    }
    return <View />;
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        margin: 0,
        marginBottom: 5
    },
    accountTitle: {
        textAlign: 'left',
        fontSize: 18
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
        color: 'grey'
    },
    accountItem: {
        borderRadius: 15
    }
})

export default RenderAccount;