const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "third",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [
				{
					name: "FIRST",
					address: "laderas",
					phone: "9566221"
				},
				{
					name: "Fsecond",
					address: "los pionos",
					phone: "958885"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				console.log ('loadSomeData')
				setStore({ contacts: [{
					name: "",
					address: "",
					phone: ""
				}
				] });
				fetch('https://playground.4geeks.com/contact/agendas/piedrapapel/contacts')
					.then ( (response)=> response.json())
					.then( (data)=> setStore ({contacts: data.contacts}))
					

			},
			deleteContact: (indexToDelete) => {
				
				console.log ('deleteContact desde flux', indexToDelete)
				const store = getStore();
				console.log (store.contacts)
				console.log (store.contacts.filter ((elemento, index)=> index !=indexToDelete))
				setStore({ contacts: store.contacts.filter ((elemento, index)=> index !=indexToDelete)  });
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
