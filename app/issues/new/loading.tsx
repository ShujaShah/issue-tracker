import { Container, Text, Flex, Skeleton } from '@radix-ui/themes';
import React from 'react';

const LoadingNewIssuesPage = () => {
  return (
    <div>
      <Container size="1">
        <Flex direction="column" gap="2">
          <Text>
            <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
          </Text>

          <Skeleton>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque felis tellus, efficitur id convallis a, viverra eget
              libero. Nam magna erat, fringilla sed commodo sed, aliquet nec
              magna.
            </Text>
          </Skeleton>
        </Flex>
      </Container>
    </div>
  );
};

export default LoadingNewIssuesPage;
