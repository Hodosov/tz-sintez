import { CHANGE_VIEW_PORT, SET_MARKER_VIEW_PORT, SET_START_ZOOM } from './types'

const initialState = {
    viewport: {
        latitude: 60.25,
        longitude: 94.16,
        zoom: 3.5
    },
    markers: [
        {   id: 0,
            title: 'Marker 1! 👋',
            latitude: 61.60,
            longitude: 98.75,
        },
        {   
            id: 1,
            title: 'Marker 2! 👋',
            latitude: 64.60,
            longitude: 91.75,
        },
        {   
            id: 2,
            title: 'Marker 3! 👋',
            latitude: 57.60,
            longitude: 85.75,
        }]
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VIEW_PORT:
            return {
                ...state,
                viewport: action.payload
            }
        case SET_START_ZOOM: 
            return {
                ...state,
                viewport: initialState.viewport
            }
        case SET_MARKER_VIEW_PORT:
            return {
                ...state,
                viewport: action.payload
            }
        default: return state
    }
}

export const changeViewPortActionCreator = (payload) => ({type: CHANGE_VIEW_PORT, payload})
export const setStartZoomActionCreator = () => ({type: SET_START_ZOOM})
export const setMarkerViewPortActionCreator = (payload) => ({type: SET_MARKER_VIEW_PORT, payload})