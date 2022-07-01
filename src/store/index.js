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
			disable:false
		},
		actions: {
			
			cambiarCiclo(input){
				if(input === "Primaria"){
					setStore({
						ciclo:[
							{
								tipo:input,
								msg:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit..."
							}
						]
					});
				}else{
					setStore({
						ciclo:[
							{
								tipo:input,
								msg:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,consectetur, adipisci velit..."
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
			}

		}
	};
};
