import React, { createContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@favorites';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load favorites from AsyncStorage on initial app load
    useEffect(() => {
        const loadFavorites = async () => {
            try {
                const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
                if (storedFavorites !== null) {
                    setFavorites(JSON.parse(storedFavorites));
                }
            } catch (e) {
                console.error('Failed to load favorites.', e);
            } finally {
                setLoading(false);
            }
        };
        loadFavorites();
    }, []);

    const toggleFavorite = useCallback(async productId => {
        const newFavorites = favorites.includes(productId)
            ? favorites.filter(id => id !== productId)
            : [...favorites, productId];

        setFavorites(newFavorites);
        try {
            await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
        } catch (e) {
            console.error('Failed to save favorites.', e);
        }
    }, [favorites]);

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, loading }}>
            {children}
        </FavoritesContext.Provider>
    );
};