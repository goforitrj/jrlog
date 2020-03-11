import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Note from '../components/Note';
import { getNote } from '../modules/notes';

const NoteContainer = ({ noteId }) => {
    const { data, loading, error } = useSelector(state => state.notes.note);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNote(noteId));
    }, [noteId, dispatch]);

    if (loading) return <div>loading...</div>;
    if (error) return <div>Error!</div>;
    if (!data) return null;

    return <Note note={data}></Note>;
};

export default NoteContainer;
