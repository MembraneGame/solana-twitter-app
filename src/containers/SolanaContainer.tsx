import React, { FC, ReactNode, useMemo } from 'react';
import { Adapter } from '@solana/wallet-adapter-base';
import {
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { useAppCluster } from '@/hooks/useAppCluster';

export interface SolanaContainerProps {
  children: ReactNode;
}

const SolanaContainer: FC<SolanaContainerProps> = ({ children }) => {
  const { network, endpoint } = useAppCluster();

  const wallets = useMemo<Adapter[]>(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network })
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider
        wallets={wallets}
        autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default SolanaContainer;
