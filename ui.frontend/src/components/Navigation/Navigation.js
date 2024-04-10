/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Link as RouterLink } from 'react-router-dom';
import { determineIsActive } from '@adobe/aem-core-components-react-base';


export const RoutedLink = (props) => {
    const {to, isRouted, type, ...otherProps} = props;

    const isRoutedChecked = typeof props.isRouted === 'boolean' ? props.isRouted : true;

    if(to === undefined || to.trim().length === 0){
        return <a href={'#'}
            {...otherProps}
        />;
    }
    const isExternal = /^https?:\/\//.test(to);

    return isExternal || !isRoutedChecked || type !== 'page'?
        (<a
            href={to}
            {...otherProps}
        />)
        :
        ( <RouterLink {...otherProps}
                      to={to}
        />)
};
export const NavigationItem = (item) => {

    const isActive = determineIsActive(item);
    const type = item[':type'].split('/').slice(-1)[0];
    const cssClass = item.baseCssClass + '__item ' +
        item.baseCssClass + '__item--level-' + item.level + ' ' +
        (isActive ? ' ' + item.baseCssClass + '__item--active' : '');
    return (
        <li className={cssClass}>
                <RoutedLink isRouted={item.routed} type={type} to={item.url} title={item.title} aria-current={isActive && 'page'}
                    className={item.baseCssClass + '__item-link'}>{item.title
               }</RoutedLink>
                {
                    !!item.children && item.children.length > 0 && <NavigationGroup {...item} baseCssClass={item.baseCssClass}/>
                }
        </li>
    )

};

export const NavigationGroup = (item) => {
    return ( <
        > {!!item.children && item.children.length > 0 && (
                <ul  className={item.baseCssClass + '__group'}>
                    {item.children.map(
                        (child,index) =>
                            <NavigationItem key={item.baseCssClass + '__item-' + index}
                                              {...child} index={index}
                                              baseCssClass={item.baseCssClass}
                                              routed={typeof child.routed === 'boolean' ? child.routed : item.routed}
                            />
                    )}
                </ul>
            )
        } <
        />
    )
};

const NavigationConfig = {
    emptyLabel: 'Navigation',

    isEmpty: function(props) {
        return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0;
    }
};


const navigation = (props) => {

    const selfClone: NavigationItem = {
        active: false,
        lastModified: 0,
        level: 0,
        path: "",
        title: "",
        url: "",
        routed: props.routed,
        children: props.items
    };
    return (<nav className="cmp-navigation cus-nav"
             role="navigation "
             itemScope itemType="http://schema.org/SiteNavigationElement"
             aria-label={props.accessibilityLabel}>
            <NavigationGroup {...selfClone} baseCssClass="cmp-navigation"/>
        </nav>);

}

MapTo('wknd-spa-react/components/navigation')(navigation, NavigationConfig);