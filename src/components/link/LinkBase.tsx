import * as React from 'react';

export interface LinkBaseProps {
    children: React.ReactChild;
    className?: string;
    component?: React.ElementType;
    href?: string;
    linkRef?: Function;
    refProp?: string;
    rel?: string;
    target?: string;
}

const LinkBase = ({ children, href = '#', linkRef, target, rel, component, refProp, ...rest }: LinkBaseProps) => {
    // Automatically append rel="noopener" for external links
    // (security fix) if no `rel` was passed
    const linkRel = target === '_blank' && !rel ? 'noopener' : rel;
    const LinkComponent = component || 'a';
    const ref = { [refProp || 'ref']: linkRef };

    return (
        <LinkComponent href={href} rel={linkRel} target={target} {...ref} {...rest}>
            {children}
        </LinkComponent>
    );
};

export default LinkBase;
