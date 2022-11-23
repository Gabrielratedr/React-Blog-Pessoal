import React from 'react'
import './Home.css'

let nome = 'Gabriel'

function Home (){
    return (
        <div className='border'>
        <div className='row'>
            <form>
                <h2>Digite seus dados</h2>
                <label> Digite seu nome </label>
                <input type="text" />
                <label> Digite seu sobrenome </label>
                <input type="text"/>
                <div className='column'>
                <label>Digite seu e-mail</label>
                <input type="text" />
                </div>
            </form>
        </div>
        </div>
    );
}

export default Home;