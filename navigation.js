import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './screens/Categories';
import ProductsScreen from './screens/Products';
import ProductDetailsScreen from './screens/ProductDetails';


const StackNavigator = createStackNavigator();
export const Nav = () => {
    return (
        <StackNavigator.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <StackNavigator.Screen name='Categories' component={CategoriesScreen} />
            <StackNavigator.Screen name='Products' component={ProductsScreen} />
            <StackNavigator.Screen name='ProductDetails' component={ProductDetailsScreen} />
        </StackNavigator.Navigator>
    )
}


