import Header from './Header';
import GameSpace from './GameSpace';
import Footer from './Footer';
import {useState} from 'react';

export default function Game(){
    const [mode, setMode] = useState('light');
    return(
        <>
            <Header mode={mode} />
            <GameSpace />
            <Footer />
        </>
    );
}