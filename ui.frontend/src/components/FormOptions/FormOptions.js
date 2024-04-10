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
import {MapTo} from '@adobe/aem-react-editable-components';

const FormOptionsConfig = {
    emptyLabel: 'Form Options',

    isEmpty: function (props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
};

 const FormOptions = (props) => {	
	
    const handleCallback = (checked) => {
        if(props.callback && !props.isInEditor ){
            props.callback({checked, ...props});
        }
    };
	return (<div>
        <input {...props} type="checkbox" onChange={(e) => handleCallback(e.target.checked)}  />
        <label>{props.title}</label>
        </div>);
	
}

export default MapTo('wknd-spa-react/components/form/options')(FormOptions, FormOptionsConfig);


