import { createGlobalStyle } from 'styled-components';

//Reset CSS:
export const GlobalStyle = createGlobalStyle`
    :root {
        --ink: #170C3A;
        --pale-grey: #EBEAED;
        --pale-lilac: #DEDCE1;
        --soft-lavender: #B1ADB9;
        --white: #fff;

        --darkerblue: #244AA8;
        --darkblue: #2F55CC;
        --blue: #365DF0;
        --lighterblue: #B9C6FA;
        --lightestblue: #CAD6FC;
        --mostlightestblue: #E1E7FD;
        
        --green: #12DB89;
        --lightergreen: #B7F7D8;
        --lightestgreen: #CFF9E6;
        --mostlightestgreen: #E7FBF3;

        --darkerred: #A53F3F;
        --darkred: #CC4C4C;
        --red: #F95E5A;
        --lighterred: #FCC6C5;
        --lightestred: #FCD7D6;
        --mostlightestred: #FEEFEE;


    }


    html, body, div, span,
    form, label, article, 
    aside, footer, menu, 
    nav, section {
        font-size: clamp(16px, 1.3vw, 24px);
        vertical-align: baseline;
        box-sizing: border-box;
    }

    body {
        line-height: 1;
        background-color: #F2F2F2;
    }

    * {
        font-family: arial, sans-serif !important;
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }
`