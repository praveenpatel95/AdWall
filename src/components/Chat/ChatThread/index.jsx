import React, {useRef, useState, useEffect} from 'react';
import {
    Box,
} from '@mui/material'
import ChatThreadToolbar from './toolbar'
import Scrollbar from '../../scrollbar'
import ChatMessages from './chat-messages';

function ChatThread(props){
    const {user} = props;
    const messagesRef = useRef(null);
    const messages = [];
    const thread = [
        messages => [
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
    ]
    ];

    useEffect(() => {
        // Scroll to bottom of the messages after loading the thread
        if (thread?.messages && messagesRef?.current) {
            const scrollElement = messagesRef.current.getScrollElement();

            scrollElement.scrollTop = messagesRef.current.el.scrollHeight;
        }
    }, [thread]);


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                overflow: 'hidden'
            }}>
            <ChatThreadToolbar user={user} />
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    flexGrow: 1,
                    overflow: 'hidden'
                }}
            >
                <Scrollbar
                    ref={messagesRef}
                    sx={{ maxHeight: '100%', height:'320px' }}
                >
                    <ChatMessages
                        messages={thread?.messages || []}
                        participants={thread?.participants || []}
                    />
                </Scrollbar>
            </Box>

        </Box>
    )
}
export default ChatThread;