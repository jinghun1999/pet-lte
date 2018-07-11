export const adminLteConf = {
  skin: 'blue',
  isSidebarLeftCollapsed: false,
  isSidebarLeftExpandOnOver: false,
  isSidebarLeftMouseOver: false,
  isSidebarLeftMini: true,
  sidebarRightSkin: 'dark',
  isSidebarRightCollapsed: true,
  isSidebarRightOverContent: false,
  layout: 'normal',
  sidebarLeftMenu: [
    {label: '功能选项', separator: true},
    {label: '营收概况', route: 'report/overview', iconClasses: 'fa fa-dashboard'},
    {label: '集团会员', route: 'report/guests', iconClasses: 'fa fa-users'},
    {label: '全部分店', route: 'report/branch/subs', iconClasses: 'fa fa-road', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    /*{
      label: 'Layout', iconClasses: 'fa fa-th-list',
      children: [
        {label: 'Configuration', route: 'layout/configuration'},
        {label: 'Custom', route: 'layout/custom'},
        {label: 'Header', route: 'layout/header'},
        {label: 'Sidebar Left', route: 'layout/sidebar-left'},
        {label: 'Sidebar Right', route: 'layout/sidebar-right'},
        {label: 'Content', route: 'layout/content'}
      ]
    },
    {label: 'COMPONENTS', separator: true},
    {label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks'},
    {label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
    {
      label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
        {label: 'Default Box', route: 'boxs/box'},
        {label: 'Info Box', route: 'boxs/info-box'},
        {label: 'Small Box', route: 'boxs/small-box'}
      ]
    },
    {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
    {
      label: 'Form', iconClasses: 'fa fa-files-o',
      children: [{label: 'Input Text', route: 'form/input-text'}]
    },
    {label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'}*/
  ]
};
