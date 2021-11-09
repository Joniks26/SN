const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE :
            let body = action.newMessageBody;
            return  {
                ...state,
                messages: [...state.messages, {id: 6, message: body} ]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;