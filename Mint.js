const sdk = require("api")("@underdog/v2.0#5vgec2olujb1d8j");

sdk.server("https://devnet.underdogprotocol.com");
sdk.auth("");

const mintNFT = async (req, res) => {
  try {
    const pubkeys = [
      // Add more public keys here
    ];

    // Iterate over the pubkeys array
    for (const pubkey of pubkeys) {
      console.log(pubkey);

      const { data } = await sdk.postV2ProjectsProjectidNfts(
        {
          receiverAddress: pubkey,
          name: "SuperteamNG Lagos Bootcamp",
          externalUrl: "https://x.com/superteamng?s=21",
          symbol: "SLB",
          description:
            "Thank you for attending the Lagos May Solana Bootcamp Day 2!",
          attributes: {
            Location: "Virtual",
            Date: "May 14 2024",
            "Proof of ": "Viewership",
          },
          receiver: {
            namespace: "Superteam",
            identifier: "https://x.com/superteamng?s=21",
            address: pubkey,
          },
          image:
            "https://res.cloudinary.com/dtfvdjvyr/image/upload/v1715691938/Instagram_post_-_2_ehczc6.png",
        },
        { projectId: "1" }
      );

      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
};

mintNFT();
