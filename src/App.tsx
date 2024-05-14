import { createThirdwebClient } from "thirdweb";
import { ConnectButton, ThirdwebProvider, } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
const client = createThirdwebClient({ clientId: "5007ba53ef0272dcc52d7e514297d4b1" });
const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow")
];

export default function App() {
  return (
    <ThirdwebProvider>
      <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <ConnectButton client={client} wallets={wallets} />
      </div>
    </ThirdwebProvider>
  );
}
