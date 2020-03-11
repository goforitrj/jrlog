import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoteList from '../components/NoteList';
import { getNotes } from '../modules/notes';

const NoteListContainer = () => {
    const { data, loading, error } = useSelector(state => state.notes.notes);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotes());
    }, [dispatch]);

    if (loading) return <div>loading...</div>;
    if (error) return <div>error!</div>;
    if (!data) return null;

    return <NoteList notes={data}></NoteList>;
};

export default NoteListContainer;
