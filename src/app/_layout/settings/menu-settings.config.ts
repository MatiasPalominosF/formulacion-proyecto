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
      { section: 'GESTIÓN', icon: 'la-ellipsis-h' },
      {
        title: 'Usuarios',
        icon: 'la-users',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Personal',
              page: '/user/user-list'
            },
            {
              title: 'Clientes',
              page: '/client/client-list'
            },
          ]
        }
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
              page: '/cancellation/only-cancellation-list'
            },
          ]
        }
      },
      {
        title: 'Anulaciones',
        icon: 'la-calendar-times-o',
        page: '/cancellation/cancellation-list',
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
      { section: 'GESTIÓN', icon: 'la-ellipsis-h' },
      {
        title: 'Usuarios',
        icon: 'la-users',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Personal',
              page: '/user/user-list'
            },
            {
              title: 'Clientes',
              page: '/client/client-list'
            },
          ]
        }
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
              page: '/cancellation/only-cancellation-list'
            },
          ]
        }
      },
      {
        title: 'Anulaciones',
        icon: 'la-calendar-times-o',
        page: '/cancellation/cancellation-list',
      },
      { section: 'VITRINA', icon: 'la-ellipsis-h' },
      {
        title: 'Vitrina comercial',
        icon: 'la-shopping-cart',
        page: '/store/my-store'
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





