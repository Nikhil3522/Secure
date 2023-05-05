import React, {useEffect, useState} from 'react';

const DecryptResult = (props) => {
  const [resultType, setResultType] = useState(1);
  const { url } = props;
  const firstPart = url.substring(0, url.indexOf("?"));
  console.log("fdsa", firstPart)

    useEffect(() => {
        fetch(firstPart, { method: 'HEAD' })
        .then(response => {
        if (response.headers.get('content-type').startsWith('image/')) {
            setResultType(2);
        } else if (response.headers.get('content-type').startsWith('application/')) {
            setResultType(3);
        }
        })
        .catch(error => {
        console.error(error);
        return <h1>error: {url}</h1>;
        });
    }, []);

    useEffect(() => {
        console.log("useEffect resultType", resultType);
    }, [resultType])

    return (
        resultType === 3 ?
            <>
                <h1>URl {url}</h1>
                <object data={url} type="application/pdf" width="100%" height="100%">
                    <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
                </object>
                {/* <a href={url} target="_blank" rel="noopener noreferrer">File</a> */}
            </>
        : resultType === 2 ?
            <>
                <h1>fsda {url}</h1>
                <img src={url} alt="Image" width="100px"/>
                {console.log("url***********", url)}
            </>
        : <h1>error: {url}</h1>


        // resultType == 1 ?
        // <h1>error: {url}</h1> :
        // resultType == 2 ?
        // <>
        // <h1>fsda {url}</h1>
        // <img src={url} alt="Image" width="100px"/>
        // {console.log("url***********", url)}
        // </>
        // :
        // <>
        // <h1>URl {url}</h1>
        // <object data={url} type="application/pdf" width="100%" height="100%">
        //     <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
        // </object>        
    )
}

//  U2FsdGVkX1+jwkziK9BWpfBG1PN+EFnGFZm3VuAZTyQHi8QMp1++03pX08sNh9jHcbMgd2nVtzbwa4sctndXUDK39MPCuwPC3E8Seklt0jMBK/tE/jHPXAwVFpsFYjlDyuPQab71s6/nXESbGCAoZor64CPmtszMGDn39gj2/OYtOZLnKKine8MYzzNSbAJvdlMZfDeIENCNlU2GxrNnBfaNXJ7Kcka6/X1l7ykh2D+/1uCOykVP9WCljB8PpFavof5MWmeffD07GR+pQT5dt70FK5JXy+VuHcbKn2sZvav2tCkOBvNIZlc7mEr0u0VS 
// qwefile
export default DecryptResult;