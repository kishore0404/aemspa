import React, { Component } from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

const IFrameContainerEditConfig = {
    emptyLabel: 'Embed iFrame',

    isEmpty: function(props) {
        return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0;
    }
};

export default class IFrameContainer extends Component {
	render() {
		return (<>
			<h3>IFrame Container</h3>
			<iframe className="myiframe" style={{width: "500px",  height: "500px", border: 1}} src="http://localhost:3000/content/wknd-spa-react/us/en/faqs.html"></iframe>
		</>);
	}
}

MapTo('wknd-spa-react/components/iframecontainer')(IFrameContainer, IFrameContainerEditConfig);
