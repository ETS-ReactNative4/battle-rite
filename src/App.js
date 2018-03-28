import React, {Component} from 'react'
import {Switch, Route} from '../node_modules/react-router-dom/umd/react-router-dom.min.js'

// Components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import News from './components/News/News'
import Guides from './components/Guides/Guides'
import Champions from './components/Guides/Champions'
import Videos from './components/Videos/Videos'
import Staff from './components/Staff/Staff'
import Contact from './components/Contact/Contact'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            theme: 'dark',
            championSelected: '',
            pathname: this.props.location
        }
    }
    switchTheme = (theme) => {
        this.setState({theme})
    }
    render() {
        return (
            <div className={`App h-100 ${this.state.theme}-theme bg-${this.state.theme}`} data-theme={this.state.theme}>
                <Header theme={this.switchTheme}/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/news' component={News}/>
                    <Route exact path='/guides' theme={this.state.theme} component={Guides}/>
                    <Route path='/champions/:id' component={Champions}/>
                    <Route path='/videos' component={Videos}/>
                    <Route path='/staff' component={Staff}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </div>
        )
    }
}
