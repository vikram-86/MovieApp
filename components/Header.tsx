import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


// Define Typescript type for the component
type HeaderProps = {
    title: String
};

// Define Header component
const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        // Container View for the header
        <View style = {styles.header}>
            <Text style = {styles.title}>
                {title}
            </Text>
        </View>
    )
};


// Styles
const styles = StyleSheet.create({
    header: {
        width: '100%', // make the header full width
        padding: 20,
        backgroundColor: '#20232a',
        alignItems: 'center',
        borderBottomWidth: 1, // Add bottom border
        borderBottomColor: '#61dafb',
    },
    title: {
        fontSize: 20,
        color: '#61dafb',
    },
});

// Export the Header component as the default export
export default Header;