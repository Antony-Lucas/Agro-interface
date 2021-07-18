import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function NewTask(){
    return(
        <SafeAreaView>
            <View>
                <Text>sexta-feira</Text>
                <Text>10 de Junho, 2021</Text>
                <Text>Bom dia, UserName</Text>
            </View>
            <View>
                <Ionicons name='person-circle-outline' size={50}/>
            </View>
        </SafeAreaView>
    );
}