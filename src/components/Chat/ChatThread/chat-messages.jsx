import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { ChatMessage } from './chat-message';
import { format } from 'date-fns';

const ChatMessages = (props) => {
    const {  participants, ...other } = props;
    // To get the user from the authContext, you can use
    // `const { user } = useAuth();`
    const user = {
        avatar: '/static/mock-images/avatars/avatar-anika_visser.png',
        name: 'Anika Visser'
    };
    const messages = [
        {
            body:"hellos",
            contentType:"",
            createdAt:new Date(),
            id:1,
            authorId:1,
        },
        {
            body:"Morning, I’m doing some work over the weekend - shocking yea. Can you send me the Jira invite so I can access the tasks?",
            contentType:"",
            createdAt:new Date(),
            id:2,
            authorId:2,
        },
        {
            body:"Yes, sure, but... why? I think it’s best not to get overwhelmed with too much work. Get some time off, Fran!",
            contentType:"",
            createdAt:new Date(),
            id:2,
            authorId:2,
        }
    ];
    console.log("messages",messages)

    return (
        <Box
            sx={{ p: 2 }}>
            {messages.map((message) => {
                const participant ='';
                let authorAvatar;
                let authorName;
                let authorType;

                // Since chat mock db is not synced with external auth providers
                // we set the user details from user auth state instead of thread participants
                if (message.authorId === 1) {
                    authorAvatar = "";
                    authorName = 'Me';
                    authorType = 'user';
                } else {
                    authorAvatar = "";
                    authorName = "James";
                    authorType = 'contact';
                }

                return (
                    <ChatMessage
                        authorAvatar={authorAvatar}
                        authorName={authorName}
                        authorType={authorType}
                        body={message.body}
                        contentType={message.contentType}
                        createdAt={message.createdAt}
                        key={message.id}
                    />
                );
            })}
        </Box>
    );
};

ChatMessages.propTypes = {
    messages: PropTypes.array,
    participants: PropTypes.array
};
export default ChatMessages;