import React, {useEffect, useState} from 'react';
import axios from "axios";

const API_KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({language, text}) => {
    const [translatedText, setTranslatedText] = useState('');
    const [debouncingText, setDebouncingText] = useState(text);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setDebouncingText(text);
        }, 1000);

        return () => clearTimeout(timeoutID);
    }, [text]);

    useEffect(() => {
        (async () => {
            if (debouncingText) {
                const response = await axios.post('https://translation.googleapis.com/language/translate/v2',
                    {},
                    {
                        params: {
                            q: debouncingText,
                            target: language.value,
                            key: API_KEY
                        }
                    }
                );
                setTranslatedText(response.data?.data?.translations?.[0]?.translatedText ?? '');
            } else {
                setTranslatedText('');
            }
        })();
    }, [language, debouncingText]);
    return (
        <div>
            <h1 className='ui header'>{translatedText}</h1>
        </div>
    );
};

export default Convert;