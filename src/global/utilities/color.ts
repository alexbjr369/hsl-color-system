import { CssClassMap } from '../interfaces/utilities.interface';
import { namespace } from '../../global/constants/global.constant';

/**
 *  Generates the component's color classes.
 */
export const generateClasses = (color: string | undefined | null, cssClassMap: CssClassMap): CssClassMap => {
  return typeof color === 'string' && color.length > 0
    ? {
        [`${namespace}-color`]: true,
        [`${namespace}-color_${color}`]: true,
        ...cssClassMap,
      }
    : cssClassMap;
};
