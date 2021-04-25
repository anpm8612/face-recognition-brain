import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './bulb.png';

const Logo = () => {
	return (
		<div style={ {display: 'flex', justifyContent: 'flex-start'} }>
			<Tilt>
		      <div style={{ height: '150px', width: '150px', background: 'linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%)' }}>
		        <div className='pa3'><img style={{ paddingTop: '5px' }} alt='logo' src={brain} /></div>
		      </div>
		    </Tilt>
		</div>
	)
}

export default Logo;