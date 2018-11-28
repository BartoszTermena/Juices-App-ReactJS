import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import grape from '../juices/grape-juice.png'

const ProjectDetails = (props) => {

    const {  auth } = props;
    if (!auth.uid) { return <Redirect to='/signin' />}

        return (
        <div className="container section project-details">
        <div className="row">
            <div className="col s8">
            <div className="card z-depth-0 transparent" >
                <div className="card-content ">
                
                    <span className="card-title"><h4>Homemade Grape Juice Recipe</h4></span>
                    
          
               <p>You can use this recipe for any amount of grapes. A pound of grapes will yield about one cup of juice</p>        
                
                <h5>INGREDIENTS</h5>
                <p>4 to 8 pounds fresh picked grapes (we use Concord grapes)</p>
                <br />
                <p>1. Pick the grapes. Get a large basket, wear long sleaves and a hat, bring clippers, and fill up the basket with grape bunches. Keep in mind that a pound of grapes will yield a little less than a cup of juice.
                <br />
2. Rinse and de-stem the grapes. Put grapes in a basin filled with water. Then rinse the individual grapes, picking them away from the stem, collecting the grapes in a large bowl, and discarding the green unripe and old shriveled grapes.
<br />
3. Mash the grapes. With a potato masher, mash away at the grapes so the juice begins to flow. If you have picked a lot of grapes, you may need to work in batches. We have found it easiest to mash about 4 lbs of grapes at a time.
<br />
5. Prepare sieve or cheesecloth. Get another large pot, place a large fine mesh sieve over it. Alternatively you can cover it with two layers of cheesecloth, secure with a rubber band. Make sure pot is sitting on a plate to catch any juice that may run over.
<br />
6. Strain grape mixture. Ladle grape mixture over fine mesh sieve or cheesecloth to strain. Let sit for several hours or overnight in the refrigerator to strain completely.
<br />
7. Finishing. Remove sieve or cheesecloth.* Note that sediment will have formed on the bottom of the container. Rinse out the sieve or cheesecloth and strain the juice again, to filter out some of the sediment. Pour or ladle juice into containers. Enjoy your juice!</p>
                </div>
                </div>
                </div>
                <div className="col s4">
            <img className="responsive-img" src={grape} />
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
