import { FunctionComponent, ReactElement, useEffect } from 'react';
import { css } from '@mui/material';
import { Global } from '@emotion/react';
import { ColourPalette, ScreenSize } from '../enums';
import { useScreen } from '../hooks';

/**
 * Used to render the Buy Me a Coffe interactive widget
 * by loading a script into the HTML body
 *
 * @returns The `BuyMeCoffeeWidget` component
 */
const BuyMeCoffeeWidget: FunctionComponent = (): ReactElement => {

  const { screenSize } = useScreen();

  /**
   * Calls the `useEffect` action when the component mounts
   * which is used to initialise the widget script
   */
  useEffect(() => {

    // Create the script element and set the URL
    const script = document.createElement('script');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js';

    // Set the required attributes
    // for the widget script
    script.setAttribute('data-name', 'BMC-Widget');
    script.setAttribute('data-id', 'liamhales');
    script.setAttribute('data-description', 'Support me on Buy me a coffee!');
    script.setAttribute('data-message', 'Thank you for stopping by! If you like, you can buy me a coffee ☕️');
    script.setAttribute('data-color', ColourPalette.BLUE);
    script.setAttribute('data-cfasync', 'false');
    script.onload = () => {

      // Create the content loaded event and dispatch
      // the event so the widget shows correctly
      const event = new Event('DOMContentLoaded');
      window.dispatchEvent(event);
    };

    // Add the script element to the HTML body
    document.body.appendChild(script);

    // Remove the script from the HTML body
    // when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Global
      styles={css`
        iframe {
          height: calc(100% - 210px) !important;
          bottom: ${(screenSize === ScreenSize.SMALL) ? 184 : 104}px;
          left: 20px;
        };

        #bmc-wbtn {
          bottom: ${(screenSize === ScreenSize.SMALL) ? 100 : 20}px;
          left: 20px;
        };
      `}
    />
  );
};

export default BuyMeCoffeeWidget;
