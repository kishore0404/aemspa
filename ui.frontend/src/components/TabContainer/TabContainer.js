import {
    MapTo
} from '@adobe/aem-react-editable-components';
import {TabsV1 } from '@adobe/aem-core-components-react-spa';

const TabContainerConfig = {
    emptyLabel: 'Custom Tab Container',

    isEmpty: function(props) {
        return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0;
    }
};

MapTo('wknd-spa-react/components/tabcontainer')(TabsV1, TabContainerConfig);
//MapTo('wknd-spa-react/components/tabcontainer')(TabsV1, {isEmpty: TabsV1IsEmptyFn});
