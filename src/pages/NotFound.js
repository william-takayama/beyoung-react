import React from 'react';

const NotFound = () => {

    const styleText = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        paddingTop: '2em'
    }

    return (
        <>
            <h1 style={styleText}>Página Não Encontrada</h1>
        </>
    );
}

export default NotFound;