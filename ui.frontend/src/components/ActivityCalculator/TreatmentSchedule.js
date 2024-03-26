import React from 'react';
import RenderComponentsList from '../FormContainer/RenderComponentsList';
import {
    MapTo
} from '@adobe/aem-react-editable-components';


const TreatmentSchedule = (props) => {	
	
	return (<div>
			TreatmentSchedule
	</div>);
	
}

export default MapTo('wknd-spa-react/components/ActivityCalculator/TreatmentSchedule')(TreatmentSchedule);
