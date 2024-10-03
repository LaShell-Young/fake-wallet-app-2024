import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native"
import { Card, Icon, ListItem, Text } from "react-native-elements";
import { POLICIES } from "../shared/policies";

const Mission = () => {
    return (
        <Card>
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider />
            <Text
                style={{ margin: 10 }}
            >
                It was a concerning development that he couldn't get out of his mind. He'd had many friends throughout his early years and had fond memories of playing with them, but he couldn't understand how it had all stopped. There was some point as he grew up that he played with each of his friends for the very last time, and he had no idea that it would be the last.
            </Text>
        </Card>
    );
}
const AboutScreen = () => {
    const [policies, setPolicies] = useState(POLICIES);
    return <ScrollView>
        <Mission />
        <Card>
            <Card.Title>Policy</Card.Title>
            <Card.Divider />
            {policies.map((policy) =>
                <ListItem key={policy.id} >
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        iconStyle={styles.stackIcon}
                    />
                    <ListItem.Content>
                        <ListItem.Title>{policy.name}</ListItem.Title>
                        <ListItem.Subtitle>{policy.description}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            )}
        </Card>
    </ScrollView>
}

const styles = StyleSheet.create({
    stackIcon: {
        color: '#FFD700',
        fontSize: 24
    }
});

export default AboutScreen;