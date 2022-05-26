import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	:root {
    --color-primary: #e34239;
		--color-secondary: #171821;
    --color-tertiary: #f3452d;
    --color-quaternary: #2f3648;
    --color-quinary: #0e0f15;
    --color-senary: #999;
    --color-septenary: #333;
		--color-black: #151419;
		--color-white: #fff;
    --color-overlay: #171821cc;
    --color-overlay-secondary: #171821e6;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		&::selection{ background-color: var(--color-primary);}
	}
	*, button, input {
		border: 0;
		outline: 0;
		font-family: "Roboto",sans-serif;
	}
	body {
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.5;
		color: var(--color-white);
		background-color: var(--color-secondary);
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
	}
	h1, h2, h3, h4, h5, h6 {
  	margin-top: 0;
  	margin-bottom: 0.5rem;
  	font-weight: 500;
  	line-height: 1.2;
	}
	h1 {
  	font-size: calc(1.375rem + 1.5vw);
		@media (min-width: 1200px){ font-size: 2.5rem;}
    @media (min-width: 1320px){ font-size: 2.75rem;}
    @media (min-width: 1452px){ font-size: 3.025rem;}
    @media (min-width: 1597px){ font-size: 3.327rem;}
    @media (min-width: 1756px){ font-size: 3.66rem;}
    @media (min-width: 1932px){ font-size: 4.026rem;}
    @media (min-width: 2125px){ font-size: 4.428rem;}
    @media (min-width: 2338px){ font-size: 4.871rem;}
    @media (min-width: 2571px){ font-size: 5.358rem;}
    @media (min-width: 2828px){ font-size: 5.893rem;}
    @media (min-width: 3110px){ font-size: 6.482rem;}
    @media (min-width: 3763px){ font-size: 7.130rem;}
	}
	h2 {
		font-size: calc(1.325rem + 0.9vw);
		@media (min-width: 1200px){ font-size: 2rem;}
    @media (min-width: 1320px){ font-size: 2.2rem;}
    @media (min-width: 1452px){ font-size: 2.42rem;}
    @media (min-width: 1597px){ font-size: 2.662rem;}
    @media (min-width: 1756px){ font-size: 2.928rem;}
    @media (min-width: 1932px){ font-size: 3.220rem;}
    @media (min-width: 2125px){ font-size: 3.524rem;}
    @media (min-width: 2338px){ font-size: 3.896rem;}
    @media (min-width: 2571px){ font-size: 4.285rem;}
    @media (min-width: 2828px){ font-size: 4.713rem;}
    @media (min-width: 3110px){ font-size: 5.184rem;}
    @media (min-width: 3763px){ font-size: 5.702rem;}
	}
	h3 {
		font-size: calc(1.3rem + 0.6vw);
		@media (min-width: 1200px){ font-size: 1.75rem;}
    @media (min-width: 1320px){ font-size: 1.925rem;}
    @media (min-width: 1452px){ font-size: 2.117rem;}
    @media (min-width: 1597px){ font-size: 2.328rem;}
    @media (min-width: 1756px){ font-size: 2.560rem;}
    @media (min-width: 1932px){ font-size: 2.816rem;}
    @media (min-width: 2125px){ font-size: 3.097rem;}
    @media (min-width: 2338px){ font-size: 3.406rem;}
    @media (min-width: 2571px){ font-size: 3.746rem;}
    @media (min-width: 2828px){ font-size: 4.120rem;}
    @media (min-width: 3110px){ font-size: 4.532rem;}
    @media (min-width: 3763px){ font-size: 4.985rem;}
	}
	h4 {
		font-size: calc(1.275rem + 0.3vw);
		@media (min-width: 1200px){ font-size: 1.5rem;}
    @media (min-width: 1320px){ font-size: 1.65rem;}
    @media (min-width: 1452px){ font-size: 1.815rem;}
    @media (min-width: 1597px){ font-size: 1.996rem;}
    @media (min-width: 1756px){ font-size: 2.195rem;}
    @media (min-width: 1932px){ font-size: 2.414rem;}
    @media (min-width: 2125px){ font-size: 2.665rem;}
    @media (min-width: 2338px){ font-size: 2.920rem;}
    @media (min-width: 2571px){ font-size: 3.242rem;}
    @media (min-width: 2828px){ font-size: 3.566rem;}
    @media (min-width: 3110px){ font-size: 3.922rem;}
    @media (min-width: 3763px){ font-size: 4.314rem;}
	}
	h5 {
		font-size: 1.25rem;
    @media (min-width: 1320px){ font-size: 1.375rem;}
    @media (min-width: 1452px){ font-size: 1.512rem;}
    @media (min-width: 1597px){ font-size: 1.663rem;}
    @media (min-width: 1756px){ font-size: 1.830rem;}
    @media (min-width: 1932px){ font-size: 2.013rem;}
    @media (min-width: 2125px){ font-size: 2.214rem;}
    @media (min-width: 2338px){ font-size: 2.435rem;}
    @media (min-width: 2571px){ font-size: 2.678rem;}
    @media (min-width: 2828px){ font-size: 2.945rem;}
    @media (min-width: 3110px){ font-size: 3.239rem;}
    @media (min-width: 3763px){ font-size: 3.562rem;}
	}
	h6 {
		font-size: 1rem;
    @media (min-width: 1320px){ font-size: 1.1rem;}
    @media (min-width: 1452px){ font-size: 1.21rem;}
    @media (min-width: 1597px){ font-size: 1.331rem;}
    @media (min-width: 1756px){ font-size: 1.464rem;}
    @media (min-width: 1932px){ font-size: 1.610rem;}
    @media (min-width: 2125px){ font-size: 1.771rem;}
    @media (min-width: 2338px){ font-size: 1.948rem;}
    @media (min-width: 2571px){ font-size: 2.142rem;}
    @media (min-width: 2828px){ font-size: 2.356rem;}
    @media (min-width: 3110px){ font-size: 2.591rem;}
    @media (min-width: 3763px){ font-size: 2.850rem;}
	}
	p {
  	margin-top: 0;
  	margin-bottom: 1rem;
    @media (min-width: 1320px){ font-size: 1.1rem;}
    @media (min-width: 1452px){ font-size: 1.21rem;}
    @media (min-width: 1597px){ font-size: 1.331rem;}
    @media (min-width: 1756px){ font-size: 1.464rem;}
    @media (min-width: 1932px){ font-size: 1.610rem;}
    @media (min-width: 2125px){ font-size: 1.771rem;}
    @media (min-width: 2338px){ font-size: 1.948rem;}
    @media (min-width: 2571px){ font-size: 2.142rem;}
    @media (min-width: 2828px){ font-size: 2.356rem;}
    @media (min-width: 3110px){ font-size: 2.591rem;}
    @media (min-width: 3763px){ font-size: 2.850rem;}
  }
	blockquote {
		font-size: 1.25rem;
	}
	ol,ul {
  		padding-left: 2rem;
	}
	ol, ul, dl {
  		margin-top: 0;
  		margin-bottom: 1rem;
	}
	ul {
    	list-style: circle;
	}
`
