import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    pessoaItemContainer: {
      backgroundColor: 'gray',
      padding: 12,
      borderRadius: 8,
      marginVertical: 6,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    pessoaItemNome: { fontSize: 16, fontWeight: 'bold' },
    pessoaItemEmail: { color: '#555' },
    pessoaItemBtnExcluirText: { color: 'red', fontWeight: 'bold' },

    safeAreaViewContainer: {
        
        flex: 1, backgroundColor: '#E7D9FF',
        padding: 100,
        width: 400,
        borderRadius: 100,
        borderColor: '#8A47FF',
        marginVertical: 100,
        borderWidth: 10,
        marginHorizontal: '-8'
            
    },

    textoTitulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    camposCadastroContainer: { marginBottom: 5, },
    boTao: {width: 200},
    descriCao: {fontSize: 16, fontWeight: 'bold', marginLeft: 20, justifyContent: 'space-between', marginTop: 10},
    descriCao2: {fontSize: 16, fontWeight: 'bold', marginLeft: 70, color: "blue", justifyContent: 'space-between', marginTop: 20},
    cabecarioT: {fontSize:21, marginLeft: 10, color: 'blue'},
    campoTexto: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10
    }
}); 