import React from 'react';
import './stylesheets/App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';

class App extends React.Component {

    state = {
        // NavBar state start
        title: 'My Portfolio',
        buttons: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About',
                link: '/about'
            },
            {
                name: 'Projects',
                link: '/projects'
            },
            {
                name: 'Contact',
                link: '/contact'
            },

        ],
        // NavBar state end
    }

    render() {
        return (
            <div className="App">
                <header>
                <NavBar title={this.state.title} buttons={this.state.buttons}/>
                </header>
                <body>
                <Main/>
                </body>
            </div>
        );
    }
}

export default App;
