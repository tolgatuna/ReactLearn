import React, {useEffect, useState} from 'react';
import axios from "axios";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('programming');
    const [debouncingSearchTerm, setDebouncingSearchTerm] = useState(searchTerm);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncingSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [searchTerm]);


    useEffect(() => {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncingSearchTerm
                }
            });
            setResults(data?.query?.search ? data.query?.search : []);
        }
        search();
    }, [debouncingSearchTerm]);

    const mapSearchResult = results.map(r => (
        <div className='item' key={r.pageid}>
            <div className='right floated content'>
                <a className='ui button header'
                   href={`https://en.wikipedia.org?/curid=${r.pageid}`}
                >
                    GO
                </a>
            </div>
            <div className='content'>
                <div className='header'>{r.title}</div>
                <span dangerouslySetInnerHTML={{__html: r.snippet}}></span>
            </div>
        </div>
    ))

    return (
        <>
            <div>
                <div className='ui form'>
                    <div className='field'>
                        <label>Enter Search Term</label>
                        <input className='input'
                               value={searchTerm}
                               onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className='ui celled list'>
                {mapSearchResult}
            </div>
        </>
    );
};

export default Search;