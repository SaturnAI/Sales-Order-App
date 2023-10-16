import React from 'react'
import { View, Text , StyleSheet, Dimensions} from 'react-native'
import Pdf from 'react-native-pdf'
import { PdfResource } from '../util/data'

const PdfScreen = () => {

  return (
    <View style={styles.container}>
       <Pdf 
                trustAllCerts={false}
                source={PdfResource}
                style={styles.pdf}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`number of pages: ${numberOfPages}`);
                }}
            />
    </View>
  )
}

export default PdfScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})