import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import orange from '../juices/orange-juice.png'

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
                    
          
               <p>You can use this recipe for any amount of oranges.</p>        
                
                <h5>INGREDIENTS</h5>
                <p>Oranges, knife, squeezer, spoon</p>
                <br />
                <p>1. Soften the orange. Tightly squeeze or roll the oranges firmly with the palm of your hand across the counter or table to soften them up.
                <br />
2. Cut the orange. Slice the orange in half and remove the seeds. If you want to go seedless, use navel oranges.
<br />
3. Juice the orange. Grip the one of the orange halves tightly and squeeze it by hand, using a plain juicer to coax all the juice out.
<br />
4. 
Add pulp. Scrape the orange with a spoon and add the pulp directly to the juice if you use a hand juicer. If you prefer clear juice, pour the juice through a strainer before drinking.Add some pinch of black salt or sugar for more flavor. Some oranges are already sweet.
<br />
5. 
Drink up! Enjoy a crisp, cold glass of freshly squeezed, unpasteurized orange juice, the way it was intended to be!

</p>

                </div>
                </div>
                </div>
                <div className="col s4">
            <img className="responsive-img" src={orange} />
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
