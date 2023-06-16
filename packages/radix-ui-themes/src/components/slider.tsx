'use client';

import * as React from 'react';
import classNames from 'classnames';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { extractMarginProps, withMargin, withBreakpoints } from '../helpers';

import type { MarginProps, Color, ButtonRadius, Responsive } from '../helpers';

type SliderElement = React.ElementRef<typeof SliderPrimitive.Root>;
interface SliderProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'children'>,
    MarginProps {
  size?: Responsive<'1' | '2' | '3'>;
  variant?: 'solid' | 'solid-mono' | 'subtle' | 'subtle-mono';
  color?: Color;
  radius?: ButtonRadius;
}
const Slider = React.forwardRef<SliderElement, SliderProps>((props, forwardedRef) => {
  const { rest: marginRest, ...marginProps } = extractMarginProps(props);
  const { className, size = '2', variant = 'solid', color, radius, ...sliderProps } = marginRest;

  return (
    <SliderPrimitive.Root
      data-color-scale={color}
      data-button-radius={radius}
      ref={forwardedRef}
      {...sliderProps}
      className={classNames(
        'rui-SliderRoot',
        withBreakpoints(size, 'size'),
        `variant-${variant}`,
        withMargin(marginProps),
        className
      )}
    >
      <SliderPrimitive.Track className="rui-SliderTrack">
        <SliderPrimitive.Range
          className="rui-SliderRange"
          data-inverted={sliderProps.inverted ? '' : undefined}
        />
      </SliderPrimitive.Track>
      {(sliderProps.value ?? sliderProps.defaultValue ?? []).map((value) => (
        <SliderPrimitive.Thumb key={value} className="rui-SliderThumb" />
      ))}
    </SliderPrimitive.Root>
  );
});
Slider.displayName = 'Slider';

export { Slider };