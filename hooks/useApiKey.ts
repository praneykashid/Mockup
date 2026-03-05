/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import {useCallback, useEffect, useState} from 'react';

interface AIStudio {
  hasSelectedApiKey: () => Promise<boolean>;
  openSelectKey: () => Promise<void>;
}

export const useApiKey = () => {
  const [showApiKeyDialog, setShowApiKeyDialog] = useState(false);

  const validateApiKey = useCallback(async (): Promise<boolean> => {
    return true;
  }, []);

  // Run check automatically on mount
  useEffect(() => {
    validateApiKey();
  }, [validateApiKey]);

  const handleApiKeyDialogContinue = useCallback(async () => {
    setShowApiKeyDialog(false);
  }, []);

  return {
    showApiKeyDialog,
    setShowApiKeyDialog,
    validateApiKey,
    handleApiKeyDialogContinue,
  };
};