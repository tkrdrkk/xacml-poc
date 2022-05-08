---
name: "feature"
root: "src/feature"
output: "**/*"
ignore: []
questions:
  feature: "Please enter feature name."
---

# `{{ inputs.feature }}/index.ts`

```typescript
import * from "./{{ inputs.feature | pascal }}";
```
# `{{ inputs.feature }}/{{ inputs.feature | pascal }}.tsx`

```typescript
import React from "react";

type Props = {
  children: React.ReactNode
};

export const {{inputs.feature | pascal}} = ({children}: Props) => {
  return <div>{{inputs.feature | pascal}}</div>;
}
```