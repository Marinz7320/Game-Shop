import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Details_pc.css'
import ShowMore from '../ShowMore'

class Details_xbox extends Component {
    static contextType = DataContext;
    state = {
        xbox: this.context.xboxx
    }

    getXbox = () => {
        if(this.props.match.params.id){
            const res = this.context.xboxx;
            const data = res.filter(item =>{
                return parseInt( item._id ) === parseInt( this.props.match.params.id );
            })
            this.setState({xbox: data})
        }
    }

    componentDidMount() {
        this.getXbox();
    }

    render(){
        const {xbox} = this.state;
        const {addCart} = this.newMethod();
        const {theme, addFavorite} = this.context;
        return(
            <>
                {
                    xbox.map(item => (
                        <div className={theme ? "theme-details" : "details"} key={item._id}>
                            <div><img src={item.src} alt="" width="270px"/></div>
                            <div className="title-details">
                                <div className="game-name"><p>{item.title} (XBOX)</p></div>
                                <div className="content"><p><ShowMore content={item.content}/></p></div>
                            </div>
                            <div className="right-details">
                                <div className="real-price" title="">
                                    <span>{item.price}</span>
                                    <p><sup>EUR</sup></p>
                                </div>
                                <div className="on-sale">
                                    {item.discount ?
                                        <div className="discountt">
                                            <span>{item.onsale}</span>
                                            <p><sup>EUR</sup></p>
                                        </div>
                                        : <div></div>
                                    }
                                    {item.discount ?
                                        <div className="minus">
                                            <span>-{item.discount}%</span>
                                        </div>
                                        : <div></div>
                                    }
                                    <div className={item.new === "new" ? "new-game" : ""}>
                                        <span>{item.new}</span>
                                    </div>
                                </div>
                                <Link to="/cart" title="Add to cart" onClick={() => addCart(item._id)}>Add to cart</Link>
                                <Link to="/favorite" title="Add to favorite" onClick={() => addFavorite(item._id)}>Add to favorite</Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }

    newMethod() {
        return this.context
    }
}

export default Details_xbox