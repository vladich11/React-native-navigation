import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const ProductDetails = (props) => {

    const productDetail = props.route.params.productDetails

    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={styles.container}>

                <View style={{ backgroundColor: 'rgb(245, 245, 245)', borderRadius: 20, }}>

                    <View style={{ flex: 0.5, paddingTop: 50, marginHorizontal: 10 }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Inter_900Black' }}>{productDetail.productDescription}</Text>
                        <Text style={{ textAlign: 'center' , fontFamily: 'Inter_900Black'}} >${productDetail.productPrice}.00</Text>
                    </View>

                    <Image
                        source={{ uri: productDetail.imageURL, }}
                        style={{ width: 300, height: 300, marginLeft: 20 }}
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
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            padding: 22,
            marginBottom: 10,


        },
        heartLottie: {
            width: 40,
            height: 40,
        }
    });

    export default ProductDetails;