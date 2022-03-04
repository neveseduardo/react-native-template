import React from 'react'
import {View, ScrollView} from 'react-native'
import {Searchbar} from 'react-native-paper'
import {Text} from '~components/'
import styles from '~styles/'
import {Card} from '~components/'

const Home = ({navigation, ...props}) => {
    function handleNavigation(screenName) {
        navigation.navigate(screenName)
    }

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <ScrollView>
            <View style={[styles.dimensions.paddings.padding(20)]}>
                <Searchbar
                    style={[styles.dimensions.margins.marginBottom(20)]}
                    placeholder="Pesquisar..."
                    onChangeText={() => ({})}
                    value={null}
                />

                <View
                    style={{
                        maxWidth: '100%',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                    }}>
                    {array.map(item => (
                        <View
                            key={item}
                            style={[
                                styles.dimensions.margins.marginBottom(15),
                                styles.dimensions.paddings.padding(15),
                                {
                                    width: '48%',
                                    backgroundColor: styles.colors.WHITE,
                                },
                            ]}>
                            <Card />
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

export default Home
