import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'HI, how are you?', likes: 12},
                {id: 2, message: "It's my first post!", likes: 111}
            ],
            newPostText: 'Введите текст'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Smems'},
                {id: 2, name: 'Bled'},
                {id: 3, name: 'NoName'},
                {id: 4, name: 'Anonimus'},
                {id: 5, name: 'Snowman'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Im OK'},
                {id: 4, message: 'And you'},
                {id: 5, message: 'Im fine'}
            ],
            newMessageBody: ""
        },
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  //observer - патерн. export in index.js, callback in store.js
    },

    dispatch(action) { // action - объект у которого есть type

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
        }
    }


export default store;
window.state = store;
// store - OOP