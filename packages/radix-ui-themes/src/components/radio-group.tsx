'use client';

import * as React from 'react';
import classNames from 'classnames';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { extractMarginProps, withMargin, withBreakpoints } from '../helpers';

import type { MarginProps, Color, Responsive } from '../helpers';

type RadioGroupElement = React.ElementRef<typeof RadioGroupPrimitive.Root>;
interface RadioGroupRootProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    MarginProps {
  size?: Responsive<'1' | '2'>;
  variant?: 'solid' | 'solid-mono';
  color?: Color;
}
const RadioGroupRoot = React.forwardRef<RadioGroupElement, RadioGroupRootProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const { className, size = '1', variant = 'solid', color, ...rootProps } = marginRest;

    return (
      <RadioGroupPrimitive.Root
        data-color-scale={color}
        {...rootProps}
        ref={forwardedRef}
        className={classNames(
          'rui-RadioGroupRoot',
          withBreakpoints(size, 'size'),
          `variant-${variant}`,
          withMargin(marginProps),
          className
        )}
      />
    );
  }
);
RadioGroupRoot.displayName = 'RadioGroupRoot';

type RadioGroupItemElement = React.ElementRef<typeof RadioGroupPrimitive.Item>;
interface RadioGroupItemProps
  extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, 'children'>,
    MarginProps {}
const RadioGroupItem = React.forwardRef<RadioGroupItemElement, RadioGroupItemProps>(
  (props, forwardedRef) => {
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);
    const { className, style, ...itemProps } = marginRest;

    return (
      <span
        className={classNames('rui-RadioGroupItem', withMargin(marginProps), className)}
        style={style}
      >
        <RadioGroupPrimitive.Item
          {...itemProps}
          ref={forwardedRef}
          className={classNames('reset-button', 'rui-RadioGroupButton')}
        >
          <RadioGroupPrimitive.Indicator className="rui-RadioGroupIndicator" />
        </RadioGroupPrimitive.Item>
      </span>
    );
  }
);
RadioGroupItem.displayName = 'RadioGroupItem';

export const RadioGroup = {
  Root: RadioGroupRoot,
  Item: RadioGroupItem,
};