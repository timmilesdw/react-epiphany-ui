import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

export const ETheme = ({ theme, children }) => {
	return (
		<ThemeProvider theme={theme || defaultTheme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	)
}

const GlobalStyle = createGlobalStyle`
* {
	font-family: 'Roboto';
}
`

const defaultTheme = {
	fontSizes: [12, 14, 16, 18, 24, 32, 36, 72, 96],
	space: [0, 4, 8, 16, 32, 64, 128, 256],
	colors: {
		error: '#F44336',
		warning: '#FF9800',
		success: '#4CAF50',
		main: '#2196F3',
		secondary: '#212121'
	},
	buttonSizes: {
		xs: `
			height: 28px;
			padding: 0 16px;
			font-size: 10px;
		`,
		sm: `
			height: 30px;
			padding: 0 24px;
			font-size: 13px;
		`,
		md: `
			height: 36px;
			padding: 0 34px;
			font-size: 14px;
			letter-spacing: 0.4px;
		`,
		lg: `
			height: 68px;
			padding: 0 56px;
			font-size: 20px;
		`,
		default: `
			height: 36px;
			padding: 0 30px;
			font-size: 13px;
		`
	}
}
