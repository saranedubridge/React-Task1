import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faXmark} from '@fortawesome/free-solid-svg-icons';

import './App.css';

// javascript code
let Subscription=["Free","plus","Pro"]
let month="/month"
let dollers={'doller0':'$0','doller9':'$9','doller49':'$49'}
let button="Button"

function Component (props) {
  return (
    <body>
        <section className="pricing py-5">
      <div className='container'>

        {/* Free tier */}
        <div className='row'>
          <div className='col-lg-4'>
          <div className="card mb-5 mb-lg-0">
            <div className='card-body'>
              <h5 className='card-title text-muted text-uppercase text-center'>{Subscription[0]}</h5>
              <h6 className='card-price text-center'><span >{dollers.doller0}{month}</span></h6>
             <hr></hr>
             <ul className='fa-ul'>
              <li><span > <FontAwesomeIcon icon={faCheck} /> 
               {props.list[0]}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} /> 
              {props.storage[0]}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.public}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.access}</span></li>
              <li><span > <FontAwesomeIcon icon={faXmark} />{props.private}</span></li>
              <li><span > <FontAwesomeIcon icon={faXmark} />{props.support}</span></li>
              <li><span > <FontAwesomeIcon icon={faXmark} />{props.subdomain}</span></li>
              <li><span > <FontAwesomeIcon icon={faXmark} /> 
               {props.report}</span></li>
             </ul>
             <div className='d-grid'>
                <a href='#' className='btn btn-primary text-uppercase'>{button}</a>
             </div>
            </div>
          </div>
          </div>
          {/* Plus Tier */}
        <div className='col-lg-4'>
          <div className="card mb-5 mb-lg-0">
            <div className='card-body'>
              <h5 className='card-title text-muted text-uppercase text-center'>{Subscription[1]}</h5>
              <h6 className='card-price text-center'><span >{dollers.doller9}{month}</span></h6>
             <hr></hr>
             <ul className='fa-ul'>
              <li><span > <FontAwesomeIcon icon={faCheck} /><strong>{props.list[1]}</strong></span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.storage[1]}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.public}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.access}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.private}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.support}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.subdomain}</span></li>
              <li><span > <FontAwesomeIcon icon={faXmark} />{props.report}</span></li>
             </ul>
             <div className='d-grid'>
                <a href='#' className='btn btn-primary text-uppercase'>{button}</a>
             </div>
            </div>
          </div>
          </div>
        
        
          {/* Pro Tier */}
          <div className='col-lg-4'>
          <div className="card mb-5 mb-lg-0">
            <div className='card-body'>
              <h5 className='card-title text-muted text-uppercase text-center'>{Subscription[2]}</h5>
              <h6 className='card-price text-center'><span>{dollers.doller49}{month}</span></h6>
             <hr></hr>
             <ul className='fa-ul'>
             <li><span > <FontAwesomeIcon icon={faCheck} /><strong>{props.list[2]}</strong></span></li>

              <li><span > <FontAwesomeIcon icon={faCheck} />{props.storage[2]}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.public}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.access}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.private}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.support}</span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} /><strong>Unlimited</strong> {props.subdomain} </span></li>
              <li><span > <FontAwesomeIcon icon={faCheck} />{props.report}</span></li>
             </ul>
             <div className='d-grid'>
                <a href='#' className='btn btn-primary text-uppercase'>{button}</a>
             </div>
            </div>
          </div>
          </div>
      </div>
      </div>
    </section>
    </body>
  )};


function App() {
  return (
    <Component 
    list={ ['Single User' , '5 User',  'Unlimited user']}
    storage={["5GB Storage","50GB Storage","150GB Storage"]} 
    public="Unlimited Public Projects"  
    access="community Access" 
    private="Unlimited Private Project" 
    support="Dedicated phone support"
    subdomain={"Free Subdomain"}
    report="Monthly Status Report"
    />
  )
}


export default App;

