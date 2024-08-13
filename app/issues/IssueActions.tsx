import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

const IssueActions = () => {
  return (
    <div>
      <Link href="/issues/new">
        {' '}
        <div className="mb-5">
          <Button>New Issue</Button>
        </div>
      </Link>
    </div>
  );
};

export default IssueActions;
