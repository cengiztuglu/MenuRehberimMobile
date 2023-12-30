import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    textDecorationColor: 'red',
  },
  image: {
    marginBottom: 40,
    height:150,
    width:150,
    resizeMode:'cover',
  },
});

export default styles;
