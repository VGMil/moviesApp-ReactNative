import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../Core/Hooks/useTheme';

const TicketScreen = () => {
    const { theme } = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme?.colors.background,
        },
        texto:{
            color: theme?.colors.text,
          }
    });
    return (
        <View style={styles.container}>
            <Text style = {styles.texto}>Ticket Screen</Text>
        </View>
    );
};



export default TicketScreen;
