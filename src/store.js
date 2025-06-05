import { createMemoryRouter } from "react-router-dom";

export const initialStore=()=>{

    	
        return{
          contacts: []
          }
  
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'load_contacts':
		
        return{...store, contacts:action.payload }

	case 'add_contact':
	
	
      return {
        
      };
    default:
      throw Error('Unknown action.');
  }    
}
