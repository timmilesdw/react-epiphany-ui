import React from 'react'
import styled from 'styled-components'

export const Button = ({ text, label, color, size, onClick }) => {
	return (
		<Btn text={text} onClick={onClick} size={size} color={color}>
			{label}
		</Btn>
	)
}

const Btn = styled.button`
	color: white;
	mix-blend-mode: difference;
	background: ${(props) =>
		props.color ? props.color : props.theme.colors.main};
	align-items: center;
	${(props) =>
		props.size
			? props.size === 'xs'
				? props.theme.buttonSizes.xs
				: props.size === 'sm'
				? props.theme.buttonSizes.sm
				: props.size === 'md'
				? props.theme.buttonSizes.md
				: props.size === 'lg'
				? props.theme.buttonSizes.lg
				: props.theme.buttonSizes.default
			: props.theme.buttonSizes.default};
	border-radius: 3px;
	border: none;
	display: inline-flex;
	flex: 0 0 auto;
	font-weight: 500;
	justify-content: center;
	outline: 0;
	text-transform: uppercase;
	text-decoration: none;
	transition: all 0.2s ease;
	user-select: none;
	vertical-align: middle;
	white-space: nowrap;
	box-shadow: 0 0 4px #999;
	position: relative;
	overflow: hidden;
	cursor: pointer;
	${(props) =>
		props.text
			? `background: transparent; color: ${
					props.color ? props.color : props.theme.colors.main
			  };
			  box-shadow: none`
			: null};
	:after {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		pointer-events: none;
		${(props) =>
			props.text
				? `background-image: radial-gradient(circle, ${
						props.color ? props.color : props.theme.colors.main
				  } 10%, transparent 10.01%)`
				: `background-image: radial-gradient(circle, #fff 10%, transparent 10.01%)`};
		background-repeat: no-repeat;
		background-position: 50%;
		transform: scale(10, 10);
		opacity: 0;
		transition: transform 0.5s, opacity 1s;
	}
	:active:after {
		transform: scale(0, 0);
		opacity: 0.3;
		transition: 0s;
	}
	:hover:after {
		opacity: 0.2;
	}
`
