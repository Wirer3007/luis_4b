
import Estilos from './Estilos.js';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import { initDB, adicionarPessoa } from './database';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Cadastro({ setTelaLogin }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  async function prepararApp() {
    try {
      await initDB();
    } catch (error) {
      console.log('Erro ao iniciar banco:', error);
    }
  }

  async function handleAdicionar() {
    if (!nome.trim() || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      await adicionarPessoa(nome.trim(), senha);

      Alert.alert('Sucesso', 'Cadastro realizado');

      setNome('');
      setSenha('');
      setTelaLogin(true);

    } catch (error) {
      console.log('Erro no cadastro:', error);
      Alert.alert('Erro', 'Não foi possível cadastrar');
    }
  }

  useEffect(() => {
    prepararApp();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={Estilos.safeAreaViewContainer}>
        <Text style={Estilos.cabecarioT}>
          Bem vindo ao Cadastro
        </Text>

        <View style={Estilos.camposCadastroContainer}>
          <TextInput
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            style={Estilos.campoTexto}
          />

          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={Estilos.campoTexto}
          />

          <Button
            title="Adicionar"
            onPress={handleAdicionar}
          />

          <Text style={Estilos.descriCao}>
            Bem vindo a area de cadastros
          </Text>

          <Text style={Estilos.descriCao}>
            Ja tem uma conta?
          </Text>

          <TouchableOpacity
            onPress={() => setTelaLogin(true)}
          >
            <Text style={Estilos.descriCao2}>
              login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
