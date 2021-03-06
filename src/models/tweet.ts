import { PublicKey } from '@solana/web3.js';
import { BN } from '@project-serum/anchor';
import { truncateStr } from '@/utils/helpers';
import moment from 'moment';

export interface ITweet {
  publicKey: PublicKey;
  author: PublicKey;
  timestamp: BN;
  content: string;
  topic: string;
  key: string;
  authorKey: string;
  createdAt: string;
  createdAgo: string;
  likes?: number;
  personalLike?: PublicKey | null;
}

export class Tweet implements ITweet {
  public author: PublicKey;
  public timestamp: BN;
  public content: string;
  public topic: string;
  public likes: number = 0;
  public personalLike = null;

  constructor(public publicKey: PublicKey, accountData: any) {
    this.author = accountData.author;
    this.timestamp = accountData.timestamp;
    this.content = accountData.content;
    this.topic = accountData.topic;
  }

  get key() {
    return this.publicKey.toBase58();
  }

  get authorKey() {
    return truncateStr(this.author.toBase58(), 10);
  }

  get createdAt() {
    return moment(this.timestamp.toNumber() * 1000).format('HH:mm, DD MMM YYYY');
  }

  get createdAgo() {
    return moment(this.timestamp.toNumber() * 1000).fromNow();
  }
}
