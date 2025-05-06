import React from 'react';
import { render } from '@testing-library/react-native';
import { AvatarDisplay } from './AvatarDisplay';
import { PaperProvider } from 'react-native-paper'; // Avatar.Icon needs PaperProvider

describe('AvatarDisplay', () => {
  it('renders correctly with default size', () => {
    // react-native-paper's Avatar.Icon doesn't have an easy query target by default
    // We'd typically add a testID to the Avatar.Icon itself in the component
    // For now, we assume it renders if no error
    const tree = render(
      <PaperProvider>
        <AvatarDisplay />
      </PaperProvider>
    );
    // A simple smoke test is to ensure it doesn't throw and returns something.
    expect(tree.toJSON()).toBeTruthy(); 
  });

  it('renders with custom size', () => {
    const customSize = 100;
    // This test primarily checks if the component renders without error when a size prop is passed.
    // Verifying the actual rendered size of the Avatar.Icon component from react-native-paper
    // can be complex as it involves checking internal props or styles that might not be
    // directly accessible or stable for testing via RTL alone.
    // A snapshot test could be useful here, or if the underlying element had a testID
    // and exposed its size prop or style in a testable way.
    const tree = render(
      <PaperProvider>
        <AvatarDisplay size={customSize} />
      </PaperProvider>
    );
    expect(tree.toJSON()).toBeTruthy();
  });
}); 