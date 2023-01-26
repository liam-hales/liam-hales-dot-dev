/** @jsxImportSource @emotion/react */

'use client';

import { FunctionComponent, ReactElement, useRef } from 'react';
import { css } from '@mui/material';
import { BaseProps } from '../../../types';
import { Input, Button } from '..';

/**
 * The `SearchInput` component props
 */
interface Props extends BaseProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly onSearch: () => void;
}

/**
 * The common `SearchInput` component used to render a
 * text input styled to be specific to text search
 *
 * @param props The component props
 * @returns The `SearchInput` component
 */
const SearchInput: FunctionComponent<Props> = ({ className, value, onChange, onSearch }): ReactElement<Props> => {

  const ref = useRef<HTMLInputElement>(null);
  return (
    <Input
      ref={ref}
      className={className}
      value={value}
      placeholder="Search"
      enterKeyText="search"
      iconId="magnifyingGlass"
      onChange={onChange}
      onKeyDown={(key) => {

        // If the key pressed was the enter key then dismiss
        // the keyboard with `.blur()` and call `onSearch`
        if (key === 'Enter') {
          ref.current?.blur();
          onSearch();
        }
      }}
    >
      <Button
        onClick={onSearch}
        css={css`
          flex-shrink: 0;
        `}
      >
        Search
      </Button>
    </Input>
  );
};

export default SearchInput;
