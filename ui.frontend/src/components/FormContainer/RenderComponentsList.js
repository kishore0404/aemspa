import React from 'react';
import {
	AuthoringUtils, 
	Utils
} from '@adobe/aem-react-editable-components';
import { ComponentMapping } from '@adobe/aem-spa-component-mapping';


const RenderComponentsList = ({
  cqItemsOrder = [],
  cqItems = {},
  isInEditor = AuthoringUtils.isInEditor(),
  ...props
}: ContainerProps): ReactElement[] => {
  const componentMapping = props.componentMapping || ComponentMapping;
  const components: Array<ReactElement> = [];
  cqItemsOrder.forEach((itemKey: string) => {
    const itemProps = Utils.modelToProps(cqItems[itemKey]);
    if (itemProps && itemProps.cqType) {
      const ItemComponent: React.ElementType = componentMapping.get(itemProps.cqType);
      if (ItemComponent) {
        components.push(
          <ItemComponent 
            key={itemProps.id}
            isInEditor={isInEditor}
            {...itemProps}
            callback={props.callback}
          />,
        );
      } else {
        console.error('Component not mapped for resourcetype:', itemProps.cqType);
      }
    }
  });
  return components;
};


export default RenderComponentsList;