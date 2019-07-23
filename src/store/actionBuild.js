import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM, GET_LIST,GET_IMGS} from './actionTypes'

export const changeInputAction=(value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction=()=>({
    type:ADD_ITEM
})

export const deleteItemAction=(index)=>({
    type:DELETE_ITEM,
    index
})

export const getListAction=(datalist)=>({
    type:GET_LIST,
    datalist
})

export const getImgsAction=(dataimg)=>({
    type:GET_IMGS,
    dataimg
})