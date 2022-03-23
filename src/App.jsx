// import React from "react";

// const App =() =>{

//     const loading = false
//     const title = 'hello world'
    
//     const users = [
//         {id: 1, name: 'Roma'},
//         {id: 2, name: 'Ivan'},
//         {id: 3, name: 'Oleg'},
//     ]

//     const isAuth = true

//     if(loading) return <h1>loading...</h1>

//     return (
//     //     <>
//     // <h1>Hello</h1>
//     // <p>ASASNBCIHJBWN</p>
//     //     </>
//     // React.createElement('div',
//     // { className: 'container'},
//     // React.createElement('h1', {}, 'Hello'))
    


//     <div className="container">
//         <h1>{title}</h1>
//         <h3>Count ({users.length})</h3>
//         <ul>
//             {users.map(user => (
//                 <li key={user.id}>{user.name}</li>
//             ))}
//         </ul>
//         {
//         isAuth ? <button>Войти</button> : <button>Выйти</button>
//         }
//     </div>
//     )
// }


// export default App

// ---------------------------------------------------------------

// Array.prototype.mep = function(callback) {
//     const result = []
//     const thisArr = this
//     for(let i = 0; i < thisArr.length; i++){
//         return result.push(callback(thisArr[i], i, thisArr))
//     }
// }
// console.log(arr.mep(el => el * 2));

import React from 'react'
import Feedbackitem from './Components/Feedbackitem/Feedbackitem'

import Header from './Components/Header/Header'

const App = () => {
    return (
        <>
        <Header />
        <Feedbackitem />
       </>
    )
}
export default App
