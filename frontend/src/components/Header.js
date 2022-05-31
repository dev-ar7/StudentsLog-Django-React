import React from 'react';


class Header extends React.Component {

    render() {
        return (
            <div className='text-center'>
                <img 
                    src='https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?t=st=1653923713~exp=1653924313~hmac=3b4e7e69148127cd4ff355e8f1e6b0a19d11d8072dc0ad46ebc5694aa6dd146b&w=1060'
                    width='300'
                    className = 'img-thumbnail'
                    style={{ marginTop: '20px' }}
                    alt='Img'
                />
                <hr/>
                <h1>
                    <i>Students Data</i>
                </h1>
                <h5>
                    Made With ❤ by Arnab Gupta
                </h5>
            </div>
        );
    }
}

export default Header;