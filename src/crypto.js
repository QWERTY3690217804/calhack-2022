const web3 =  require('@solana/web3.js');
import {  PublicKey } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID, getMint, createMint} from "@solana/spl-token"

const spl = require('@solana/spl-token');

// define our program ID and cluster to interact with
const SOLANA_CLUSTER = "devnet";
const PROGRAM_ID = "7zjX4VCE6AxieBKfGYrhH1Qjc33UT2i4qCrJKPtNFN95";



/** Award the amount of bitcoins to wallet.  */
async function award(wallet, silanos) { 

    // create a new connection to the Solana blockchain
    const connection = new web3.Connection(web3.clusterApiUrl(SOLANA_CLUSTER), 'confirmed');

    // connect to a previously generated wallet
    let secretKey = Uint8Array.from([137,193,96,53,126,207,73,
        216,239,12,57,196,148,120,27,178,191,242,78,143,231,
        177,223,52,169,235,204,3,107,81,242,14,61,53,39,84,
        45,56,226,192,208,219,218,210,32,97,233,124,79,173,
        236,64,191,215,16,208,72,239,90,202,31,231,26,51]);
    
    let payer = web3.Keypair.fromSecretKey(secretKey);
    console.log("Generated payer address:", payer.publicKey.toBase58());

    const sendTo = wallet;
    const destPublicKey = new web3.PublicKey(sendTo);
    const transaction = new web3.Transaction();

    transaction.add(
        new web3.TransactionInstruction({
          keys: [
            {
              pubkey: payer.publicKey,
              isSigner: true,
              isWritable: false,
            },
            {
              pubkey: destPublicKey,
              isSigner: false,
              isWritable: false,
            },
          ],
          programId: new web3.PublicKey(PROGRAM_ID),
        }),
      );
    console.log("Sending transaction...");
    let txid = await web3.sendAndConfirmTransaction(connection, transaction, [
        payer,
    ]);
    console.log(
        "Transaction submitted:",
        `https://explorer.solana.com/tx/${txid}?cluster=${SOLANA_CLUSTER}`,
    );
}
