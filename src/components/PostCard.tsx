import React, { ReactNode } from 'react';
import clsx from 'clsx';
import CommentIcon from '../assets/icons/comment';

type Props = {
  title: string;
  titleClasses?: string;
  subTitle?: string;
  avatarUrl?: string;
  postEmoji?: string;
  postContent: string | ReactNode;
  commentsCount?: number;
  actions?: ReactNode;
  isPost?: boolean;
}

export function PostCard({
  title,
  subTitle,
  titleClasses,
  postContent,
  postEmoji,
  commentsCount,
  avatarUrl,
  actions,
  isPost = true,
}: Props) {
  const titleClassName = clsx('text-lg font-medium text-title', titleClasses);
  const isPostContentString = typeof postContent === 'string';

  return (
    <div className="flex flex-col space-y-4 bg-primary border border-border rounded-lg px-5 py-6">
      <div className="flex items-center space-x-4">
        {!!avatarUrl && (
          <div
            className="bg-primary rounded-full flex items-center justify-center w-11 h-11 overflow-hidden"
          >
            <img
              src={avatarUrl}
              alt="user-image"
              className="h-full w-full"
            />
          </div>
        )}
        <div className="flex flex-col space-y-1">
          <span className={titleClassName}>{title}</span>
          {!!subTitle && (<span className="text-sm font-medium text-subTitle">{subTitle}</span>)}
        </div>
      </div>
      <div className="rounded-lg bg-primaryDark flex items-center space-x-4 p-4">
        <div className="bg-primary rounded-full flex items-center justify-center !w-12 !h-12">
          {postEmoji}
        </div>
        {isPostContentString && (<span className="flex-1 text-base font-normal text-subTitle">{postContent}</span>)}
        {!isPostContentString && (
          <div className="flex-1">
            {postContent}
          </div>
        )}
      </div>
      {actions}
      {isPost && (
        <div className="flex items-center space-x-2">
          <CommentIcon />
          <span className="text-sm text-subTitle font-normal">{`${commentsCount ?? 0} comments`}</span>
        </div>
      )}
    </div>
  );
}
