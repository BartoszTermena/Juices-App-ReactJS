import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import juice1 from './juices/grape-juice.png'
import juice2 from './juices/lemon-juice.png';
import juice3 from './juices/lime-juice.png'
import juice4 from './juices/orange-juice.png'
import juice5 from './juices/strawberry-juice.png'
import juice6 from './juices/watermelon-juice.png'
import juice7 from './juices/cherry-juice.png'

export default class JuicesTree extends Component {
  
  render() {
    return (
      <div>
        <ul class="tree">
          <li>
            <span>
            <Link  to={`/juice/grape-juice`}>
              <img className="responsive-img hoverName" src={juice1} />
              </Link>
              </span>
            <ul>
              <li>
              <Link to={`/juice/lemon-juice`}>
                <span><img className="responsive-img hoverName" src={juice2} /></span>
                </Link>
              </li>
              <li>
              <Link to={`/juice/lime-juice`} >
                <span><img className="responsive-img hoverName" src={juice3} /></span>
                </Link>
                <ul>
                  <li class="origin">
                  <Link to={`/juice/orange-juice`}>
                    <span><img className="responsive-img hoverName" src={juice4} /></span>
                    </Link>
                  </li>
                  <li>
                  <Link to={`/juice/strawberry-juice`}>
                    <span><img className="responsive-img hoverName" src={juice5} /></span>
                    </Link>
                  </li>
                  <li>
                  <Link to={`/juice/watermelon-juice`}>
                    <span><img className="responsive-img hoverName" src={juice6} /></span>
                    </Link>
                    <ul>
                      <li>
                      <Link to={`/juice/cherry-juice`}>
                        <span><img className="responsive-img hoverName" src={juice7} /></span>
                        </Link>
                      </li>
                      
                    </ul>
                  </li>
                </ul>
              </li>
                      
            
            
          </ul>
          </li>
          </ul>
      </div>
    )
  }
}
