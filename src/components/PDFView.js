import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const PDFView = () => {

    const location = useLocation();
    const { semester, type, courseCode, module } = location.state || {}; 

    const [links, setLinks] = useState({});
    const userKey = process.env.REACT_APP_USER_KEY;

    useEffect(() => {
        fetchLinks();
        // eslint-disable-next-line
      }, [])

    const fetchLinks = async () =>{
        let data = await fetch(`https://raw.githubusercontent.com/starprojectsrepos/codevault-files/main/links/sem${semester}.json`);
        let parsedData = await data.json();
        setLinks(parsedData);
        console.log(parsedData);
    }

    let code = links?.[courseCode]?.[type]?.[module] || '';
    let url = `https://1drv.ms/b/c/${userKey}/${code}`;

    return (
        <div>
            <div>
                <iframe className='border border-2 border-dark' src={url} width="98%" style={{ height: '90vh' }} title="notes"/>
            </div>
        </div>
    )
}

export default PDFView

