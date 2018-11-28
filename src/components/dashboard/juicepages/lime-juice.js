import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import lime from '../juices/lime-juice.png'

const ProjectDetails = (props) => {

    const { auth } = props;
    if (!auth.uid) { return <Redirect to='/signin' />}

        return (
        <div className="container section project-details">
        <div className="row">
            <div className="col s8">
            <div className="card z-depth-0 transparent" >
                <div className="card-content ">
                
                    <span className="card-title"><h4>Homemade Lime Juice Recipe</h4></span>
                    
          
               <p>You can use this recipe for any amount of limes.</p>        
                
                <h5>INGREDIENTS</h5>
                <p>3/4 cup sugar, 3/4 teaspoon citric acid, 1/2 teaspoon tartaric acid, 1 1/2 cups water, 2/3 cup fresh-squeezed lime juice (about 5 large limes), Rind of 3 limes cut into pieces</p>
                <br />
                <p>1. Gather the ingredients.
                <br />
2. Stir acids and sugar together.
<br />
3. Separately, bring water to a boil then add the sugar mixture.
<br />
4. Stir constantly until the sugar is fully dissolved.
<br />
5. Turn off the heat and add lime juice and rind and stir well.
<br />
6. Turn the heat back on and allow to simmer for 1 to 2 minutes.
<br />
7. Place the mix into a well-sealed container and refrigerate overnight.
<br />
8. Strain the lime rinds and pour into an empty, clean bottle with tight-fitting lid.
<br />
9. Place back in the refrigerator and allow to sit for another day before using.
<br />
10. Keep refrigerated, and enjoy your drink!
</p>

                </div>
                </div>
                </div>
                <div className="col s4">
            <img className="responsive-img" src={lime} />
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
