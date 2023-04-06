import { useState } from 'react';
import { ActionSheetIOS } from 'react-native';

const CANCEL_OPTION_TITLE = 'Cancel';

export function useSelector<TOption extends string>() {
  const [selectedValue, setSelectedValue] = useState<TOption>();

  const show = (options: TOption[]) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [...options, CANCEL_OPTION_TITLE],
        cancelButtonIndex: options.length,
      },
      index => {
        const value = options[index];
        setSelectedValue(value);
      }
    );
  };

  return { show, selectedValue };
}
