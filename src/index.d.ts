import * as React from 'react';

export interface HorizontalRuleProps {

    /**
    * View that encapsulates everything.
    */
    containerStyle?: any;

    /**
    * Line style (used for padding, margin, etc...).
    */
    lineStyle?: any;

    /**
    * Default 2.
    */
    lineHeight?: number;

    /**
    * Component to be rendered in the middle (set margin here if needed).
    */
    component?: any;

    /**
    * Line color. Default black.
    */
    color?: string;

    /**
    * Weather the component will run the animation. Default false.
    */
    animated?: boolean;

    /**
    * Animation duration (in milliseconds) if enabled. Default 1000ms.
    */
    duration?: number;
}

export class HorizontalRule extends React.Component<HorizontalRuleProps, any>{}