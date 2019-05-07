import React, { Component } from 'react';

class WebApp extends Component {
    state={
        data:[]
    }

    componentDidMount(){
        const url="http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=%E9%93%B6%E9%AD%82&bk_length=600";

        fetch(url).then(result=>result.json()).then(result=>{
            this.setState({
                data:result,
            })
        })
    }

    render() {
        const result=this.state.data.map((entry,index)=>{
            return <li key={index}>{entry}</li>
        })

        return (
            <ul>
                {result}
            </ul>
        );
    }
}

export default WebApp;