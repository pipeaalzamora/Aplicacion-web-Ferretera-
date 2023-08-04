import { configureStore } from '@reduxjs/toolkit';
import pagina_catalogo from './slices/CatalogoReducer'


/*Se inicializan todos los reducers */
export default configureStore({
  reducer: {
    pagina_catalogo
  },
});