import * as notesAPI from '../api/notes';
import { createPromiseThunk, reduerUtils } from '../lib/asyncUtils';
// action types
const GET_NOTES = 'GET_NOTES';
const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS';
const GET_NOTES_ERROR = 'GET_NOTES_ERROR';

const GET_NOTE = 'GET_NOTE';
const GET_NOTE_SUCCESS = 'GET_NOTE_SUCCESS';
const GET_NOTE_ERROR = 'GET_NOTE_ERROR';

export const getNotes = createPromiseThunk('GET_NOTES', notesAPI.getNotes);
export const getNote = createPromiseThunk('GET_NOTE', notesAPI.getNote);

const initialState = {
    notes: reduerUtils.initial(),
    node: reduerUtils.initial()
};

export default function notes(state = initialState, action) {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                notes: reduerUtils.loading()
            };
        case GET_NOTES_SUCCESS:
            return {
                ...state,
                notes: reduerUtils.success(action.notes)
            };
        case GET_NOTES_ERROR:
            return {
                ...state,
                notes: reduerUtils.error(action.error)
            };
        case GET_NOTE:
            return {
                ...state,
                notes: reduerUtils.loading()
            };
        case GET_NOTE_SUCCESS:
            return {
                ...state,
                note: reduerUtils.success(action.note)
            };
        case GET_NOTE_ERROR:
            return {
                ...state,
                note: reduerUtils.error(action.error)
            };
        default:
            return state;
    }
}
