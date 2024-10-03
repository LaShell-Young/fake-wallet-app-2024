import { ScrollView, View } from "react-native"
import { Card, ListItem, Text } from "react-native-elements";
import { FAQ } from "../shared/faq";
import { useState } from "react";


const ContactScreen = () => {
    const [questions, setQuestions] = useState(FAQ);
    return <ScrollView
        contentContainerStyle={{
            flex: 1,
            paddingHorizontal: '15%',
        }}
        style={{
            width: '100%',
            height: '100%',
        }}
    >
        <Card
            wrapperStyle={{ margin: 20 }}
        >
            <Card.Title>
                Contact Information
            </Card.Title>
            <Card.Divider />
            <Text>
                8596 Golden Way,
            </Text>
            <Text>
                San Francisco, CA 94901
            </Text>
            <Text style={{ marginBottom: 10 }}>
                United States
            </Text>
            <Text>
                Phone: 1-206-555-8326
            </Text>
            <Text>
                Email: customer.support@services.com
            </Text>
        </Card>
        <Card>
            <Card.Title>FAQ</Card.Title>
            <Card.Divider />
            {questions.map((question) =>
                <ListItem key={question.id} >
                    <ListItem.Content>
                        <ListItem.Title>{question.question}</ListItem.Title>
                        <ListItem.Subtitle>{question.answer}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            )}
        </Card>
    </ScrollView>
}

export default ContactScreen;