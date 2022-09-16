import { useState } from 'react';
import { Box, Divider } from '@mui/material';
import ChatComposerToolbar from './chat-composer-toolbar';
import ChatMessageAdd from './chat-message-add';

function ChatComposer(props){
    const [recipients, setRecipients] = useState([]);

    const handleAddRecipient = (recipient) => {
        setRecipients((prevState) => {
            const exists = prevState.find((_recipient) => _recipient.id === recipient.id);

            if (!exists) {
                return [...recipients, recipient];
            }

            return recipients;
        });
    };

    const handleRemoveRecipient = (recipientId) => {
        setRecipients((prevState) => prevState.filter((recipient) => recipient.id !== recipientId));
    };

    const handleSendMessage = async (body) => {

    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
            }}
            {...props}>

            <Box
                sx={{
                    backgroundColor: 'background.default',
                    flexGrow: 1
                }}
            />
            <Divider />
            <ChatMessageAdd
                disabled={recipients.length === 0}
                onSend={handleSendMessage}
            />
        </Box>
    );
};

export default ChatComposer;