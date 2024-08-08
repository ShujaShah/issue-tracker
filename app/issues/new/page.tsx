'use client';

import { TextField, TextArea, Button } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import React from 'react';

const NewIssuesPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title"></TextField.Root>
      <SimpleMDE />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuesPage;
