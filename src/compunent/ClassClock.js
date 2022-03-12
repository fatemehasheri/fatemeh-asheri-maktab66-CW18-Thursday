import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date(),
            colors: ""
        }
    }

    setTime = () => {
        this.setState({
            time: new Date(),
            
        }) 
        //this.addColor()
    }
    addColor=() => {
        let random =  Math.floor(Math.random() * 16777215).toString(16);
        this.setState({ colors: "#"+ random});
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setTime(), 1000)
    }
    
    componentDidUpdate(prevProps,prevState) {
        if(prevState.time !==this.state.time) {
            //this.setState({ colors:
                this.addColor()
            //})
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div style={{color:this.state.colors}}>
                {this.state.time.toLocaleTimeString()}
            </div>
        )
    }
}

export default Clock