import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'

export default function ErrIndicator() {
    return (
      <>
        <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Your browser is outdated!</AlertTitle>
  <AlertDescription>SomeThing Went Wrong </AlertDescription>
</Alert>
      </>
    );
  }
  