import * as React from 'react';
import { OverridableStringUnion } from '@material-ui/types';
import { SxProps } from '@material-ui/system';
import { InternalStandardProps as StandardProps } from '@material-ui/core';
import { Theme } from '../styles';
import { UsePaginationItem, UsePaginationProps } from '../usePagination/usePagination';

export interface PaginationRenderItemParams extends UsePaginationItem {
  color: PaginationProps['color'];
  shape: PaginationProps['shape'];
  size: PaginationProps['size'];
  variant: PaginationProps['variant'];
}

export interface PaginationPropsVariantOverrides {}

export interface PaginationPropsSizeOverrides {}

export interface PaginationPropsColorOverrides {}

export interface PaginationProps
  extends UsePaginationProps,
    StandardProps<React.HTMLAttributes<HTMLElement>, 'children' | 'onChange'> {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: {
    /** Styles applied to the root element. */
    root?: string;
    /** Styles applied to the ul element. */
    ul?: string;
    /** Styles applied to the root element if `variant="outlined"`. */
    outlined?: string;
    /** Styles applied to the root element if `variant="text"`. */
    text?: string;
  };
  /**
   * The active color.
   * @default 'standard'
   */
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'standard',
    PaginationPropsColorOverrides
  >;
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @param {bool} selected If true, the current page is selected.
   * @returns {string}
   */
  getItemAriaLabel?: (
    type: 'page' | 'first' | 'last' | 'next' | 'previous',
    page: number,
    selected: boolean,
  ) => string;
  /**
   * Render the item.
   * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
   * @returns {ReactNode}
   * @default (item) => <PaginationItem {...item} />
   */
  renderItem?: (params: PaginationRenderItemParams) => React.ReactNode;
  /**
   * The shape of the pagination items.
   * @default 'circular'
   */
  shape?: 'circular' | 'rounded';
  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: OverridableStringUnion<'small' | 'medium' | 'large', PaginationPropsSizeOverrides>;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: OverridableStringUnion<'text' | 'outlined', PaginationPropsVariantOverrides>;
}

export type PaginationClassKey = keyof NonNullable<PaginationProps['classes']>;

/**
 *
 * Demos:
 *
 * - [Pagination](https://material-ui.com/components/pagination/)
 *
 * API:
 *
 * - [Pagination API](https://material-ui.com/api/pagination/)
 */
export default function Pagination(props: PaginationProps): JSX.Element;
