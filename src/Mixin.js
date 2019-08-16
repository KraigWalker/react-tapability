import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Mixin extends Component {
	render;
}

Mixin.propTypes = {
	moveThreshold: PropTypes.number, // pixels to move before cancelling tap
	moveXThreshold: PropTypes.number, // pixels on the x axis to move before cancelling tap (overrides moveThreshold)
	moveYThreshold: PropTypes.number, // pixels on the y axis to move before cancelling tap (overrides moveThreshold)
	allowReactivation: PropTypes.bool, // after moving outside of the moveThreshold will you allow
	// reactivation by moving back within the moveThreshold?
	activeDelay: PropTypes.number, // ms to wait before adding the `-active` class
	pressDelay: PropTypes.number, // ms to wait before detecting a press
	pressMoveThreshold: PropTypes.number, // pixels to move before cancelling press
	preventDefault: PropTypes.bool, // whether to preventDefault on all events
	stopPropagation: PropTypes.bool, // whether to stopPropagation on all events

	onTap: PropTypes.func, // fires when a tap is detected
	onPress: PropTypes.func, // fires when a press is detected
	onTouchStart: PropTypes.func, // pass-through touch event
	onTouchMove: PropTypes.func, // pass-through touch event
	onTouchEnd: PropTypes.func, // pass-through touch event
	onMouseDown: PropTypes.func, // pass-through mouse event
	onMouseUp: PropTypes.func, // pass-through mouse event
	onMouseMove: PropTypes.func, // pass-through mouse event
	onMouseOut: PropTypes.func, // pass-through mouse event
	onKeyDown: PropTypes.func, // pass-through key event
	onKeyUp: PropTypes.func, // pass-through key event
};

export { Mixin };
