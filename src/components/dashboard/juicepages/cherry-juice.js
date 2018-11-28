import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Cherry from '../juices/cherry-juice.png'

const ProjectDetails = (props) => {

    const { auth } = props;
    if (!auth.uid) { return <Redirect to='/signin' />}

        return (
        <div className="container section project-details">
        <div className="row">
            <div className="col s8">
            <div className="card z-depth-0 transparent" >
                <div className="card-content ">
                
                    <span className="card-title"><h4>Homemade Cherry Juice Recipe</h4></span>
                    
          
               <p>You can use this recipe for any amount of cherries.</p>        
                
                <h5>INGREDIENTS</h5>
                <p>Lots of cherries, steam juicer</p>
                <br />
                <p>1. Wash and sort your cherries, no need to pit of remove stems. I do like to pick out the ones that are rotten and any leaves that might get mixed in.
                <br />
2. Get the steam juicer washed and set up according to instructions. Fill the hopper with your cherries. If you are using more than one type, mix them as you add them.
<br />
3. Let them steam for an hour, making sure the bottom doesn’t run out of water. The hopper full of cherries produces about four quarts of juice. If you have more cherries to do, throw out (compost or feed it to your chickens) the steamed cherries before doing your next batch.
<br />
4. Process the juice in a hot water bath for 15 minutes (for quarts) for us high elevations and 10 minutes for you low-lyers.
<br />
5. After some time enjoy your juice!
</p>

                </div>
                </div>
                </div>
                <div className="col s4">
            <img className="responsive-img" src={Cherry} />
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
