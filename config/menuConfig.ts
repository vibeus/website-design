const alllink = [
  {
    title: 'Button',
    link: 'components/button',
  },
  //   'Action/index.md',
  //   'Affix/index.md',
  //   'Alert/index.md',
  //   'Anchor/index.md',
  //   'AutoComplete/index.md',
  //   'Avatar/index.md',
  //   'BackTop/index.md',
  //   'Badge/index.md',
  //   'Breadcrumb/index.md',
  //   'Button/index.md',
  //   'Calendar/index.md',
  //   'Card/index.md',
  //   'Carousel/index.md',
  //   'Cascader/index.md',
  //   'CityCascader/index.md',
  //   'ClickOutside/index.md',
  //   'Checkbox/index.md',
  //   'Collapse/index.md',
  //   'ColorPicker/index.md',
  //   'Comment/index.md',
  //   'ConfigProvider/index.md',
  //   'DatePicker/index.md',
  //   'Descriptions/index.md',
  //   'Divider/index.md',
  //   'Drawer/index.md',
  //   'Dropdown/index.md',
  //   'Empty/index.md',
  //   'Flex/index.md',
  //   'Form/index.md',
  //   'Grid/index.md',
  //   'Input/index.md',
  //   'Image/index.md',
  //   'ImageViewer/index.md',
  //   'InputNumber/index.md',
  //   'Layout/index.md',
  //   'List/index.md',
  //   'MagicInput/index.md',
  //   'MapSelect/index.md',
  //   'MemberSelect/index.md',
  //   'Mentions/index.md',
  //   'Menu/index.md',
  //   'message/index.md',
  //   'Modal/index.md',
  //   'notification/index.md',
  //   'PageHeader/index.md',
  //   'Pagination/index.md',
  //   'Popconfirm/index.md',
  //   'Popover/index.md',
  //   'Progress/index.md',
  //   'Radio/index.md',
  //   'Rate/index.md',
  //   'Rating/index.md',
  //   'Result/index.md',
  //   'SearchBar/index.md',
  //   'Select/index.md',
  //   'SelectMaterialModal/index.md',
  //   'Skeleton/index.md',
  //   'Slider/index.md',
  //   'Space/index.md',
  //   'Spin/index.md',
  //   'Statistic/index.md',
  //   'Steps/index.md',
  //   'Switch/index.md',
  //   'Table/index.md',
  //   'Tabs/index.md',
  //   'Tag/index.md',
  //   'Timeline/index.md',
  //   'TimePicker/index.md',
  //   'Tooltip/index.md',
  //   'Transfer/index.md',
  //   'Tree/index.md',
  //   'TreeSelect/index.md',
  //   'Typography/index.md',
  //   'Upload/index.md',
  //   'ValidateMobileModal/index.md',
  //   'Video/index.md',
  //   'hooks/index.md',
  //   'VideoUploader/index.md',
  //   'Tracker/index.md',
];

module.exports = {
  // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
  '/': [
    {
      title: '组件总览',
      link: '/quick-start',
      children: alllink,
    },
  ],
};