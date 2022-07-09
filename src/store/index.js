import { data } from "../data/data";
export const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			ciclo: [{
				tipo:"",
				msg:""
			}	
			],
			grados:[],
			materias:[],
			disable:false,
			disableMenu:''
		},
		actions: {
			
			cambiarCiclo(input){
				if(input === "Primaria"){
					setStore({
						ciclo:[
							{
								tipo:input,
								msg:'“Todos nuestros sueños se pueden volver realidad si tenemos el coraje de perseguirlos”. Walt Disney'
							}
						]
					});
				}else{
					setStore({
						ciclo:[
							{
								tipo:input,
								msg:"“Los sabios son los que buscan la sabiduría; los necios piensan ya haberla encontrado”. Napoleón Bonaparte"
							}
						]
					});
				}
			},
			listaGrados(input){
				if(input === "Primaria"){
					setStore({
						grados:["Primero","Segundo","Tercero","Cuarto","Quinto","Sexto"]
					});
				}else{
					setStore({
						grados:["Septimo","Octavo","Noveno","Decimo","Undecimo"]
					});
				}
			},
			listaMaterias(input){
				setStore({
					materias:[data.find(materia => materia.grado === input)]
				});
			},
			enable(input){
				setStore({
					disable:input
				});
			},
			enableMenu(input){
				setStore({
					disableMenu:input
				});
			}

		}
	};
};
