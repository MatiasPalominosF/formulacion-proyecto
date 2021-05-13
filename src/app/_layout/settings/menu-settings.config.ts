// Default menu settings configurations

export interface MenuItem {
  title: string;
  icon: string;
  page: string;
  isExternalLink?: boolean;
  issupportExternalLink?: boolean;
  isStarterkitExternalLink?: boolean;
  badge: { type: string, value: string };
  submenu: {
    items: Partial<MenuItem>[];
  };
  section: string;
}

export interface MenuConfig {
  horizontal_menu: {
    items: Partial<MenuItem>[]
  };
  vertical_menu: {
    items: Partial<MenuItem>[]
  };
}

export const MenuSettingsConfig: MenuConfig = {
  horizontal_menu: {
    items: [
      {
        title: 'Dashboard',
        icon: 'la-home',
        page: 'null',
        badge: { type: 'badge-info', value: '' },
        submenu: {
          items: [
            /*{
               title: 'Sales',
               page: '/dashboard/sales'
             },*/
            {
              title: 'Ecommerce',
              page: '/dashboard/ecommerce'
            },
          ]
        }
      },
      {
        title: 'Orientación',
        icon: 'la-television',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Horizontal',
              page: 'null'
            },
            {
              title: 'Vertical',
              page: 'null'
            },
          ]
        }
      },
      { section: 'PRINCIPAL', icon: 'la-ellipsis-h' },
      {
        title: 'Ventas',
        icon: 'la-cart-plus',
        page: '/sale/sale-list'
      },
      /*{
        title: 'Preventas',
        icon: 'la-cart-arrow-down'
      },*/
      { section: 'INVENTARIO', icon: 'la-ellipsis-h' },

      {
        title: 'Productos',
        icon: 'la-edit',
        page: '/todo-app'
      },
      {
        title: 'Stock',
        icon: 'feather ft-shopping-cart',
        page: '/contacts'
      },
      { section: 'PERSONAL', icon: 'la-ellipsis-h' },
      {
        title: 'Usuarios',
        icon: 'la-users',
        page: '/user/user-list'
      },
      { section: 'CLIENTES', icon: 'la-ellipsis-h' },
      {
        title: 'Usuarios',
        icon: 'la-users',
        page: '/client/client-list'
      },

      { section: 'ADMINISTRACIÓN', icon: 'la-ellipsis-h' },
      {
        title: 'Informes',
        icon: 'la-clipboard',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Ventas',
              page: '/report/report-list'
            },
            {
              title: 'Anulaciones',
              page: 'null'
            },
          ]
        }
      },
      {
        title: 'Anulaciones',
        icon: 'la-calendar-times-o',
        page: '',
      },
      { section: 'SOPORTE', icon: 'la-ellipsis-h' },
      {
        title: 'Contacto',
        icon: 'feather ft-message-circle',
        page: 'https://wa.link/9s54aq',
        isExternalLink: true
      }
    ]
  },
  vertical_menu: {
    items: [
      {
        title: 'Dashboard',
        icon: 'la-home',
        page: 'null',
        badge: { type: 'badge-info', value: '0' },
        submenu: {
          items: [
            /*{
               title: 'Sales',
               page: '/dashboard/sales'
             },*/
            {
              title: 'Ecommerce',
              page: '/dashboard/ecommerce'
            },
          ]
        }
      },
      {
        title: 'Orientación',
        icon: 'la-television',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Horizontal',
              page: 'null'
            },
            {
              title: 'Vertical',
              page: 'null'
            },
          ]
        }
      },
      { section: 'PRINCIPAL', icon: 'la-ellipsis-h' },
      {
        title: 'Ventas',
        icon: 'la-cart-plus',
        page: '/sale/sale-list'
      },
      /*{
        title: 'Preventas',
        icon: 'la-cart-arrow-down'
      },*/
      { section: 'INVENTARIO', icon: 'la-ellipsis-h' },
      {
        title: 'Productos',
        icon: 'la-edit',
        page: '/product/product-list'
      },
      /*{
        title: 'Stock',
        icon: 'feather ft-shopping-cart',
        page: '/stock/stock-list'
      },*/
      { section: 'PERSONAL', icon: 'la-ellipsis-h' },
      {
        title: 'Usuarios',
        icon: 'la-users',
        page: '/user/user-list'
      },
      { section: 'CLIENTES', icon: 'la-ellipsis-h' },
      {
        title: 'Usuarios',
        icon: 'la-users',
        page: '/client/client-list'
      },
      { section: 'ADMINISTRACIÓN', icon: 'la-ellipsis-h' },
      {
        title: 'Informes',
        icon: 'la-clipboard',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Ventas',
              page: '/report/report-list'
            },
            {
              title: 'Anulaciones',
              page: 'null'
            },
          ]
        }
      },
      {
        title: 'Anulaciones',
        icon: 'la-calendar-times-o',
        page: '',
      },
      { section: 'SOPORTE', icon: 'la-ellipsis-h' },
      {
        title: 'Contacto',
        icon: 'feather ft-message-circle',
        page: 'https://wa.link/9s54aq',
        isExternalLink: true
      }
    ]
  }

};





