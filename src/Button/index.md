# Button 按钮

```jsx
/**
 * title: 按钮类型
 * desc: 按钮有五种类型：主按钮、次按钮、虚线按钮(实际用不到)、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
 */
import react from 'react';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const margin = {
  marginRight: 20,
};

export default () => (
  <>
    <h1>按钮类型</h1>
    <Button type="primary" style={margin}>
      主要按钮
    </Button>
    <Button type="primary" ghost style={margin}>
      ghost Button
    </Button>
    <Button style={margin}>Default Button</Button>
    <Button disabled style={margin}>
      Disabled Button
    </Button>
    <Button type="primary" style={margin} icon={<SearchOutlined />}>
      Search
    </Button>
    <Button type="link" size="small" style={margin}>
      Link Button
    </Button>
  </>
);
```

```jsx
import react from 'react';
import { Button } from 'antd';
const margin = {
  marginRight: 20,
};

export default () => (
  <>
    <h1>按钮大小</h1>
    <Button type="primary" size="small" style={margin}>
      small Button
    </Button>
    <Button type="primary" style={margin}>
      medium Button
    </Button>
    <Button type="primary" size="large" style={margin}>
      large Button
    </Button>
  </>
);
```

```jsx
import react from 'react';
import { Button } from 'antd';
const margin = {
  marginRight: 20,
};

export default () => (
  <>
    <h1>按钮hover、press样式</h1>
    <Button type="primary" style={margin}>
      Primary Button
    </Button>
    <Button type="primary" ghost style={margin}>
      ghost Button
    </Button>
    <Button style={margin}>Default Button</Button>
  </>
);
```

```jsx
/**
 * title: Button.Group
 * desc: Button.Group 在v4中已废弃，请使用Space代替
 */

import react, { useState } from 'react';
import { Button } from 'antd';

export default () => {
  // return (<Button.Group >
  //   <Button type="primary" style={margin}>Primary Button</Button>
  //   <Button type="primary" ghost style={margin}>ghost Button</Button>
  //   <Button style={margin}>Default Button</Button>
  // </Button.Group>)
  return (
    <Button.Group>
      <Button type="primary">Primary Button</Button>
      <Button type="primary" ghost>
        ghost Button
      </Button>
    </Button.Group>
  );
};
```

### API

| Name | Description | Type | Default |
| ---- | ----------- | ---- | ------- |

其他 API 见`antd`文档：https://ant.design/components/button-cn/
