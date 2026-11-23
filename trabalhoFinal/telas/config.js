import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Estilos from '../St/Estilos';

export default function Config() {
    return (
        <View>
            <Text>Config</Text>
            <TouchableOpacity style={Estilos.logOut}>
                <Text style={Estilos.logOuT}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}
