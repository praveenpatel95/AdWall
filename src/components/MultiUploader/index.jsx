import React, {useState, useCallback} from 'react'
import { useDropzone } from 'react-dropzone';

import {
    Box,
    Typography,
    Link

} from '@mui/material';

function MultiUploader(props){
    const {files, setFiles, accept} = props

    const onDrop = useCallback(acceptedFiles => {
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    }, [setFiles]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept
    });

    return (
        <Box
            sx={{
                alignItems: 'center',
                border: 1,
                borderRadius: 1,
                borderStyle: 'dashed',
                borderColor: 'divider',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                outline: 'none',
                p: 6,
                ...(isDragActive && {
                    backgroundColor: 'action.active',
                    opacity: 0.5
                }),
                '&:hover': {
                    backgroundColor: 'action.hover',
                    cursor: 'pointer',
                    opacity: 0.5
                }
            }}
            {...getRootProps()}>
            <input {...getInputProps()} />
            <Box
                sx={{
                    '& img': {
                        width: 100
                    }
                }}
            >
                <img
                    alt="Select file"
                    src={`${process.env.PUBLIC_URL}/assets/images/copy_files.svg`}
                />
            </Box>
            <Box sx={{ p: 2 }}>
                <Typography variant="h4">
                    Select image
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="body1">
                        Drop files
                        {' '}
                        <Link underline="always">
                            browse
                        </Link>
                        {' '}
                        thorough your machine
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
export default MultiUploader;