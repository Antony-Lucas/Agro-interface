import React, { useState, useEffect } from 'react';
import { FontAwesome } from "@expo/vector-icons";
import database from '../../config/firebaseconfig';
import styles from './style'
import { Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    TouchableOpacityBase
} from 'react-native';

export default function Tasks({ navigation }){
    const [task, setTask] = useState([]);

    useEffect(() => {
        database.collection("tarefas").onSnapshot((query)=>{
            const list = [];
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setTask(list);
        });
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={( item )=>{
                    <View style={styles.contextAllTasks}>
                        <TouchableOpacity 
                            style={styles.buttonPlus}
                            onPress={() => navigation.navigate("Nova Tarefa")}
                            >
                            <Text style={styles.iconButton}>+</Text>
                        </TouchableOpacity>
                    </View>
                }}
            />
            <TouchableOpacity 
                style={styles.buttonPlus}
                onPress={() => navigation.navigate("Nova Tarefa")}
                >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}