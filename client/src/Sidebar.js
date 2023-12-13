import { Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <>
                   <button className="btn btn-primary " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle</button>

<div className="offcanvas offcanvas-end w-48 flex-col" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body ">
Signout
  </div>
 
</div>
        </>
    )
}