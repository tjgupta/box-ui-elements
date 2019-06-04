// @flow
import * as React from 'react';

type Props = {
    id: string,
    outlineColor: string,
    outlineWidth: number,
};

const OutlineFilter = ({ id, outlineColor, outlineWidth }: Props) => {
    return (
        <filter id={id} x="-20%" y="-20%" width="150%" height="150%">
            <feMorphology operator="dilate" radius={outlineWidth} in="SourceAlpha" result="morphology" />
            <feFlood floodColor={outlineColor} floodOpacity="1" result="flood" className="outline-color" />
            <feComposite in="flood" in2="morphology" operator="in" result="composite" />
            <feMerge result="merge">
                <feMergeNode in="composite" result="mergeNode" />
                <feMergeNode in="SourceGraphic" result="mergeNode1" />
            </feMerge>
        </filter>
    );
};

export default OutlineFilter;
