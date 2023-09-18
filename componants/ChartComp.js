import React from 'react'
import { Dimensions, View } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { color } from '../assets/Colors/Colors'
import { FontAwesome } from '@expo/vector-icons';
import { State } from 'react-native-gesture-handler';


const ChartComp = () => {

    return (

        <LineChart
            data={{
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                datasets: [
                    {
                        data: [
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100,
                            Math.random() * 100
                        ]
                    }
                ]
            }}
            width={Dimensions.get("window").width * 3} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                // backgroundColor: "#e26a00",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                backgroundGradientToOpacity: 0,
                backgroundGradientFromOpacity: 0,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(70, 66, 150, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "4",
                    strokeWidth: "2",
                    stroke: `rgb(70, 66, 150)`
                }
            }}
            bezier
            style={{
                marginVertical: 6,
                borderRadius: 16,
                marginLeft: 12
            }}
        />

    )
}

export default ChartComp
