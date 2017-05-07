import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';

/**
 * <App />
 * Wraps all our child components to provide global navigation.
 * This makes it simple to have a component at the index '/' route
 * of our application.
 */
class App extends React.Component {

    changePage(e) {
        e.preventDefault();
    
        browserHistory.push(e.target.getAttribute('href'));
    }

    render() {
        return (
            <div>
                <nav>
                    <a onClick={this.changePage.bind(this)} href='/'>Home</a><br/>
                    <a onClick={this.changePage.bind(this)} href='/profile'>profile</a><br/>
                    <a onClick={this.changePage.bind(this)} href='/anotherpage.html'>Random</a><br/>
                </nav>
                <main>
                    { this.props.children }
                </main>
            </div>
        );
    }
};

export default App;