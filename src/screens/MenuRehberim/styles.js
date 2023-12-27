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
  paragraphText: {
    marginTop: 10,
    fontSize: 15,  
  },
  whiteText: {
    color: '#fff',
  },
  redText: {
    color: '#c10e18',
  },
  experienceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  experienceItem: {
    alignItems: 'center',
    marginRight:20,
  },
  numberText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  footer: {
    marginTop:50,
    marginBottom: 0,
    backgroundColor: '#342f29',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
  },
  footerLeft: {
    alignItems: 'flex-start',
    marginRight:50,
  },
  footerRight: {
    alignItems: 'flex-end',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default styles;
