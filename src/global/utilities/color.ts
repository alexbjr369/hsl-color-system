import { CssClassMap } from '../interfaces/utilities.interface';

/**
 *  Generates the color classes for the component.
 */
export const generateClasses = (color: string | undefined | null, cssClassMap: CssClassMap): CssClassMap => {
  return typeof color === 'string' && color.length > 0
    ? {
        'med-color': true,
        [`med-color_${color}`]: true,
        ...cssClassMap,
      }
    : cssClassMap;
};
