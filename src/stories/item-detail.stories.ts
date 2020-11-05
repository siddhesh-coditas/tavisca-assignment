import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Meta, Story } from '@storybook/angular';
import { AppModule } from 'src/app/app.module';
import { CartReducer } from 'src/app/components/common/cart/state/cart-reducer';
import { ItemDetailsComponent } from 'src/app/components/item/item-details/item-details.component';

export default {
  title: 'Example/Card-Details',
  component: ItemDetailsComponent,
  decorators: [withKnobs],
} as Meta;

const dummyUserData = {
  "id": 100,
  "name": "admin admin",
  "email": "admin@dev.com",
  "password": "admin",
  "items": [
    0
  ]
}

sessionStorage.setItem('user', JSON.stringify(dummyUserData));

const Template: Story<ItemDetailsComponent> = (args: ItemDetailsComponent) => ({
  component: ItemDetailsComponent,
  moduleMetadata: {
    imports: [
      AppModule,
      StoreModule.forRoot({ allItems: CartReducer }),
      RouterModule.forRoot(
        [
          {
            path: '',
            loadChildren: () =>
              import('./../app/app.module').then((m) => m.AppModule),
          },
        ],
        {
          useHash: true,
        }
      ),
    ],
    providers: [
      {
        provide: APP_BASE_HREF,
        userValue: '/',
      },
    ],
  },
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  item: {
    id: 0,
    name: 'Intelligent Granite Salad',
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    imgUrl: 'http://placeimg.com/640/480',
    price: '683.00',
    cartView: false,
    userAccess: 100
  },
  isUpdateMode: false,
};
