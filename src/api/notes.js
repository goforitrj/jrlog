const sleep = n => new Promise(resolve => setTimeout(resolve, n));

const notes = [
    {
        id: 1,
        title: 'Today was rainy',
        date: '20200311',
        photoUrl: '',
        body: 'Today was rainy but I went NSW state library again.'
    },
    {
        id: 2,
        title: 'Talked to my sister',
        date: '20200301',
        photoUrl: '',
        body:
            'My sister and I are the best friends. We always talk to each others about almost everything happened to us.'
    },

    {
        id: 3,
        title: "Father's Bday!",
        date: '20200116',
        photoUrl: '../assets/img/fathersbday.png',
        body:
            "Today is my father's bday! I love my family so much. I miss them."
    },
    {
        id: 4,
        title: 'I took an interview!',
        date: '20200108',
        photoUrl: '',
        body:
            'I hope I could get a chance to work as a FE developer in the beautiful city, Sydney.!'
    },
    {
        id: 5,
        title: 'Met Koalas finally!',
        date: '20200101',
        photoUrl: '../assets/img/koala.png',
        body: 'This is my first time to see Koalas. They are super cute!'
    }
];

export const getPosts = async () => {
    await sleep(500);
    return notes;
};

export const getPostById = async id => {
    await sleep(1000);
    return notes.find(note => note.id === id);
};
