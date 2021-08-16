import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  inputBox: {
    margin: 10,
    padding: 10,
    backgroundColor: '#d9d9d9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#6e6e6e',
  },
  timeContainer: {
    width: 100,
    padding: 10,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  row: {
    padding: 20,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dbdbdb',
  },
  iconContainer: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#b3b3b3',
  },
  destinationText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});
