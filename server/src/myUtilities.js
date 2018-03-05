let findElementsInHaystack = (elementArr, haystackArr) => {
	let newElements = [];
	let existingElements = [];
  let haystackSet;
  
	elementArr.forEach((item) => {
  	if(haystackArr.includes(item)){
    	existingElements.push(item);
    }
    else{
    	newElements.push(item);
    }
    
  })
  
  haystackSet = {
  	elementsFound: existingElements,
    newElements: newElements
  };
  
  return haystackSet;
  
}

let filterForIds = (setToFilter, setToFind) => {
	let idSet;
  
	if(Array.isArray(setToFind)){
      idSet = setToFind.map((item) => {
      // console.log("mappping: ", item);

      let filtered = setToFilter.filter((item2) => {
        // console.log("filtering: ", item);
        return item2.title === item;
      });
      // console.log("result", filtered);

      let idSet2 = filtered.map((item) => {
        return item.id
      })
      // console.log("result", idSet);
      return idSet2[0];
    });
  }
  else{
  	let result = setToFilter.filter((item) => {
        // console.log("not an array", item);
    	return item.title === setToFind;
    });

    console.log(result);
    
		idSet = result.length === 0 ? 0 : result[0].id;
  }
  
  return idSet;
}

module.exports = {
    FindElementsInSet: findElementsInHaystack,
    FilterForIds: filterForIds
};