import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tapable extends Component {
	render() {
		let className =
			this.props.classBase +
			(this.state.isActive ? '-active' : '-inactive');

		if (this.props.className) {
			className += ' ' + props.className;
		}

		if (this.props.classes) {
			className +=
				' ' +
				(this.state.isActive
					? this.props.classes.active
					: this.props.classes.inactive);
		}

		let style = {};
		Object.assign(style, touchStyles, this.props.style);

		const newComponentProps = Object.assign(
			{},
			this.props,
			{
				style,
				className,
				disabled: this.props.disabled,
				handlers: this.handlers,
			},
			this.handlers(),
		);

		delete newComponentProps.activeDelay;
		delete newComponentProps.allowReactivation;
		delete newComponentProps.classBase;
		delete newComponentProps.classes;
		delete newComponentProps.handlers;
		delete newComponentProps.onTap;
		delete newComponentProps.onPress;
		delete newComponentProps.onPinchStart;
		delete newComponentProps.onPinchMove;
		delete newComponentProps.onPinchEnd;
		delete newComponentProps.onDeactivate;
		delete newComponentProps.onReactivate;
		delete newComponentProps.moveThreshold;
		delete newComponentProps.moveXThreshold;
		delete newComponentProps.moveYThreshold;
		delete newComponentProps.pressDelay;
		delete newComponentProps.pressMoveThreshold;
		delete newComponentProps.preventDefault;
		delete newComponentProps.stopPropagation;
		delete newComponentProps.component;

		const NewComponent = this.props.component;

		return (
			<NewComponent {...newComponentProps}>
				{this.props.children}
			</NewComponent>
		);
	}
}

Tappable.propTypes = {
	component: PropTypes.any, // component to create
	className: PropTypes.string, // optional className
	classBase: PropTypes.string, // base for generated classNames
	classes: PropTypes.object, // object containing the active and inactive class names
	style: PropTypes.object, // additional style properties for the component
	disabled: PropTypes.bool, // only applies to buttons
};

export { Tapable };
