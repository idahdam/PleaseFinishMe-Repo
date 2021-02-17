import React from 'react'
import { Text, View } from 'react-native'
import headerStyles from './headerElements';

const Header = () => {
    return(
        <View style={headerStyles.header}> 
            <Text style={headerStyles.title}>Please, Finish Me!</Text>
        </View>
    )
}

export default Header;