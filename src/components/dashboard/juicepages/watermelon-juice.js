import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import watermelon from '../juices/watermelon-juice.png'

const ProjectDetails = (props) => {

    const { auth } = props;
    if (!auth.uid) { return <Redirect to='/signin' />}

        return (
        <div className="container section project-details">
        <div className="row">
            <div className="col s8">
            <div className="card z-depth-0 transparent" >
                <div className="card-content ">
                
                    <span className="card-title"><h4>Homemade Watermelon Juice Recipe</h4></span>
                    
          
               <p>You can use this recipe for any amount of Watermelons.</p>        
                
                <h5>INGREDIENTS</h5>
                <p>1 small sweet watermelon (a 6 pounder will do), 1 small lime, juiced</p>
                <br />
                <p>1. Slice the watermelon in half. Assuming your watermelon isn’t seedless, slice the halves into smaller strips and use a small spoon to scoop out the seeds. Discard the seeds, and scoop chunks of watermelon from the rind into the blender. If the watermelon is seedless, use a big spoon to scoop chunks of watermelon flesh into the blender. Discard the rind.
                <br />
2. Blend the watermelon until it is totally pulverized. This shouldn’t take more than a minute. Squeeze the juice of one small lime into the blender and blend for a few seconds. If your watermelon is notably pulpy, pour the mixture through a fine mesh strainer into a pitcher. If not, you can pour it directly into glasses filled with ice.
<br />
3. Enjoy your juice!

</p>

                </div>
                </div>
                </div>
                <div className="col s4">
            <img className="responsive-img" src={watermelon} />
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
