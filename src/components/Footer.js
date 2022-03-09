import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

function Footer(){
return(
<FooterContainer  className="main-footer">
    <div className='footer-middle'> 
    <div className='container'>
        <div className='row'>
        
    {/* Column 1 */}
<div className='col-md-3 col-sm-6'>
<h4> Haloooooooooo </h4> 
<ul className='list-unstyled'>
<li>Haloooooo</li>
<li>Haloooooo</li>
<li>Haloooooo</li>
<li>Haloooooo</li>

</ul>
           </div>
           <div className='col-md-3 col-sm-6'>
<h4> Haloooooooooooooo </h4> 
<ul className='list-unstyled'>
<li><a href="/">Haloooooo</a></li>
<li>< a href="/">Haloooooo</a></li>
<li><a href="/">Haloooooo</a></li>
<li><a href="/">Haloooooo</a></li>

</ul>
           </div>
           <div className='col-md-3 col-sm-6'>
<h4> Haloooooooooooooo </h4> 
<ul className='list-unstyled'>
<li>Haloooooo</li>
<li>Haloooooo</li>
<li>Haloooooo</li>
<li>Haloooooo</li>

</ul>
           </div>
           <div className='col-md-3 col-sm-6'>
<h4> Haloooooooooooooo </h4> 
<ul className='list-unstyled'>
<li>Haloooooo</li>
<li>Haloooooo</li>
<li>Haloooooo</li>
<li>Haloooooo</li>

</ul>
           </div>
        </div>
        {/* Footer Bottom */}
        <div className='footer-bottom'>
          <p className='text-xs-xenter'>
            &copy;{new Date().getFullYear()}  ALAZAR AYELE -All Rights Reserved
          </p>
        </div>
    </div> 
</div>
</FooterContainer>
);

} 


export default Footer;
const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color:var(--mainWhite);
}
.footer-bottom{
  padding-top:3rem;
  padding-bottom:2rem;

}

ul li a {
  color:var(--mainGrey);

}

ul li a:hover{
  color:var(--mainLightGrey)
}
`;