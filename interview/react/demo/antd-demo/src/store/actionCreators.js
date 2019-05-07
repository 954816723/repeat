import {CHANGE_INPUT_VALUE,DEL_LIST_VALUE} from './actionTypes';

export const getVal = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getBtn = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})
export const getDel = (index) => ({
    type: DEL_LIST_VALUE,
    index
})