import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import AppContainer from '~navigator/AppContainer'
import {Provider as PaperProvider} from '~providers/PaperProvider'

function App() {
    return (
        <SafeAreaProvider>
            <PaperProvider>
                <NavigationContainer>
                    <AppContainer />
                </NavigationContainer>
            </PaperProvider>
        </SafeAreaProvider>
    )
}

export default App
