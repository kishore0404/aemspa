// import {
//     MapTo,
//     withComponentMappingContext,
//     AllowedComponentsContainer
// } from '@adobe/aem-react-editable-components';


// const ContainerConfig = {
//     emptyLabel: 'Custom Form Container',

//     isEmpty: function(props) {
//         return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0;
//     }
// };

// MapTo('wknd-spa-react/components/form/formcontainer')(withComponentMappingContext(AllowedComponentsContainer), ContainerConfig);


import React from 'react';
import {
    MapTo
} from '@adobe/aem-react-editable-components';
import {Link, useHistory } from 'react-router-dom';

import RenderComponentsList from './RenderComponentsList';

import { ComponentMapping } from '@adobe/aem-spa-component-mapping';
import {
    Utils
} from '@adobe/aem-react-editable-components';
const ContainerConfig = {
    emptyLabel: 'Custom Form Container',

    isEmpty: function(props) {
        return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0;
    }


};
const RenderFormComponents = (props: ContainerProps): ReactElement[] => {
  const componentMapping = props.componentMapping || ComponentMapping;
      const ItemComponent: React.ElementType = componentMapping.get(`wknd-spa-react/components/ActivityCalculator/${props.name}`);
      if (ItemComponent) {
        return <ItemComponent 
            key={props.id}
            {...props} />

      } else {
        console.error('Component not mapped for resourcetype:', props.name);
      }
};


const ActivityCalculator = (props) => {    
    const ComponentName = props.name;
    

    return (<div>
                <Link to="/content/wknd-spa-react/us/en/faqs.html">
                    <div>WKND</div>
                </Link>
                <RenderFormComponents {...props} />
            </div>)
    
}

export default MapTo('wknd-spa-react/components/form/formcontainer')(ActivityCalculator, ContainerConfig);
