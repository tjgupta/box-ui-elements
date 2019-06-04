// @flow
import * as React from 'react';

import { boxBlue } from '../../styles/variables';
import OutlinedIcon from '../OutlinedIcon';
import type { TwoTonedOutlinedIcon } from '../flowTypes';

const IconChatBubble = ({
    className = '',
    height = 24,
    outlineColor,
    outlineWidth,
    title,
    width = 24,
}: TwoTonedOutlinedIcon) => (
    <OutlinedIcon
        className={`icon-chat-bubble ${className}`}
        height={height}
        outlineColor={outlineColor}
        outlineWidth={outlineWidth}
        title={title}
        width={width}
    >
        <path
            className="background-color"
            d="M16,24.1637833 L18.4,24.1637833 C23.7019336,24.1637833 28,20.0976819 28,15.0818916 C28,10.0661014 23.7019336,6 18.4,6 L13.6,6 C8.2980664,6 4,10.0661014 4,15.0818916 C4,17.9499355 5.40529004,20.5074704 7.6,22.1718644 L7.6,25.8966534 C7.6,26.0460378 7.63207381,26.1938656 7.69427624,26.3311715 C7.94794433,26.8911195 8.6334064,27.1505067 9.22529862,26.910529 L16,24.1637833 Z"
            fill={boxBlue}
            fillRule="nonzero"
        />
        <path
            className="foreground-color"
            d="M11.2,16.5 C10.4636203,16.5 9.86666667,15.9123737 9.86666667,15.1875 C9.86666667,14.4626263 10.4636203,13.875 11.2,13.875 C11.9363797,13.875 12.5333333,14.4626263 12.5333333,15.1875 C12.5333333,15.9123737 11.9363797,16.5 11.2,16.5 Z M16,16.5 C15.2636203,16.5 14.6666667,15.9123737 14.6666667,15.1875 C14.6666667,14.4626263 15.2636203,13.875 16,13.875 C16.7363797,13.875 17.3333333,14.4626263 17.3333333,15.1875 C17.3333333,15.9123737 16.7363797,16.5 16,16.5 Z M20.8,16.5 C20.0636203,16.5 19.4666667,15.9123737 19.4666667,15.1875 C19.4666667,14.4626263 20.0636203,13.875 20.8,13.875 C21.5363797,13.875 22.1333333,14.4626263 22.1333333,15.1875 C22.1333333,15.9123737 21.5363797,16.5 20.8,16.5 Z"
            fill="#FFFFFF"
        />
    </OutlinedIcon>
);

export default IconChatBubble;
