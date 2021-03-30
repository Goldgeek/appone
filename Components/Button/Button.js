import React from 'react';



export class Button extends React.Component{
    render(){
        return(
            <Button onClick={this.props.onClick} >Refrech</Button>
        )
    }
}