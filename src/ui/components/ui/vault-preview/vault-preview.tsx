import {
  Box,
  BoxProps,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';

import { Vault } from '../../../../app/types/vaults';

export function VaultPreview({ vault, ...props }: { vault: Vault } & BoxProps) {
  return (
    <Box {...props}>
      <Card sx={{ backgroundColor: 'transparent' }}>
        <CardActionArea>
          <CardHeader
            title={
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h5">{vault.name}</Typography>
                <Typography>
                  TVL: {vault.tvl}/{vault.tvlMax} ETH
                </Typography>
              </Box>
            }
          />
          <CardContent>
            <Typography variant="h6">{vault.apy}%</Typography>
            <Typography color="text.secondary">Net APY</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
