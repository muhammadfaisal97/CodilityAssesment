import React, { useContext } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    SafeAreaView, // Ensure SafeAreaView is imported
} from 'react-native';
import { FavoritesContext } from '../../context/FavoritesContext';

const ProductDetailsScreen = ({ route }) => {
    // Extract the product and favorite logic from navigation parameters
    const { product } = route.params;
    const { favorites, toggleFavorite } = useContext(FavoritesContext);
    const isFavorite = favorites.includes(product.id);

    return (
        <SafeAreaView style={styles.safeArea}> {/* Use SafeAreaView directly */}
            <ScrollView contentContainerStyle={styles.container}>
                <Image source={{ uri: product.image }} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{product.title}</Text>
                        <TouchableOpacity onPress={() => toggleFavorite(product.id)}>
                            <Text style={styles.favoriteIcon}>
                                {isFavorite ? '❤️' : '🤍'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                    <Text style={styles.category}>{product.category}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        paddingBottom: 20,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
        backgroundColor: '#fff',
    },
    detailsContainer: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        flex: 1, // Allow title to wrap
        marginRight: 16,
    },
    favoriteIcon: {
        fontSize: 30,
    },
    price: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        marginBottom: 8,
    },
    category: {
        fontSize: 16,
        color: '#666',
        marginBottom: 16,
        textTransform: 'capitalize',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#444',
    },
});

export default ProductDetailsScreen;