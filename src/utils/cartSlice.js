import { Action } from "@remix-run/router";

const cartSlice = createSlice({
    name: 'Cart'
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, Action) => {
            //nutating the state here
            state.items.push(Action.payload);
        }
    }
})