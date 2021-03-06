import React, { FC, useEffect, useMemo, useState } from 'react';
import TextArea from '@/components/general/TextArea/TextArea';
import IconInput from '@/components/IconInput/IconInput';
import HashIcon from '@/components/icons/HashIcon';
import Button from '@/components/general/Button/Button';
import DataItem from '@/components/general/DataItem/DataItem';
import classes from './TweetForm.module.scss';
import { useWallet } from '@solana/wallet-adapter-react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useCharsLimit } from '@/hooks/useCharsLimit';
import { tweetsActions } from '@/store/reducers/tweets';
import { CONTENT_MAX_CHARS, TOPIC_MAX_CHARS } from '@/web3/constants';
import { sendTweet } from '@/web3/tweets';

export interface TweetFormProps {
  className?: string;
  forcedTopic?: string;
}

const TweetForm: FC<TweetFormProps> = ({ className, forcedTopic }) => {
  const { connected } = useWallet();
  const dispatch = useAppDispatch();
  const [content, setContent] = useState<string>('');
  const [topic, setTopic] = useState<string>(forcedTopic || '');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTopic(forcedTopic || '');
  }, [forcedTopic]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(e.target.value);
  };

  const { charsLeft, charsLeftClass } = useCharsLimit(content, CONTENT_MAX_CHARS);

  const topicDisabled = useMemo<boolean>(() => {
    return !!forcedTopic;
  }, [forcedTopic]);

  const sendDisabled = useMemo<boolean>(() => {
    return !content.length || charsLeft < 0;
  }, [content, charsLeft]);

  const send = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);
      const tweet = await sendTweet(content, topic);
      dispatch(tweetsActions.addTweet(tweet));
      setContent('');
      setTopic(forcedTopic || '');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!connected) {
    return <DataItem content={'Connect your wallet to start tweeting...'} />;
  }

  return (
    <form className={[classes.form__wrapper, className].join(' ')}>
      <TextArea
        autoresize
        placeholder="What's happening?"
        value={content}
        onChange={handleTextChange}
      />
      <div className={classes.form__footer}>
        <IconInput
          className={classes.topic}
          Icon={HashIcon}
          maxLength={TOPIC_MAX_CHARS}
          disabled={topicDisabled}
          value={topic}
          onChange={handleTopicChange}
        />
        <div className={classes.button}>
          <span className={[classes.counter, charsLeftClass].join(' ')}>{charsLeft} left</span>
          <Button
            disabled={sendDisabled}
            loading={loading}
            onClick={send}>
            Tweet
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TweetForm;
