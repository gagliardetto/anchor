//import * as anchor from "@project-serum/anchor";
import * as anchor from "../../../ts";
import { Keypair, SystemProgram } from "@solana/web3.js";

describe("typescript", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.PdaDerivation;
  const base = Keypair.generate();
  const systemProgram = SystemProgram.programId;

  it("Inits the base account", async () => {
    await program.methods
      .initBase()
      .accounts({
        base: base.publicKey,
        systemProgram,
        payer: program.provider.wallet.publicKey,
      })
      .signers([base])
      .rpc();
  });

  it("Inits the derived accounts", async () => {
    // todo
  });
});