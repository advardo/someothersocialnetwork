const state = {

    profilePage: {
        posts: [
            {id: 1, message: "The mest photo", likesCount: 12},
            {id: 2, message: "Foreigner", likesCount: 19},
            {id: 3, message: "Look like alien", likesCount: 8},
            {id: 4, message: "Piece of god", likesCount: 10},
            {id: 5, message: "Follow me back, pleaseeeeee", likesCount: 1},
        ]
    },

    dialogsPage: {
        dialogs: [
            {id:1, name: "Lena"},
            {id:2, name: "Andrey"},
            {id:3, name: "Sova"},
            {id:4, name: "Sanya"},
            {id:5, name: "Vitaliy"},
            {id:6, name: "Alexey"}

        ],
        messages: [ 
            { id: 1, message: "hi"},
            { id: 2, message: "Opa"},
            { id: 3, message: "It's me"},
            { id: 4, message: "hello, mate"},
            { id: 5, message: "hi"},
        ]
    }


}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
};

export default state;