const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      characters: [],
      plantes: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getData: (url, param2) => {
        fetch(url)
          .then((res) => res.json())
          .then((dataJson) => setStore({ [param2]: dataJson.results }))
          .catch((err) => console.log(err));
      },
     addFav: (fav) => {
        //get the store
        const newFavorites = getStore().favorites;
		newFavorites.push(fav)

		//reset the global store
		setStore({ favorites: newFavorites });
	},

  deleteFav: (fav)=>{
    var deleteFavo = getStore().favorites;
    let delet = deleteFavo.filter((element)=>element!==fav)
    setStore({ favorites: delet });
  }
		
	},
};
}


export default getState;
