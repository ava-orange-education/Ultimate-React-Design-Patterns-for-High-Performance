import { memo } from "react";

const Component = ({ keyword }) => {
    const init = performance.now();
    while (init > performance.now() - 200) {}

    return (
      <>
        <h2>I am a slow component</h2>
        {keyword}
      </>
    );
}

export const SlowComponent = memo(Component)