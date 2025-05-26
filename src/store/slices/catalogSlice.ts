import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PDF_BASE_URL } from '@/lib/constants';
import { CatalogState } from '@/types';

const initialState: CatalogState = {
  data: `${PDF_BASE_URL}/paginas/document-page0.pdf`
};

export const catalogSlice = createSlice({
  name: 'pagina_catalogo',
  initialState,
  reducers: {
    setPaginaCatalogo: (state, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
  },
});

export const { setPaginaCatalogo } = catalogSlice.actions;

// Thunk action para actualizar página
export const updateCatalogPage = (pagina: number) => (dispatch: (action: ReturnType<typeof setPaginaCatalogo>) => void) => {
  dispatch(setPaginaCatalogo(`${PDF_BASE_URL}/paginas/document-page${String(pagina)}.pdf`));
};

export const catalogReducer = catalogSlice.reducer; 