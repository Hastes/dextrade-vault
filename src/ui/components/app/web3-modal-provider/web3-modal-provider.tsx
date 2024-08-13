import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import React, { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { arbitrum, avalanche, base, bsc, mainnet } from 'wagmi/chains';

const queryClient = new QueryClient();

interface IProps {
  children: ReactNode;
}

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '1ee56a25a2dad471b92feb59898b7aa6';

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum, bsc, avalanche, base] as const;
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

export const Web3ModalProvider: React.FC<IProps> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <PersistQueryClientProvider
        persistOptions={{ persister }}
        client={queryClient}
      >
        {children}
      </PersistQueryClientProvider>
    </WagmiProvider>
  );
};
