import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import lemon from '../juices/lemon-juice.png'


const ProjectDetails = (props) => {

    const {  auth } = props;
    if (!auth.uid) { return <Redirect to='/signin' />}

        return (
        <div className="container section project-details">
            <div className="row">
            <div className="col s8">
            <div className="card z-depth-0 transparent" >
                <div className="card-content">
                
                    <span className="card-title"><h4>Homemade Lemon Juice Recipe</h4></span>
                    
          
                       
                
                <h5>INGREDIENTS</h5>
                <p>Lemon, sugar, water</p>
                <br />
                <p>1.Find a suitable squeezing item. You can squeeze juice manually using a citrus squeezer or using a food processor with a juicer component.
                <br />
                2. Cut the lemons in half.
                <br />
                3.
                Squeeze the lemon juice into a bowl or cup. Make sure that you get all the juice out of each half. Add some sugar and water. Put a lemon on top of your glass and enjoy your drink!
                </p>
                </div>
                   
            </div>
        </div>
        <div className="col s4">
            <img className="responsive-img" src={lemon} />
        </div>
        </div>
        </div>
        )
    }
   
const mapStateToProps = (state) => { 
    return {
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps)

)(ProjectDetails);
