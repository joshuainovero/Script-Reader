import React, { useEffect } from 'react';
import './media.css'


class Process extends React.Component {
    constructor(props){
        super(props);
        this.state = {textcontent : [], 
            currentI : -1,
            entered: false
        }
    }

    componentDidMount(){
        window.addEventListener("click",() => {
            if (this.state.entered && this.state.currentI < this.state.textcontent.length - 1){
                const resultText = document.getElementById('main-p');
                this.state.currentI += 1;
                resultText.innerHTML = this.state.textcontent[this.state.currentI];
                console.log('hey');
            }
        });

        window.addEventListener('keydown', (e)=>{
            if (e.key === 'Escape' && this.state.entered){
                window.location.reload();
            }
        });
    }
    
    processText = () => {
        this.state.textcontent = document.getElementById('tarea').value.split('.');
        document.getElementById('textareainput').classList.add('hidden');
        document.getElementById('main-p').classList.remove('hidden');
        this.state.entered = true;
        document.querySelector('body').style.backgroundColor = "black";
        document.querySelector('body').style.color = "white";
        console.log(this.state.textcontent);
    }
    
    render(){
        return(
            <div id="main-p">
                <p id="result" className="hidden"></p>
                <div id="textareainput">
                    <textarea name="area" id="tarea" cols="70" rows="18" placeholder="Enter text content"></textarea>
                    <br></br><br></br>
                    <button onClick={this.processText}>Click me</button>
               </div>
            </div>
        );
    }
}


export default Process;