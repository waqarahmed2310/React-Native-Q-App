import React from 'react';
import { StyleSheet, Text, View,Button,Alert } from 'react-native';
const { width, height } = Dimensions.get('window');

export default class UserScreen extends Component {
    static navigationOptions = {
        header: null
    };
    static navigationOptions =
        {
            title: 'New User',
            headerTintColor: '#00b0ff',
            animationEnabled: true,
            headerStyle: {
                borderBottomColor: '#00b0ff'
            }
        }

        render() {
        return (
            <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }

});