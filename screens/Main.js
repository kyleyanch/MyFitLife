import { View, Text, ScrollView, Button } from 'react-native';
import style from '../style.js';

export default function Home({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 20 }}>
            <Text style={style.title}>FitLife Hub</Text>
            <Text style={style.subtitle}>Your all-in-one destination for health, fitness, and wellbeing.</Text>

            <View style={style.card}>
                <Text style={style.cardTitle}>Browse Exercises</Text>
                <Text style={style.cardBody}>Search and filter a full library of resistance training exercises by muscle group, difficulty, and more.</Text>
                <View style={style.button}>
                    <Button title="Browse" onPress={() => navigation.navigate('Browse')} />
                </View>
            </View>

            <View style={style.card}>
                <Text style={style.cardTitle}>My Favourites</Text>
                <Text style={style.cardBody}>View your saved exercises. Attach progress photos and revisit your go-to movements.</Text>
                <View style={style.button}>
                    <Button title="Favourites" onPress={() => navigation.navigate('Favourites')} />
                </View>
            </View>

            <View style={style.card}>
                <Text style={style.cardTitle}>About</Text>
                <Text style={style.cardBody}>Learn more about this app and who made it.</Text>
                <View style={style.button}>
                    <Button title="About" onPress={() => navigation.navigate('About')} />
                </View>
            </View>
        </ScrollView>
    );
}