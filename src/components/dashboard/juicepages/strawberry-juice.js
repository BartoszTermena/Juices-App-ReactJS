import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import Strawberry from '../juices/strawberry-juice.png'

const ProjectDetails = (props) => {

    const { auth } = props;
    if (!auth.uid) { return <Redirect to='/signin' />}

        return (
        <div className="container section project-details">
        <div className="row">
            <div className="col s8">
            <div className="card z-depth-0 transparent" >
                <div className="card-content ">
                
                    <span className="card-title"><h4>Homemade Strawberry Juice Recipe</h4></span>
                    
          
               <p>You can use this recipe for any amount of strawberries.</p>        
                
                <h5>INGREDIENTS</h5>
                <p>2- pounds fresh strawberries , cleaned and halved, 2- cups sugar, glass bottle, water or soda water</p>
                <br />
                <p>1. Place half of the strawberries in a large bowl; cover with 1-cup of sugar
                <br />
2. Add the remaining strawberries and sprinkle with the rest of the sugar.
<br />
3. Cover the bowl and place in the fridge for 24 hours.
<br />
4. Transfer the berries and the juice into a large saucepan.
<br />
5. Over medium-high heat, bring the mixture to a boil; turn the heat down and continue to simmer for 30 minutes.
<br />
6. Remove from heat and strain the mixture through a fine mesh strainer into a large bowl.
<br />
7. Using a spatula, press the strawberries to release all the juices.
<br />
8. In the meantime, preheat oven to 170.
<br />
9. Wash the glass bottle; place it on a baking sheet and put it in the oven for 30 minutes.
<br />
10. Sterilize the cap of the bottle by placing it in a bowl and pour boiling water right over it.
<br />
11. Remove glass bottle from the oven.
<br />
12. Pour the juice into the bottle.
<br />
13. Seal with the cap and let completely cool.
<br />
14. Store in refrigerator.
<br /> 
15. After some time enjoy your juice!
</p>

                </div>
                </div>
                </div>
                <div className="col s4">
            <img className="responsive-img" src={Strawberry} />
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
