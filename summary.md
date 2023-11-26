# Summary 

- Looks good, but I would reduce the number of different colors,
  it's confusing, especially for fonts, one dark one for light elements would be enough;
- It works as it suppose to;
- no warnings or errors in console +

## what would i improve
- don't use magic numbers; 
- destructure constants directly from the props;
- useMemo & useCallback are very useful hooks;
- move logic from components to utils & hooks, 
  - for example : const {number,bottomNumber,handleOnAnimationEndTop,handleOnAnimationEndBottom} = useCardAnimation();
  look how you can optimize it;
- add propTypes;
- try to not repeat your code, add util func to calculate secs/mins/hours and create one additional func to handle given arg 'tens' just for instance;
- use scss modules for styling;
## Small guide


# Inner Structure of Component Directory

The component directory can have the following inner structure:
  - index.js: Export constants, the component itself, and any related files.
  - MyComponent.jsx: The main component file.
  - styles.scss: Styles related to the component.
  - types.js Types related to the component

  - hooks/: A directory to organize custom hooks specific to the component.
    - index.js: Export all custom hooks from this file.
    - useCustomHook.js: Custom hook file.

  - utils/: A directory to organize utility functions specific to the component.
    - index.js: Export all utility functions from this file.
    - utilityModule.js: Utility function file.

  - components/: A directory to organize nested components specific to the component.
    - index.ts: Export all components folders.
    - NestedComponent/: Directory for the nested component.
      - index.js: Export constants, the nested component, and any related files.
      - NestedComponent.jsx: The nested component file.
      - styles.scss: Styles related to the nested component.


