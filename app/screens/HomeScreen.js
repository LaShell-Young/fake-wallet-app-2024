import { Text, View, ScrollView } from "react-native";
import { useState } from "react";
import { Card } from "react-native-elements";
import { PROMOTIONS } from '../shared/promotions';
import { POLICIES } from '../shared/policies';
// made use in the future
const FeaturedItem = ({ item }) => {
    if (item) {
        return <Card containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
            <Card.Title>{item.name}</Card.Title>
            <Card.Image source={item.image} />
            <Text
                style={{ margin: 20 }}
            >{item.description}</Text>
        </Card>
    }
    return <View />
}
const HomeScreen = () => {
    const [promotions, setPromotions] = useState(PROMOTIONS);
    const [policies, setPolicies] = useState(POLICIES);

    const featPromotion = promotions.find((item) => item.featured);
    const featPolicy = policies.find((item) => item.featured);

    return (
        <ScrollView>
            <FeaturedItem item={featPromotion} />
            <FeaturedItem item={featPolicy} />
        </ScrollView>
    );
}

export default HomeScreen;