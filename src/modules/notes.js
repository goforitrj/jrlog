import * as notesAPI from '../api/notes';
import {
    createPromiseThunk,
    reduerUtils,
    handleAsyncActions
} from '../lib/asyncUtils';
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
    note: reduerUtils.initial()
};

export default function notes(state = initialState, action) {
    switch (action.type) {
        case GET_NOTES:
        case GET_NOTES_SUCCESS:
        case GET_NOTES_ERROR:
            return handleAsyncActions('GET_NOTES', 'notes')(state, action);
        case GET_NOTE:
        case GET_NOTE_SUCCESS:
        case GET_NOTE_ERROR:
            return handleAsyncActions('GET_NOTE', 'note')(state, action);
        default:
            return state;
    }
}
