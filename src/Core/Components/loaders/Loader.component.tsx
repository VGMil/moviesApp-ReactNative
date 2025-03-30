import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useTheme } from '../../Hooks/useTheme';

export const Loader = () => {
    const { theme } = useTheme();

    const styles = StyleSheet.create({
        loaderContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 200,
        }
    });

    return (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={theme?.colors.primary} />
        </View>
    );
};