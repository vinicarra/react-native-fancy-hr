import React, {Component} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import PropTypes from 'prop-types';

export default class HorizontalRule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: new Animated.Value(props.animated ? 0 : 1),
        };
    }

    componentDidMount() {
        const { animated, duration } = this.props;
        if (animated) {
            Animated.timing(
                this.state.width,
                {
                    toValue: 1,
                    duration: duration,
                }
            ).start();
        }
    }

    static propTypes = {
        containerStyle: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]),
        lineStyle: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]),
        lineHeight: PropTypes.number,
        component: PropTypes.any,
        color: PropTypes.string,
        animated: PropTypes.bool,
        duration: PropTypes.number,
    }

    static defaultProps = {
        containerStyle: null,
        lineStyle: null,
        lineHeight: 2,
        color: 'black',
        component: null,
        animated: false,
        duration: 1000,
    };

    renderLine = (alignment, key) => {
        const { lineStyle, lineHeight, color } = this.props;
        const { width } = this.state;
        return (
            <Animated.View key={key} style={[
                styles.line,
                {
                    height: lineHeight,
                    backgroundColor: color,
                    width: width.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '100%'],
                    }),
                    alignSelf: alignment,
                },
                lineStyle,
            ]} />
        );
    }

    renderMiddle = () => {
        const { component } = this.props;
        if (component == null)
            return null;
        return (
            <View key="component" style={styles.component}>
                {component()}
            </View>
        );
    }

    render() {
        const { containerStyle } = this.props;
        return (
            <View style={[styles.container, containerStyle]}>
                <View style={styles.lineContainer}>
                    {this.renderLine('flex-end', 1)}
                </View>
                {this.renderMiddle()}
                <View style={styles.lineContainer}>
                    {this.renderLine('flex-start', 2)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 35,
        paddingVertical: 5,
        flexDirection: 'row',
    },
    line: {
        backgroundColor: 'black',
        width: '100%',
    },
    component: {
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lineContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});
