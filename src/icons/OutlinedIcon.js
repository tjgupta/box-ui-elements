// @flow
import * as React from 'react';
import uniqueId from 'lodash/uniqueId';

import AccessibleSVG from './accessible-svg';
import OutlineFilter from './OutlineFilter';
import type { Icon } from './flowTypes';

type Props = Icon & {
    children: React.Node,
};

class OutlinedIcon extends React.Component<Props> {
    componentWillMount() {
        this.outlineId = uniqueId('outline-');
    }

    outlineId: string;

    render() {
        const { children, className = '', height = 32, outlineColor, outlineWidth, title, width = 32 } = this.props;
        const filter = outlineColor && outlineWidth ? `url(#${this.outlineId})` : undefined;

        return (
            <AccessibleSVG className={className} height={height} title={title} viewBox="0 0 32 32" width={width}>
                {outlineColor && outlineWidth && (
                    <OutlineFilter id={this.outlineId} outlineColor={outlineColor} outlineWidth={outlineWidth} />
                )}
                {React.Children.map(children, (elem, i) => {
                    if (i === 0) {
                        return React.cloneElement(elem, { filter });
                    }
                    return React.cloneElement(elem);
                })}
            </AccessibleSVG>
        );
    }
}

export default OutlinedIcon;
