import React from 'react'
import { connect } from 'react-redux'
import { addToCart} from '../components/actions/cartActions';


 const Home=({addedItems, ...props})=>{
    //   handleClick = (id) =>{
    //    this.props.addToCart(id)
    //   }
    console.log(addedItems);

    let itemList = props.items.map(item=>{
    return (
          <div className="col-6">
          <div className="card" style={{width:'18rem'}} key={item.id}>
          <img src={item.img} class="card-img-top" alt={item.title}/>
          <div class="card-body">
          <h5 class="card-title">{item.title}</h5>
          <p className="card-text">{item.desc}</p>
          <p><b>Price: {item.price}$</b></p>
          <a class="btn btn-primary"  onClick={() => props.addToCart(item.id)}
>Add</a>
              </div>
          </div>
          </div>
    )
    })
    return(
        <div className="container">
            <h3 className="center">Our items</h3>
            <div className="col-6">
                {itemList}
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
      items: state.shop.items,
      addedItems: state.shop.addedItems
    }
  }
 const mapDispatchToProps =(dispatch) =>{
     return{
         addToCart:(id) =>{dispatch(addToCart(id))}
     }
 }

export default connect(mapStateToProps,mapDispatchToProps)(Home)
