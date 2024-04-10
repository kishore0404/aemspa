/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import React from 'react';
import { useHistory } from 'react-router-dom';
import RenderComponentsList from '../FormContainer/RenderComponentsList';
import {
    MapTo
} from '@adobe/aem-react-editable-components';

const ContainerConfig = {
    emptyLabel: 'Custom Form Container',

    isEmpty: function(props) {
        return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0;
    }


};

const PatientDetails = (props) => {	
	const history = useHistory();

	const callback = (callBackObj) => {
       console.log("callBackObj ", callBackObj);


       if(callBackObj.name === "next"){
            history.push("faqs.html");
       }
    }
	return (<div>
			<RenderComponentsList {...props} callback={callback} />
	</div>);
	
}

export default MapTo('wknd-spa-react/components/ActivityCalculator/PatientDetails')(PatientDetails, ContainerConfig);
