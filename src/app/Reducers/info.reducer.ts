import * as InfoActions from '../actions/info.actions'

export type Action = InfoActions.All;

const defaultState: string = 'Default Message';
const newState = (state: any, newData: any) => {
    return Object.assign({}, state, newData)
}

export function infoReducer(state: string = defaultState, action: Action) {
    switch (action.type) {
        case InfoActions.CHANGE_INFO:
            return newState(state, { info: action.payload })
        default:
            return state;
    }
}