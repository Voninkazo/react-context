import React from 'react';

import Header from './Header';
import Button from './Button';

// import React from "react"
// import Header from "./Header";
// import Main from './Main';
// import UserNameContext from './userNameContext';



// function App() {
//     return (
//         <div>
//             <Header/>
// 			<UserNameContext.Consumer>
// 				{username=>(
// 					<Main username={username}/>
// 				)}
// 			</UserNameContext.Consumer>
// 			<UserNameContext.Consumer>
// 				{username => (
// 				<div>
// 					<p className="main">This is {username}</p>
// 				</div>
// 				)}
// 			</UserNameContext.Consumer>
//         </div>
// 	)
// }

// export default App



function App() {
	return (
		<div>
			<Header />
			<Button />
		</div>
	);
}

export default App;
