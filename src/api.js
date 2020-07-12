import React from 'react';

import Axios from 'axios';



export default class ApiData extends React.Component{
    constructor(props)
    {
     super(props);
         this.state ={
             error: null,
             isLoaded : false,
             data :[]
             
         };
     
    }
    componentDidMount(){
        Axios.get('https://api.github.com/users')
        .then(response => {
            this.setState({data : response.data});
            this.setState({isLoaded : true});
        })
        .catch(error =>{
            this.setState({error : error});
        })
    }
    render(){
        if (this.state.error){
            return <div>
                Error : {this.state.error.message}
            </div>
        }
        else if(!this.state.isLoaded){
            return <div>Loading......</div>;
        }
        else{
            return (
        <div>
            <h1>GitHub Users</h1>
            <br/>
            {
                this.state.data.map((item, index) =>(
                    <div key={index} className='UserBlock'>
                        <img src={item.avatar_url}
                        alt='User Icon'></img>
                        <div className='UserDetails'>
                <p>Username:{item.login}</p>
                <p>ID : {item.id}</p>
                        </div>
                    </div>
                ))
            }
        </div>
            );
        }
    }
}