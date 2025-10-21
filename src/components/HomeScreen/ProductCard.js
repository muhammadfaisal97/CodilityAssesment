import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const ProductCard = ({ product }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: product?.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={2}>
                    {product?.title}
                </Text>
                <Text style={styles.price}>${product?.price.toFixed(2)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        margin: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        height: 150,
        resizeMode: 'contain',
        borderRadius: 12,
    },
    infoContainer: {
        padding: 12,
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 8,
    },
});

export default ProductCard;