import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { store } from '../backend/Data';
import LottieView from 'lottie-react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const Categories = (props) => {

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>

                <View style={styles.nikeLottie}>
                    <LottieView
                        source={require('../assets/animations/75804-nike-loading-animation.json')} autoPlay loop
                    />
                </View>

                <View style={styles.menu}>
                    <FlatList style={{ width: '70%' }}
                        data={store}
                        keyExtractor={item => item.id}
                        renderItem={categoryItem =>

                            <TouchableOpacity onPress={() => { props.navigation.navigate('Products', { productsList: categoryItem.item }) }}>
                                <View style={styles.categoryItem}>
                                    <Text style={styles.text}>{categoryItem.item.CategoryName}</Text>
                                </View>

                            </TouchableOpacity>

                        }
                    />
                </View>


            </View>
        )
    }
}


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black',
            padding: 10,

        },
        nikeLottie: {
            flex: 1,
            marginBottom: 20
        },
        categoryItem: {
            backgroundColor: '#fff',
            padding: 22,
            marginBottom: 20,
            borderRadius: 10,
        },
        menu: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
        },
        button: {

        },
        text: {
            textAlign: 'center',
            fontFamily: 'Inter_900Black'
        }
    });

    export default Categories;