import { createSlice } from "@reduxjs/toolkit"; 


export const CatalogoReducer = createSlice({
    name: "pagina_catalogo",
    initialState: {
        data: "http://192.168.0.160:3000/paginas/document-page0.pdf"
    },
    reducers: {
        set_PaginaCatalogo: (state=[], action) => {
            state.data = action.payload;
        }
    }
})

export default CatalogoReducer.reducer

export const {set_PaginaCatalogo} = CatalogoReducer.actions

export const update_state = (pagina) => (dispatch) => {
        dispatch(set_PaginaCatalogo("http://192.168.0.160:3000/paginas/document-page"+String(pagina)+".pdf"))
}


