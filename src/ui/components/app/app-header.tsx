import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { useWalletInfo, useWeb3Modal } from '@web3modal/wagmi/react';
import { Link } from 'react-router-dom';
import { useAccount } from 'wagmi';

import { shortenAddress } from '../../helpers/utils/util';
import PulseLoader from '../ui/pulse-loader';
import UrlIcon from '../ui/url-icon';

export default function AppHeader() {
  // eslint-disable-next-line no-shadow
  const { open } = useWeb3Modal();
  const { walletInfo } = useWalletInfo();
  const { address } = useAccount();
  const isConnected = Boolean(walletInfo?.name);
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      enableColorOnDark
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box display="flex" alignItems="center" width="100%">
            <Link to="/" className="flex-grow">
              {/* <img src="/images/logo/dextrade-full.svg" /> */}
            </Link>
            <Button
              variant={isConnected ? 'outlined' : 'contained'}
              disableElevation
              onClick={() => open()}
            >
              {isConnected ? shortenAddress(address) : 'Connect wallet'}
              {isConnected && (
                <Box marginLeft={2}>
                  {walletInfo?.icon ? (
                    <UrlIcon url={walletInfo.icon} />
                  ) : (
                    <PulseLoader />
                  )}
                </Box>
              )}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
