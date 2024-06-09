const sdk = require("api")("@underdog/v2.0#5vgec2olujb1d8j");

sdk.server("https://devnet.underdogprotocol.com");
sdk.auth("29022c05792885.`api`");

const testNFT = async (req, res) => {
  try {
    const pubkeys = ["HgbrurVvvFNjyGZr21b6v7jRD3r1LR8ZTsTB3b5kv7MW"];

    // Iterate over the pubkeys array
    for (const pubkey of pubkeys) {
      console.log(pubkey);

      const { data } = await sdk.postV2ProjectsProjectidNfts(
        {
          receiverAddress: pubkey,
          name: "Solana dev test",
          externalUrl: "https://x.com/superteamng?s=21",
          symbol: "SLB",
          description: "Testing cNFT",
          attributes: {
            Location: "Virtual",
            " Date": "May 21 2024",
            "Proof of ": "Viewing",
          },
          receiver: {
            namespace: "Superteam Devs",
            identifier: "https://x.com/superteamng?s=21",
            address: pubkey,
          },
          image:
            "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717790151/Frame_151_1_snew2z.png",
        },
        { projectId: "1" }
      );

      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
};
testNFT();
