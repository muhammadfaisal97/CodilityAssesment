import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    TextInput,
    SafeAreaView, // Ensure SafeAreaView is imported
    TouchableOpacity,
} from 'react-native';
import ProductCard from '../../components/HomeScreen/ProductCard';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'http://fakestoreapi.com/products';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const navigation = useNavigation();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch products from API
    const fetchProducts = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data);
        } catch (e) {
            setError('Failed to fetch products. Please try again later.');
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Handle search filtering
    useEffect(() => {
        const handler = setTimeout(() => {
            if (searchQuery) {
                const filtered = products.filter(product =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
                );
                setFilteredProducts(filtered);
            } else {
                setFilteredProducts(products);
            }
        }, 300); // Debounce search input

        return () => clearTimeout(handler);
    }, [searchQuery, products]);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}> {/* Use SafeAreaView directly */}
            <TextInput
                style={styles.searchBar}
                placeholder="Search products by name..."
                value={searchQuery}
                placeholderTextColor="#888"
                onChangeText={setSearchQuery}
            />
            <FlatList
                data={filteredProducts}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() =>
                            navigation.navigate('ProductDetails', {
                                product: item
                            })
                        }>
                        <ProductCard
                            product={item}
                        />
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
                ListEmptyComponent={
                    <View style={styles.center}>
                        <Text>No products found.</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    center: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBar: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    listContainer: {
        paddingHorizontal: 8,
    },
});

export default HomeScreen;