import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import VaultPreview from '../components/ui/vault-preview';

const VAULTS = {
  conservative: {
    name: 'Conservative',
    tvl: 10000,
    tvlMax: 18000,
    apy: 3.2,
  },
  advanced: {
    name: 'Advanced',
    tvl: 900,
    tvlMax: 2000,
    apy: 5,
  },
  dynamic: {
    name: 'Dynamic',
    tvl: 500,
    tvlMax: 2500,
    apy: 10,
  },
};

export default function Home() {
  const { t } = useTranslation();
  return (
    <Box marginTop={2}>
      <Typography variant="h4" fontWeight="bold" marginBottom={3}>
        {t('Earn')}
      </Typography>

      <Typography marginBottom={1}>{t('Choose vault')}</Typography>
      <Box>
        <VaultPreview
          marginTop={2}
          marginRight={2}
          minWidth={250}
          width="100%"
          vault={VAULTS.conservative}
        />
        <VaultPreview
          marginTop={2}
          marginRight={2}
          minWidth={250}
          width="100%"
          vault={VAULTS.advanced}
        />
        <VaultPreview
          marginTop={2}
          marginRight={2}
          minWidth={250}
          width="100%"
          vault={VAULTS.dynamic}
        />
      </Box>
    </Box>
  );
}
