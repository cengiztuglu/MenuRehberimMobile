import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerHero: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    position: 'relative', 
  },
  containerAbout: {
    marginTop:220,
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: 200, 
    justifyContent: 'center',
    position: 'absolute', 
    top: 0, 
  },
  header: {
    fontSize: 30, 
    fontWeight: 'bold', 
    marginLeft: 25,
  },
  centerText: {
    textAlign:'center', 
  },
  normalText: {
    fontSize: 20,  
  },
  whiteText: {
    color: '#fff',
  },
  redText: {
    color: '#c10e18',
  },
});

export default styles;
