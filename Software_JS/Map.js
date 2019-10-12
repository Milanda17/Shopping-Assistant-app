
const data=[];
var i;
var j;


console.log("Start");

for(i=1;i<=1200;i++){
  data.push({key:i})
  // data.push(i)
  
}

const selected=[];
for(i=100;i<=500;i++){
  selected.push({key:i})
  // selected.push(i)
}

data.forEach(element => {
  selected.forEach(selectedelement =>{
      if(element==selectedelement){
        console.log(element);
        console.log(selectedelement);
        console.log("true");
        data.push({value:'x'}) 
      }

  })
});

  
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ Key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};

const numColumns = 25;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 0,
  },
  item: {
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 0,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },

  itemSelected: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 0,
    height: Dimensions.get('window').width / numColumns, // approximate a square
  },

  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },

});

