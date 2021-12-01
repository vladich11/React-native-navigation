import React from 'react';
import { StyleSheet, FlatList, SafeAreaView, TouchableOpacity, View, Text, Image } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const Products = (props) => {

    const productData = props.route.params.productsList.products

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={productData}
                    keyExtractor={item => item.productName}
                    renderItem={productItem =>

                        <TouchableOpacity style={styles.categoryItem} onPress={() => { props.navigation.navigate('ProductDetails', { productDetails: productItem.item }) }}>
                            <View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', marginVertical: 10, fontFamily: 'Inter_900Black' }}>{productItem.item.productName}</Text>
                                <Image
                                    source={{ uri: productItem.item.imageURL, }}
                                    style={{ width: 300, height: 300 }}
                                />
                            </View>
                        </TouchableOpacity>
                    }
                />
            </SafeAreaView>
        )

    }
}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
        },
        categoryItem: {
            backgroundColor: 'rgb(245, 245, 245)',
            padding: 22,
            marginBottom: 10,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 50,
        }
    });

    export default Products;
