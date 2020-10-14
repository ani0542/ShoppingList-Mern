import React, { Component } from 'react'

export class Home extends Component {
    state={
        text:'',
        mywishes:[{_id:1,wish:"loading"}]
    }


    //getting or fetching all items
    componentDidMount=()=>{
        fetch('/data')
        .then((res)=>{
          return(res.json())
        })
        .then((data)=>{
          console.log(data)
          this.setState({
            mywishes:data
          })
        })
    }


    handleChange=(e)=>{
        //   this.setState({

        //   })
        // console.log(e.target.value)
        this.setState({
            text:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
    
        // const url = "http://localhost:5000/sent";
         var data = new URLSearchParams();
          for(const pair of new FormData(e.target)){
            data.append(pair[0],pair[1])
          }
          //localhost:5000/sent
         fetch('/sent',{
             method:"POST",
             body:data,
            
         }).then(res=>res.json())
         .then(res2 => {
           console.log(res2)
         
           this.setState({
            mywishes:[...this.state.mywishes,res2]
          })
         }); 
    }
   

   
    handleClick=(id)=>{
            fetch('/remove/'+id,{
              method:"delete"
            })
            .then(res=>res.json())
            .then((res2)=>{
              console.log(res2)
              const newWishes = this.state.mywishes.filter(item=>{
                return item._id !== res2._id
              })
              this.setState({
                mywishes:newWishes
              })
            })
    }

   
    render() {
          // const list = 
          const list = this.state.mywishes.map(item=>{
            return <a className="collection-item" key={item._id}  style={{cursor:'pointer'}} onClick={()=>this.handleClick(item._id)}>{item.wish}</a>
          })
        return (
            <div>
                                   <form onSubmit={this.handleSubmit}>
                                            <input 
                                            type="text"
                                            name="item"
                                            onChange={this.handleChange}
                                            value={this.state.text}
                                            />
                                             <button type="submit" className="waves-effect  waves-light btn">Add</button> 
                                    </form>
                                    <div className="collection">
                                                {
                                                            list
                                                }
                                     </div>

            </div>
        )
    }
}

export default Home

